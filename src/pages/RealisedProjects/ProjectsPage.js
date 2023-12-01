import React from 'react'
import Navbar from '../../layout/Navbar/Navbar'
import Phone from '../../components/Phone/Phone'
import FinalizedProjects from '../../layout/Finalized projects/FinalizedProjects'
import Foooter from '../../layout/Footer/Foooter'

const ProjectsPage = () => {
  return (
   
    <div className="App">
      <Phone/>
      <Navbar/>
      <FinalizedProjects/>
      <Foooter/>
    </div>
    
  )
}

export default ProjectsPage