import React from 'react'
import skills from "./data/skills.json";

const skill = () => {
  return (
    <>
    <div className="container skills" id='skill'>
      <h1>SKILLS</h1>
      <div className="items">
      {skills.map((data)=>(
        <>
        <div className="item" key={data.id}>
            <img src={`/assets/${data.imageSrc}`} alt="" />
            <h3>{data.title}</h3>
          </div>

  
        </>

      ))}
    </div>
    </div>
      
    </>
  );
};

export default skill
