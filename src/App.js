import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './routercomponents/Home';
import About from './routercomponents/About';
import Contacts from './routercomponents/Contacts';
import Navbar from './routercomponents/Navbar';
import './App.css';
import Information from './routercomponents/Information';
import Sucess from './Sucess';
import Notfound from './Notfound';
import Projects from './routercomponents/Projects';
import MinorProjects from './routercomponents/MinorProjects';
import MajorProjects from './routercomponents/MajorProjects';
import Users from './routercomponents/Users';
import UserDetailes from './routercomponents/UserDetailes';
import Signup from './routercomponents/Signup';
import Movies from './routercomponents/Movies';

const App = () => {
  return (
   <section>
    <Navbar/>
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/about' element ={<About/>} />
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/information' element={<Information/>}/>
      <Route path= '/Sucess' element={<Sucess/>}/>
    
      <Route path='/Projects' element={<Projects/>}> 
      <Route path='minorProjects' element={<MinorProjects/>}/>
      <Route path='majorProjects' element={<MajorProjects/>}/>
      </Route>
      
      <Route path='/Users' element={<Users/>}/>
      <Route path='/Users/:userId' element={<UserDetailes/>}/>
      <Route path='/Signup'element={<Signup/>}/>
      <Route path='/Movies'element={<Movies/>}/>
      <Route path= '*' element={<Notfound/>}/>
    </Routes>
   </section>
  )
}

export default App