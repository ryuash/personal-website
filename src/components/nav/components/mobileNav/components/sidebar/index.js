import React from 'react'
import {
  SidebarCSS
} from './styles'

const Sidebar = (props) => {
  const {
    isOpen,
    toggle
  } = props
  // need to set up toggle animation
  return (
    <SidebarCSS>
      sidebar
    </SidebarCSS>
  )
}

export default Sidebar
