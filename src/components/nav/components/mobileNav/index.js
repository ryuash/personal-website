import React from 'react';
import { useSpring } from 'react-spring';
import NavHeader from './components/navHeader';
import Sidebar from './components/sidebar';
import { useMobileNavHook } from './hooks';
import {
  MobileNavCSS,
  OverlayCSS,
} from './styles';

const MobileNav = () => {
  const {
    isOpen,
    toggle,
  } = useMobileNavHook();

  console.log(isOpen, 'isopen');

  const overlayAnimation = useSpring({
    opacity: isOpen ? 0.7 : 0,
    display: isOpen ? 'block' : 'none',
  });

  return (
    <MobileNavCSS>
      <NavHeader
        isOpen={isOpen}
        toggle={toggle}
      />
      <Sidebar
        isOpen={isOpen}
        toggle={toggle}
      />
      <OverlayCSS
        onClick={toggle}
        style={overlayAnimation}
      />
    </MobileNavCSS>
  );
};

export default MobileNav;
