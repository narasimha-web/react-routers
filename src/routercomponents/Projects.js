import React from 'react'
import {Link,Outlet} from 'react-router-dom';



const Projects = () => {
  return (
    <div>
        <h1>Projects</h1>
        <nav className='projectslink'>
        <Link to ='/Projects/MinorProjects'>MinorProjects</Link>
        <Link to = '/Projects/MajorProjects'>MajorProjects</Link>
   
        </nav>
        <Outlet/>
    </div>
  )
}

export default Projects