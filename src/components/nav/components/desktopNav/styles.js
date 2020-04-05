import styled from 'styled-components'
import { media } from '@src/styles'

export const DesktopNavCSS = styled.div`
  display: none;
  ${media.tablet`
    display: block;
  `}
`
