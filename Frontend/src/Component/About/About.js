import React from 'react'
import "./About.css"
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai"

function About() {
    return (
        <div className='about'>
            <div>About Us</div>
            <div>This is a final project made for Edureka Internship 2022. This is a food ordering platform which
                is complete full stack app from frontend to backend, made using Mern stack tech.</div>
            <div>
                <div style={{ "fontWeight": "bold", "fontSize": "20px" }}>Get in Touch</div>
                <div style={{ "display": "flex", "justifyContent": "center", "gap": "20px" }}>
                    <a href='https://github.com/Amyx000/Food-Ordering-App' target={"_blank"} rel="noopener noreferrer">
                        <AiOutlineGithub />
                    </a>
                    <a style={{ "color": "#00acee" }} href='https://twitter.com/Armankazi111' target={"_blank"} rel="noopener noreferrer">
                        <AiOutlineTwitter />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About