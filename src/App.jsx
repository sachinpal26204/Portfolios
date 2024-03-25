import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Navbar from './components/navbar';
import Skill from './components/skill';
import Home from './components/home';
import Experience from './components/Experience';
import Projects from './components/project';
import Contact from './components/contact';




function App() {
 return(
  <>
    <Navbar/>
    <Home/>
    <Experience/>
    <Skill/>
    <Projects/>
    <Contact/>
    </>
 )
}

export default App
