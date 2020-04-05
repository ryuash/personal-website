import styled from 'styled-components';
import { theme } from '@src/styles';

const { colors } = theme;

export const MobileNavHeaderCSS = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  height: 50px;
  position: fixed;
  top: 0;
  z-index: 99;

  h2 {
    margin-bottom: 0;
    .color {
      // color: ${colors.blue};
      color: #a8aeaf;
    }
  }
`;

export const MobileNavIconCSS = styled.div`
  width: 27px;
  position: absolute;
  left: 17px;

  &:after,
  &:before,
  > div {
    background-color: ${colors.font};
    border-radius: 10px;
    content: '';
    display: block;
    height: 3px;
    margin: 4px 0;
    transition: all .4s ease-in-out;
  }

  ${(props) => (props.isOpen ? (
    `
        &:before {
          transform: translateY(7px) rotate(137deg)
        }

        &:after {
          transform: translateY(-7px) rotate(-137deg)
        }

        > div {
          transform: scale(0)
        }
      `
  ) : '')}
`;
