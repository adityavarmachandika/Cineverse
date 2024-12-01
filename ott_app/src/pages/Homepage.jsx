import React from 'react'
import Header from '../components/Header'
import Moviecards from '../components/moviecards';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Homepage = () => {
  return (
    <div>
        <Header/>
        <div className='text-left ml-16 text-4xl font-extrabold' >New Movies</div>
        <Moviecards dynamiccss1="overflow-x-hidden" dynamiccss2=' flex  overflow-scroll gap-6' />
        <div className='text-left ml-16 text-4xl font-extrabold' >For you</div>
        <Moviecards dynamiccss1="overflow-x-hidden" dynamiccss2=' flex  overflow-scroll gap-6' />
        <div className='text-left ml-16 text-4xl font-extrabold' >Blockbusters</div>
        <Moviecards dynamiccss1="overflow-x-hidden" dynamiccss2=' flex  overflow-scroll gap-6' />
    </div>
  )
}

export default Homepage