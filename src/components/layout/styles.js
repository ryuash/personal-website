import styled from 'styled-components';
import { media } from '@src/styles';

export const LayoutCSS = styled.div`
  background: white;
  width: 100%;
  min-height: 100vh;
  margin-top: 50px;

  & > * {
    padding: 3rem 1.5rem;
  }

  ${media.tablet`
    margin-top: 75px;
  `}

  ${media.bigDesktop`
    padding-left: 25%;
    padding-bottom: 5rem;

    & > * {
      padding: 3rem 2rem 3rem 1rem;
    }
  `}
`;

export const BodyWrapperCSS = styled.div`
  ${media.desktop`
      // display: flex;
  `}
`;
