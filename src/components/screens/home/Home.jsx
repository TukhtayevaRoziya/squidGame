import React from 'react'

import Layout from './../../layout/Layout'
import Content from './Content'
import Soldier from './Soldier';
import Details from './Details';
import Carousel from './carousel/Carousel';

const Home = () => {
  return (
    <Layout>
        <Content />
        <Carousel />
        <Soldier />
        <Details />
    </Layout>
  )
}

export default Home
