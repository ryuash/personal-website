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
  margin-top: 0
  `}
`;
