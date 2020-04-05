import React from 'react';
import {
  TitleCSS,
} from './styles';

const Title = (props) => {
  const {
    title,
    color,
  } = props;

  return (
    <TitleCSS color={color}>
      &lt;
      <span>
        {title}
        &nbsp;
      </span>
      /&gt;
    </TitleCSS>
  );
};

export default Title;
