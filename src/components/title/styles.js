import styled from 'styled-components';
import { theme } from '@src/styles';

const { colors } = theme;

export const TitleCSS = styled.h2`
  text-align: center;

  span {
    color: ${(props) => colors[props.color]};
  }

`;
