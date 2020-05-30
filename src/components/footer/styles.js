import styled from 'styled-components';
import { theme, mixins, media } from '@src/styles';

const { colors } = theme;

export const FooterCSS = styled.div`
  background: ${colors.dark};
  ${media.bigDesktop`
    display: none;
  `}
`;

export const FooterDetails = styled.p`
  text-align: center;
  color: ${colors.blue};
  font-size: 0.8rem;
`;

export const FooterSocialCSS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  svg {
    ${mixins.hoverTransition}
    fill: white;

    &:hover {
      fill: ${colors.yellow};
    }
  }
`;
