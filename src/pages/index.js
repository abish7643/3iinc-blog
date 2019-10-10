import React from "react"
import { Link } from "gatsby"
import Nav from '../components/nav'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Featured from "../components/featured"

const IndexPage = () => (
  <Layout>
    <Nav/>
    <Featured/>
  </Layout>

)

export default IndexPage
