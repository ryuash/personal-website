import styled from 'styled-components'
import { media } from '@src/styles'

export const MobileNavCSS = styled.div`
  ${media.tablet`
    display: none;
  `}
`
