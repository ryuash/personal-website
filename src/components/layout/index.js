import React from 'react';
import { GlobalCSS } from '@src/styles';
import Nav from '@components/nav';
import Header from '@components/header';
import {
  LayoutCSS,
  BodyWrapperCSS,
} from './styles';

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Nav />
      <Header />
      <LayoutCSS>
        {children}
      </LayoutCSS>
      <GlobalCSS />
    </>
  );
};

export default Layout;
