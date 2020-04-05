import React from 'react';
import {
  GithubIcon,
  LinkedInIcon,
} from '@icons';
import config from '@src/config';
import {
  FooterCSS,
  FooterDetails,
  FooterSocialCSS,
} from './styles';

const { links } = config;

const Footer = () => (
  <FooterCSS>
    <FooterSocialCSS>
      <a
        href={links.github}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <GithubIcon />
      </a>
      <a
        href={links.linkedin}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <LinkedInIcon />
      </a>
    </FooterSocialCSS>
    <FooterDetails>
      Designed and built by Wingman Lee
    </FooterDetails>
  </FooterCSS>
);

export default Footer;
