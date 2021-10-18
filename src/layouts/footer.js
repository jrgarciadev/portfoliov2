/* eslint-disable global-require */
import { useEffect, useRef } from 'react';
import { Icon } from '@components/Icons';
import { socialMedia } from '@config';
import { srConfig } from '@config/sr';
import Image from 'next/image';
import { StyledFooter, StyledSocialLinks, StyledMadeWith, StyledCredit } from './styles';

const Footer = () => {
  const revealContainer = useRef(null);
  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledFooter ref={revealContainer}>
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
        <a rel="noreferrer" target="_blank" href="https://github.com/bchiang7/v4">
          <div>Adapted from the Brittany Chiang Portfolio</div>
        </a>
      </StyledCredit>
    </StyledFooter>
  );
};

export default Footer;
