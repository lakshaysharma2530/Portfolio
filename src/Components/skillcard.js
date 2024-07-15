import React from "react";
import "./skillcard.css"
const SkillCard=({image,title,color})=>{

    return(
        <div className="skillcard">
            <img src={image} height={60} width={60} alt={title}/>
            <h2 style={{fontWeight:'300', fontSize:'20px' ,color:'white'}}>{title}</h2>
        </div>
    )
}
export default SkillCard;