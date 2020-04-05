import styled from 'styled-components';
import { media, theme } from '@src/styles';

const { colors } = theme;

export const DesktopNavCSS = styled.div`
  display: none;
  ${media.tablet`
    border-top: solid 4px ${colors.blue};
    padding: 1.3rem 1rem;
    position: fixed;
    height: 50px;
    background: white;
    width: 100%;
    top: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: space-between;



    h2 {
      margin-bottom: 0;

      .color {
        color: ${colors.blue};
      }
    }

    .nav-items {
      a {
        margin-left: 1.5rem;
        transition: 0.3s;
        &:hover {
          color: ${colors.blue};
        }
      }
    }
  `}
`;
