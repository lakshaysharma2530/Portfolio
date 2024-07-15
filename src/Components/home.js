import React, { useState } from "react";
import Profile from "./profile.jpg"
import "./home.css"
import { PHONE, EMAIL, ADDRESS, NAME, DESIGNATION, DESCRIPTION } from "./text";
import close from "./cross.png"
import email from "./email.png"
import phone from "./phone.png"
import location from "./location.png"
const Home = () => {
    const [show, setShow] = useState(false);
    const detail = () => {
        setShow(!show)
    }
    return (
        <div className="home">
            <div className="header">
                <div className="wrapper">
                <div className="inner">
                    <div className="text">
                        <p className="name">Hi, I'm</p>
                        <p className="grad name">{NAME}</p>
                    </div>
                    <p className="desig">{DESIGNATION}</p>
                    <div className="description"><p>{DESCRIPTION}</p></div>
                    <div className="buttons">
                        <button className="hireme" onMouseOver={detail}><div style={{ backgroundColor: 'rgba(0, 0, 0, 0.575)', padding: '12px', paddingRight: "25px", paddingLeft: "25px", borderRadius: '50px' }}>Contact</div></button>
                        <button className="download-resume">Download Resume</button>
                    </div>
                </div>
                <img className="profile" src={Profile} alt="profile" />
                </div>
                <div className="cont-det">
                    <div className="email card"> <img height={25} width={25} src={email} alt="close" />{EMAIL}</div>
                    <div className="address card"><img height={25} width={25} src={location} alt="close" />{ADDRESS}</div>
                    <div className="phone card"><img height={25} width={25} src={phone} alt="close" />{PHONE}</div>
                
                </div>
            </div>
            {/* {show && <div id="contact" className="abc">
                <div className="close"><img height={25} width={25} src={close} alt="close" /></div>
                <div className="cont-det">
                    <div className="email card"> <img height={55} width={55} src={email} alt="close" />{EMAIL}</div>
                    <div className="address card"><img height={55} width={55} src={location} alt="close" />{ADDRESS}</div>
                    <div className="phone card"><img height={55} width={55} src={phone} alt="close" />{PHONE}</div>
                </div>
            </div>} */}
            {console.log(show)}
        </div>
    );
};
export default Home;