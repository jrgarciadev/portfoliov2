import { Icon } from '@components/icons';
import Fade from 'react-reveal/Fade';
import { NumberedHeading } from '@common/styles';
import { featuredProjects } from '@config';
import {
  StyledProject,
  StyledProjectImg,
  StyledProjectLinks,
  StyledProjectImgWrapper,
} from './styles';

const Featured = () => {
  return (
    <section id="projects">
      <Fade bottom>
        <NumberedHeading>Some Projects I’ve Built</NumberedHeading>
      </Fade>

      <div>
        {featuredProjects &&
          featuredProjects.map((project) => {
            const { title, external, techs, github, cover, descriptionHtml } = project;
            return (
              <StyledProject key={title}>
                <div className="project-content">
                  <p className="project-overline">Featured Project</p>
                  <h3 className="project-title">{title}</h3>
                  <div
                    className="project-description"
                    dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                  />

                  {techs.length && (
                    <ul className="project-tech-list">
                      {techs.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  )}

                  <StyledProjectLinks>
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
                  </StyledProjectLinks>
                </div>

                <StyledProjectImgWrapper>
                  <a href={external || github || '#'}>
                    <div className="img-wrapper">
                      <div className="img-cont" />
                      <StyledProjectImg src={cover} alt={title} className="img" />
                    </div>
                  </a>
                </StyledProjectImgWrapper>
              </StyledProject>
            );
          })}
      </div>
    </section>
  );
};

export default Featured;
