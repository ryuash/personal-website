import styled from 'styled-components';
import { animated } from 'react-spring';

export const SidebarCSS = styled(animated.div)`
  position: fixed;
  width: 40%;
  background: white;
  height: calc(100vh - 50px);
  top: 50px;
  z-index: 60;
  overflow: hidden;
`;

export const NavItemCSS = styled.div`
  padding: 1rem;
  padding-right: 1.6rem;
  font-size: 1.1rem;
  a {
    color: #949494;
    text-decoration: none;
  }
`;
