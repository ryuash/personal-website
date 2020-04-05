import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { useSpring } from 'react-spring';
import {
  SidebarCSS,
  NavItemCSS,
} from './styles';
import {
  navItems,
} from './config';

const Sidebar = (props) => {
  const {
    isOpen = false,
    toggle,
  } = props;

  const { width } = useSpring({
    width: isOpen ? 230 : 0,
  });

  return (
    <SidebarCSS style={{ width }}>
      {navItems.map((x) => (
        <NavItemCSS key={x.to} onClick={toggle}>
          <AnchorLink to={x.to}>
            {x.display}
          </AnchorLink>
        </NavItemCSS>
      ))}
    </SidebarCSS>
  );
};

export default Sidebar;
