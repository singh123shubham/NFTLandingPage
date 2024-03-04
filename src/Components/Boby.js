import React from 'react'
import Footer from './Footer'
import AllCards from './AllCards'
import Advertisement from './Advertisement'
import CategoryNavBar from './CategoryNavBar'
import Section from './Section'
import LoadMore from './LoadMore'

const Boby = () => {
  return (
    <div className=' mx-20 bg'>
        <AllCards/>
        <Advertisement/>
        <CategoryNavBar/>
        <Section/>
        <Section/>
        <Section/>
        <Advertisement/>
        <LoadMore/>

    </div>
  )
}

export default Boby