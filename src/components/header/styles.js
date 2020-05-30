import styled from 'styled-components';
import { media, theme, mixins } from '@src/styles';

const { colors } = theme;

export const HeaderCSS = styled.div`
  ${mixins.flexCenter};
  background: url('./coverA.png');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 75vh;
  text-align: center;
  flex-direction: column;

  ${media.tablet`
    align-items: flex-start;
    text-align: left;
    padding-left: 4rem;
  `}

  ${media.bigDesktop`
    position: fixed;
    width: 25%;
    height: 100vh;
    padding: 2rem;
    margin-top: -75px;
    background-position: 81%;
  `}
`;

export const HeaderTitleCSS = styled.h1`
  color: white;
  margin: 0 0 0.3rem;
`;

export const HeaderMottoCSS = styled.h3`
  color: ${colors.yellow};
  margin-bottom: 1rem;

  ${media.tablet`
    margin-bottom: 0.5rem;
  `}
`;

export const HeaderDetailsCSS = styled.p`
  display: none;

  ${media.tablet`
    display: block;
    color: white;
    font-weight: 300;
    width: 500px;
    margin-bottom: 1rem;
  `}

  ${media.bigDesktop`
    width: auto;
  `}
`;

export const HeaderSocialCSS = styled.div`
  svg {
    ${mixins.hoverTransition}
    fill: white;

    &:hover {
      fill: ${colors.yellow};
    }
  }
`;
