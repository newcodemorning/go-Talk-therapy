import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import BlogHero from './BlogHero'
import CardLayout from './CardLayout'

const Blog = () => {
  return (
    <div>
        <Nav />
        <BlogHero />
        <CardLayout />
        <Footer />
    </div>
  )
}

export default Blog