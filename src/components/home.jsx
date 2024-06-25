import React from 'react';
// import pdf from "../pdf/resume.pdf";
import pdf from '../pdf/My Resume.pdf'
import hero from './data/hero.json';
import { useEffect,useRef } from 'react';
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Sachin",
        "I'm web developer",
      ] ,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, [] );
  return (
    <>
    <div className=" container home" id='home'>
        <div className="left">
        <h1 ref={typedRef}></h1>
                 <a href={ pdf} download= "My Resume.pdf" className="btn btn-outline-warning"> Download Resume</a>
            
        </div>
        <div className="right">
            <div className="img">
                <img src={`/assets/${hero.imgSrc}`} alt="hero" />
            </div>

        </div>
    </div>
    </>
  );
};

export default Home
