import styled from 'styled-components';
import { theme, mixins, media } from '@src/styles';

const { colors, width } = theme;

export const AboutCSS = styled.div`
  ${media.tablet`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `}
`;

export const AboutFlexContainerCSS = styled.div`
  ${mixins.flexCenter}
  flex-direction: column;

  ${media.tablet`
    max-width: ${width.maxWidth};
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  `}

  ${media.bigDesktop`
    max-width: ${width.bigDesktopMaxWidth};
  `}

`;

export const AboutDetailCSS = styled.div`
  text-align: center;

  p {
    margin-bottom: 1.3rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ${media.tablet`
    flex: 1;
    text-align: left;
  `}
`;

export const AboutImageCSS = styled.div`
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 0 1rem;
    object-fit: cover;
  }

  ${media.tablet`
    position: relative;

    img {
      height: 300px;
      width: 300px;
      border-radius: 0;
      margin-right: 6rem;
      position: relative;
      z-index: 1;
    }

    #image-decorator {
      width: 300px;
      height: 300px;
      position: absolute;
      top: 20px;
      left: 25px;
      border: 2px dashed ${colors.yellow};
    }
  `}
`;
