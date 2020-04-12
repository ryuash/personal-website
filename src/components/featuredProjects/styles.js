import styled from 'styled-components';
import { theme, media } from '@src/styles';

const { colors } = theme;

export const FeatureProjectsCSS = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FeatureProjectSingleGridCSS = styled.div`
  position: relative;
  z-index: 1;

  &:after {
    content: " ";
    height: 100px;
    width: 300vw;
    margin-left: -200vw;
    margin-right: -200vw;
    background-repeat: repeat-x;
    position: absolute;
    top: 60%;
    transform-origin: 80%;
    transform: ${(props) => (props.isOdd ? 'rotate(-5deg)' : 'rotate(5deg)')};
    z-index: -1;
  }
`;

export const FeatureProjectsGridCSS = styled.div`
  display: grid;
  grid-gap: 3rem;
  background: white;

  ${media.tablet`
    grid-gap: 20px;
  `}
`;
