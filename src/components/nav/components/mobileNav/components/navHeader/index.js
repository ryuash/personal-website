import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
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
      <AnchorLink to="/#home">
        <h2>
          &lt;
          <span className="color">Wingman</span>
          &nbsp;/&gt;
        </h2>
      </AnchorLink>
    </MobileNavHeaderCSS>
  );
};

export default NavHeader;
