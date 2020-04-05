import React from 'react'
import NavHeader from './components/navHeader'
import Sidebar from './components/sidebar'
import { useMobileNavHook } from './hooks'
import {
  MobileNavCSS
} from './styles'

const MobileNav = () => {
  const {
    isOpen,
    toggle
  } = useMobileNavHook()

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
    </MobileNavCSS>
  )
}

export default MobileNav
