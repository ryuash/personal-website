import React from 'react';
// import { Link } from "gatsby"
import Layout from '@components/layout';
import Header from '@components/header';
import About from '@components/about';
import FeaturedProjects from '@components/featuredProjects';
import Footer from '@components/footer';
import Contact from '@components/contact';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO />
    <Header />
    <About />
    <FeaturedProjects />
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
