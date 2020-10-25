/* eslint-disable react/jsx-one-expression-per-line */
import { useState, useRef } from 'react';
import Link from 'next/link';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Icon } from '@components/Icons';
import { projects } from '@config';
import { PROJECTS_GRID_LIMIT } from '@lib/constants';
import { StyledProject, StyledProjectsSection } from './styles';

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const firstSix = projects.slice(0, PROJECTS_GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  return (
    <StyledProjectsSection>
      <h2 ref={revealTitle}>Other Projects</h2>

      <Link href="/archive">
        <a className="archive-link inline-link">View all projects</a>
      </Link>

      <TransitionGroup className="projects-grid">
        {projectsToShow &&
          projectsToShow.map((project, i) => {
            const { title, descriptionHtml, github, external, techs } = project;

            return (
              <CSSTransition
                key={title}
                classNames="fadeup"
                timeout={i >= PROJECTS_GRID_LIMIT ? (i - PROJECTS_GRID_LIMIT) * 300 : 300}
                exit={false}
              >
                <StyledProject
                  key={title}
                  tabIndex="0"
                  style={{
                    transitionDelay: `${
                      i >= PROJECTS_GRID_LIMIT ? (i - PROJECTS_GRID_LIMIT) * 100 : 0
                    }ms`,
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
                        dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                      />
                    </header>

                    <footer>
                      {techs && (
                        <ul className="project-tech-list">
                          {techs.map((tech) => (
                            <li key={tech}>{tech}</li>
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

      <button type="button" className="more-button" onClick={() => setShowMore(!showMore)}>
        Show {showMore ? 'Less' : 'More'}
      </button>
    </StyledProjectsSection>
  );
};

export default Projects;
