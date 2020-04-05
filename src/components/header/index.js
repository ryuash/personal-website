import React from 'react'
import {
  LinkedInIcon,
  GithubIcon
} from '@icons'
import config from '@src/config'
import {
  HeaderCSS,
  HeaderTitleCSS,
  HeaderMottoCSS,
  HeaderDetailsCSS,
  HeaderSocialCSS
} from './styles'

const { links } = config

const Header = () => {
  return (
    <HeaderCSS>
      <HeaderTitleCSS>
        Wingman Lee,
      </HeaderTitleCSS>
      <HeaderMottoCSS>
        Always building things on the web
      </HeaderMottoCSS>
      <HeaderDetailsCSS>
        Currently a software engineer based in Hong Kong, I specialise in designing and developing high quality applications with the user’s experience and needs as a priority.
      </HeaderDetailsCSS>
      <HeaderSocialCSS>
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
      </HeaderSocialCSS>
    </HeaderCSS>
  )
}

export default Header
