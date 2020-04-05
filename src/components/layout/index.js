import React from 'react'
import { GlobalCSS } from '@src/styles'
import Nav from '@components/nav'
import { LayoutCSS } from './styles'

const Layout = (props) => {
  const { children } = props
  return (
    <>
      <Nav />
      <LayoutCSS>
        {children}
      </LayoutCSS>
      <GlobalCSS />
    </>
  )
}

export default Layout
