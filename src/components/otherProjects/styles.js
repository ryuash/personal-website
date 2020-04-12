import styled from 'styled-components';
import { media, theme } from '@src/styles';

const { width } = theme;

export const OtherProjectsCSS = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const OtherProjectsGridCSS = styled.div`
  display: grid;
  grid-gap: 3rem;
  background: white;

  ${media.tablet`
    grid-template-columns: repeat(3, 1fr);
    max-width: ${width.maxWidth};
  `}
`;
