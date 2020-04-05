import styled from 'styled-components';
import { media, theme, mixins } from '@src/styles';

const { colors } = theme;

export const DesktopNavCSS = styled.div`
  ${mixins.dropShadow}
  display: none;
  ${media.tablet`
    padding: 1.3rem;
    position: fixed;
    height: 75px;
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
        // color: ${colors.blue};
        color: #a8aeaf;
      }
    }

    .nav-items {
      a {
        margin-left: 1.5rem;
        transition: 0.3s;
        &:hover {
          color: ${colors.red};
        }
      }
    }
  `}
`;
