import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { DesktopNavCSS } from './styles';
import { navItems } from '../../config';

const DesktopNav = () => (
  <DesktopNavCSS>
    <AnchorLink to="/#home">
      <h2>
        &lt;
        <span className="color">Wingman</span>
        &nbsp;/&gt;
      </h2>
    </AnchorLink>
    <div className="nav-items">
      {navItems.map((x) => (
        <AnchorLink to={x.to}>
          {x.display}
        </AnchorLink>
      ))}
      <a href="https://drive.google.com/file/d/1Azn2ydrWK5YURCfwLgBJuqXQZwWCe_cr/view" rel="noopener noreferrer" target="_blank">Resume</a>
    </div>
  </DesktopNavCSS>
);

export default DesktopNav;
