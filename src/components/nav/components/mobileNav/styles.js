import styled from 'styled-components';
import { animated } from 'react-spring';
import { media } from '@src/styles';

export const MobileNavCSS = styled.div`
  position: relative;
  ${media.tablet`
    display: none;
  `}
`;

export const OverlayCSS = styled(animated.div)`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(12, 13, 16, 0.82);
  z-index: 50;
`;
