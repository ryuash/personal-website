import React from 'react';
import { useSpring } from 'react-spring';
import {
  SidebarCSS,
} from './styles';

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
      sidebar
    </SidebarCSS>
  );
};

export default Sidebar;
