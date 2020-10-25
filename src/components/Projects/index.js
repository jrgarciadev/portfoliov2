import { useState, useRef } from 'react';
import Link from 'next/link';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Icon } from '@components/Icons';
import { StyledProject, StyledProjectsSection } from './styles';

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);

  const GRID_LIMIT = 6;
  const projects = [];
  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  return (
    <StyledProjectsSection>
      <h2 ref={revealTitle}>Other Noteworthy Projects</h2>

      <Link className="inline-link archive-link" href="/archive" ref={revealArchiveLink}>
        view the archive
      </Link>

      <TransitionGroup className="projects-grid">
        {projectsToShow &&
          projectsToShow.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { github, external, title, tech } = frontmatter;

            return (
              <CSSTransition
                key={i}
                classNames="fadeup"
                timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                exit={false}
              >
                <StyledProject
                  key={i}
                  ref={(el) => (revealProjects.current[i] = el)}
                  tabIndex="0"
                  style={{
                    transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                  }}
                >
                  <div className="project-inner">
                    <header>
                      <div className="project-top">
                        <div className="folder">
                          <Icon name="Folder" />
                        </div>
                        <div className="project-links">
                          {github && (
                            <a href={github} aria-label="GitHub Link">
                              <Icon name="GitHub" />
                            </a>
                          )}
                          {external && (
                            <a href={external} aria-label="External Link">
                              <Icon name="External" />
                            </a>
                          )}
                        </div>
                      </div>

                      <h3 className="project-title">{title}</h3>

                      <div
                        className="project-description"
                        dangerouslySetInnerHTML={{ __html: html }}
                      />
                    </header>

                    <footer>
                      {tech && (
                        <ul className="project-tech-list">
                          {tech.map((tech, i) => (
                            <li key={i}>{tech}</li>
                          ))}
                        </ul>
                      )}
                    </footer>
                  </div>
                </StyledProject>
              </CSSTransition>
            );
          })}
      </TransitionGroup>

      <button className="more-button" onClick={() => setShowMore(!showMore)}>
        Show {showMore ? 'Less' : 'More'}
      </button>
    </StyledProjectsSection>
  );
};

export default Projects;
