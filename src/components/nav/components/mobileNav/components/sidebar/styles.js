import styled from 'styled-components';
import { animated } from 'react-spring';

export const SidebarCSS = styled(animated.div)`
  position: fixed;
  width: 40%;
  background: pink;
  height: calc(100vh - 50px);
  top: 50px;
  z-index: 60;
  overflow: hidden;
`;
