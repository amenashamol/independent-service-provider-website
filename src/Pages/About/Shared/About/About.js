import React from 'react';
import logo  from '../../../../images/me.jpg'
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <div className='goal'>
                <h1><span style={{color:"green"}}>My</span> <span style={{color:"Blue"}}>career </span> <span style={{color:"red"}}> Thinking</span> </h1>
                <p>

I’ll learn new skills in my field this helpful because it allows me to keep up with trends, stay relevant in my industry, and have something new for myself or others. I might also get to use my new skills in a job interview or work project, which could lead to more work opportunities and better job prospects as well.Experimenting with new projects will help me grow in my career and learn more about the goals for a company or how other teams work. It might also teach me something unexpected that can be applied to another project as well.</p>
            </div>
        <div className='photo'>
            <img src={logo} alt="" />
        </div>
            
        </div>
    );
};

export default About;