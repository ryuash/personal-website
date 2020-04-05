import styled from 'styled-components'
import { media, theme, mixins } from '@src/styles'

const { colors } = theme

export const HeaderCSS = styled.div`
  ${mixins.flexCenter};
  background: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url('https://source.unsplash.com/user/erondu/1600x900');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 75vh;
  text-align: center;
  flex-direction: column;

  ${media.tablet`
    align-items: flex-start;
    text-align: left;
  `}
`

export const HeaderTitleCSS = styled.h1`
  color: white;
  margin: 0 0 0.3rem;
`

export const HeaderMottoCSS = styled.h3`
  color: ${colors.yellow};
  margin-bottom: 1rem;

  ${media.tablet`
    margin-bottom: 0.5rem;
  `}
`

export const HeaderDetailsCSS = styled.p`
  display: none;

  ${media.tablet`
    display: block;
    color: white;
    font-weight: 300;
    width: 500px;
    margin-bottom: 1rem;
  `}
`

export const HeaderSocialCSS = styled.div`
  svg {
    ${mixins.hoverTransition}
    fill: white;

    &:hover {
      fill: ${colors.red};
    }
  }
`
