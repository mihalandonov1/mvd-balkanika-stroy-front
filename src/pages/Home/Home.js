import React from 'react'
import '../../App.css';
import Navbar from '../../layout/Navbar/Navbar';
import Header from '../../layout/Header/Header';
import FutureProjects from '../../layout/Future Projects/FutureProjects';
import FinalizedProjects from '../../layout/Finalized projects/FinalizedProjects';
import Gallery from '../../layout/Galery/Gallery';
import Foooter from '../../layout/Footer/Foooter';
import Phone from '../../components/Phone/Phone';

const Home = () => {
  return (
    <div className="App">
      <Phone/>
      <Navbar/>
      <Header/>
      <FutureProjects/>
      <FinalizedProjects/>
      <Gallery/>
      <Foooter/>
    </div>
  )
}

export default Home