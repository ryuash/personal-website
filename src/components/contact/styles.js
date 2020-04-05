import styled from 'styled-components';
import { theme, media } from '@src/styles';

const { colors } = theme;

export const ContactCSS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .success {
    text-align: center;
  }
`;
export const ContactHeaderCSS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1.5rem;

  p {
    text-align: center;
  }

  .email {
    color: ${colors.red};
  }
`;

export const ContactFormCSS = styled.form`
  width: 100%;

  input, textarea {
    border: 1px solid #c9c9c9;
    border-radius: 5px;
    width: 100%;
    padding: 0.5rem;
  }

  textarea {
    min-height: 150px;
  }

  .input-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    flex-direction: column;
  }

  label {
    margin: 0.5rem 0;
  }

  button {
    width: 100%;
    background: ${colors.red};
    padding: 1rem;
    color: white;
    margin-top: 1.5rem;
    border: none;
    border-radius: 3px;

    &:hover {
      cursor: pointer;
    }
  }

  ${media.tablet`
    max-width: 500px;
  `}
`;
