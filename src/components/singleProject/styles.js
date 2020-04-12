import styled from 'styled-components';
import { mixins, theme, media } from '@src/styles';

const { colors, width } = theme;

export const SingleProjectCSS = styled.div`
  ${mixins.dropShadow}
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background: white;
  display: flex;
  flex-direction: column;

  ${(props) => {
    if (props.featured) {
      return (
        media.tablet`
          ${mixins.noDropShadow}
          max-width: ${width.maxWidth};
          background: transparent;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          flex-direction: column;
          border-radius: 0;
          position: relative;
          margin-bottom: 2rem;
        `
      );
    }
    return null;
  }}
`;

export const SingleProjectBackgroundCSS = styled.div`
  width: 100%;
  height: 125px;
  background: ${(props) => `url(${props.background})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  
  ${(props) => {
    if (props.featured) {
      return (
        media.tablet`
          width: 65%;
          height: 300px;
          border-radius: 0;
          filter: ${props.hover ? 'none' : 'grayscale(100%)'};
          transition: 0.2s;
          border: 1px solid #f1f1f1;
          ${props.isOdd && (`
            align-self: flex-end;
          `)}

          ${!props.isOdd && (`
            align-self: flex-start;
          `)}
        `
      );
    }
    return null;
  }}
`;

export const SingleProjectDetailContainerCSS = styled.div`
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
  flex: 1;

  ${(props) => {
    if (props.featured) {
      return (
        media.tablet`
          ${mixins.dropShadow}
          width: 60%;
          margin-top: -75px;
          background: white;
          margin-bottom: 1rem;
          padding: 2.5rem 2rem;
          border-radius: 5px;

          ${props.isOdd && (`
            align-self: flex-start;
            margin-left: 15px;
          `)}

          ${!props.isOdd && (`
            align-self: flex-end;
            margin-right: 15px;
          `)}
        `
      );
    }
    return null;
  }}
`;

export const SingleProjectTitleCSS = styled.h3`
  text-align: center;
  margin-bottom: 1rem;

  ${(props) => {
    if (props.featured) {
      return (
        media.tablet`
          ${props.isOdd && (`
            text-align: left;
          `)}

          ${!props.isOdd && (`
            text-align: right;
          `)}

          width: 100%;
        `
      );
    }
    return null;
  }}
`;

export const SingleProjectAboutCSS = styled.p`
  text-align: center;
  margin-bottom: 1.5rem;
  color: ${(props) => (props.color === 'true' ? '#C9C9C9' : 'inherit')};
  ${(props) => {
    if (props.featured) {
      return (
        media.tablet`
          ${props.isOdd && (`
            text-align: left;
          `)}

          ${!props.isOdd && (`
            text-align: right;
          `)}

          width: 100%;
        `
      );
    }
    return null;
  }}
`;

export const SingleProjectSocialCSS = styled.div`
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: center;

  svg {
    ${mixins.hoverTransition}
    fill: ${colors.gray200};
    width: 25px;

    &:hover {
      fill: ${colors.red};
    }
  }

  ${(props) => {
    if (props.featured) {
      return (
        media.tablet`
          ${props.isOdd && (`
            justify-content: flex-start;
          `)}

          ${!props.isOdd && (`
          justify-content: flex-end;
          `)}
        `
      );
    }
    return null;
  }}
`;

export const FlexEndCSS = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
`;
