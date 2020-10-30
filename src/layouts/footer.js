import { Icon } from '@components/Icons';
import { socialMedia } from '@config';
import Image from 'next/image';
import { StyledFooter, StyledSocialLinks, StyledMadeWith, StyledCredit } from './styles';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url }) => (
              <li key={name}>
                <a href={url} aria-label={name}>
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>

      <StyledMadeWith>
        <p>Made with</p>
        <a rel="noreferrer" target="_blank" href="https://nextjs.org/">
          <Image src="/nextjs-white-logo.svg" width={100} height={100} />
        </a>
      </StyledMadeWith>

      <StyledCredit tabindex="-1">
        <a href="https://github.com/bchiang7/v4">
          <div>Adapted from Brittany Chiang Portfolio</div>
        </a>
      </StyledCredit>
    </StyledFooter>
  );
};

export default Footer;
