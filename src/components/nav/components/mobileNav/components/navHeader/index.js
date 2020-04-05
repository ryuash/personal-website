import React from 'react';
import {
  MobileNavHeaderCSS,
  MobileNavIconCSS,
} from './styles';

const NavHeader = (props) => {
  const {
    isOpen,
    toggle,
  } = props;

  return (
    <MobileNavHeaderCSS>
      <MobileNavIconCSS
        onClick={toggle}
        isOpen={isOpen}
      >
        <div />
      </MobileNavIconCSS>
      <h2>
        &lt;
        <span className="color">Wingman</span>
        &nbsp;/&gt;
      </h2>
    </MobileNavHeaderCSS>
  );
};

export default NavHeader;
