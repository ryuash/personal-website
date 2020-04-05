import React from "react"
// import { Link } from "gatsby"
import Layout from '@components/layout'
import Header from '@components/header'
import About from '@components/about'
import FeaturedProjects from '@components/featuredProjects'
import Footer from '@components/footer'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <About />
    <FeaturedProjects />
    <Footer />
  </Layout>
)

export default IndexPage
