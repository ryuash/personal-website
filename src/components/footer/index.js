import React from 'react'
import {
  GithubIcon,
  LinkedInIcon
} from '@icons'
import {
  FooterCSS,
  FooterDetails,
  FooterSocialCSS
} from './styles'

const Footer = () => {
  return (
    <FooterCSS>
      <FooterSocialCSS>
        <GithubIcon />
        <LinkedInIcon />
      </FooterSocialCSS>
      <FooterDetails>
        Designed and built by Wingman Lee
      </FooterDetails>
    </FooterCSS>
  )
}

export default Footer
