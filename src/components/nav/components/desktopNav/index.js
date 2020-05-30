import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { DesktopNavCSS } from './styles';
import { navItems } from '../../config';
import getScreenSize from '../../../../utils/screenSize';
import { sizes } from '../../../../styles/media';

const DesktopNav = () => {
  const { width } = getScreenSize();
  let homeAnchor = '/#home';
  if (width >= sizes.bigDesktop) {
    homeAnchor = '/#about';
  }
  return (
    <DesktopNavCSS>
      <AnchorLink to={homeAnchor}>
        <h2>
          &lt;
          <span className="color">Wingman</span>
        &nbsp;/&gt;
        </h2>
      </AnchorLink>
      <div className="nav-items">
        {navItems.map((x) => (
          <AnchorLink to={x.to} key={x.to}>
            {x.display}
          </AnchorLink>
        ))}
        <a href="./wingmanlee-resume-2020.pdf" rel="noopener noreferrer" target="_blank">Resume</a>
      </div>
    </DesktopNavCSS>
  );
};

export default DesktopNav;
