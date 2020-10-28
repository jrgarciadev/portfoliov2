import { NumberedHeading } from '@common/styles';
import Image from 'next/image';
import { skills } from '@config';
import { StyledAboutSection, StyledText, StyledPic } from './styles';

const About = () => {
  return (
    <StyledAboutSection id="about">
      <NumberedHeading>About Me</NumberedHeading>
      <div className="inner">
        <StyledText>
          <div>
            <p>Hello! I&apos;m Junior, a Software Developer based in Buenos Aires, Argentina.</p>
            <p>
              I enjoy creating beautiful and reliable applications for internet and phones.
              <br />
              My goal is to always build scalable products and performant experiences.
            </p>
            <br />
            <p>Here are a few technologies I&apos;ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Image width={300} height={300} src="/avatar.png" alt="Avatar" className="img" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
