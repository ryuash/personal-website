import styled from 'styled-components';
import { theme, media } from '@src/styles';

const { colors } = theme;

export const TitleCSS = styled.h2`
  text-align: center;

  span {
    color: ${(props) => colors[props.color]};
  }

  ${media.bigDesktop`
      width: 100%;
      text-align: right;
      margin-bottom: 3rem;
  `}
`;
