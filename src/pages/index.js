import React from 'react';
import Layout from '@components/layout';
import About from '@components/about';
import FeaturedProjects from '@components/featuredProjects';
import OtherProjects from '@components/otherProjects';
import Footer from '@components/footer';
import Contact from '@components/contact';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Wingman" />
    <About />
    <FeaturedProjects />
    <OtherProjects />
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
