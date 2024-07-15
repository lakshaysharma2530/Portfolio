import React from "react";
import SkillCard from "./skillcard";
import cross from './cross.png'
import "./skills.css"
import m from './mongodb-icon.svg'
import e from './expressjs-icon.svg'
import r from './react-js-icon.svg'
import n from './node-js.svg'
import { mySkills } from "./text";
// import mongo from './mongodb-original-wordmark.svg'
const Skills=()=>{
    return(
        <div className="skills">
            <h1>Key Skills</h1>
            <div style={{display:'flex', justifyContent:'center'}}>
            <div className="mern">
                <div className="outer-circle">
                <img className="circle" src={m} height={100} width={100} alt="mongo db"/>
                <h2>mongo DB</h2>
                </div>
                <div className="outer-circle">
                <img className="circle" src={e} height={100} width={100} alt="express js"/>
                <h2>expressjs</h2>
                </div>
                <div className="outer-circle">
                <img className="circle" src={r} height={100} width={100} alt="react js"/>
                <h2>Reactjs</h2>
                </div>
                <div className="outer-circle">
                <img className="circle" src={n} height={100} width={100} alt="node js"/>
                <h2>nodejs</h2>
                </div>
            </div>
            </div>
            {/* <div className="myskills"> */}
            {/* {mySkills.map((item,index)=>(
                <div key={index} className={`skill-${index}`}>
                <SkillCard  image={item.image} title={item.skill}/>
                </div>
            )) } */}
            {Object.keys(mySkills).map((row,index)=>(
                <div className={`main-${row}`}>
                    {mySkills[row].map((item,index) =>(
                        <div key={index} className={`skill`}>
                            <SkillCard  image={item.image} title={item.skill}/>
                        </div>
                    ))}
                </div>
            )) }
            {/* </div> */}
        </div>
    )
}
export default Skills;