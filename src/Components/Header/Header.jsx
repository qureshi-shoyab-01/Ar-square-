import React from 'react'
import './headerstyle.css';

import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Header = () => {

    useGSAP(() => {
        gsap.from(".Header_mail_content a ", {
            y: -50,
            opacity: 0,
            duration: 1.5,
            delay: 1,
            stagger: 1
        })

    })



    return (
        <>
            <div className="Header_First-Content">
                <div className="Header_mail_content">
                    <a href="mailto:arsquarechomu@gmail.com">
                        <EmailIcon />
                    </a>
                    <a href="mailto:arsquarechomu@gmail.com">
                        <p> arsquarechomu@gmail.com</p>
                    </a>

                </div>
                <div className="Header_mail_content">
                    <a href="tel:+919783717366">
                        <PhoneInTalkIcon />
                    </a>

                    <a href="tel:+919783717366">
                        <p>978-371-7366</p>
                    </a>
                    <a href="tel:+919783717366">
                        <p>937-636-7347</p>
                    </a>
                </div>
            </div>
            <div className="Header_main-content">
                <div className="navbar">
                    <ul>
                    <li>Home</li>
                    <li>About-us</li>
                    <li>Contact-us</li>
                    </ul>
                </div>

                <div className="logo-content">
                    <a href="#">
                    <img src="img/logo-1.png" alt="logo" />
                    </a>
                </div>
                <div className="navbar">
                    <ul>
                        
                        <li>Job Oriented Courses
                            <div className="Job-courses-details">
                                <ul>
                                    <li>Web Designing ( UI/UX )</li>
                                    <li>Web Development</li>
                                    <li>Graphics Designing</li>
                                    <li>Data Science</li>
                                    <li>Data Analytics</li>
                                    <li>Advance Excel</li>
                                    <li>Machine learning</li>
                                    <li>VFX ( Visual Effects )</li>
                                    <li>Video Editing</li>
                                    <li>Microsoft Office</li>
                                    <li>Ethical Hacking</li>
                                    <li>Digital Marketing</li>
                                    <li>2D 3D Animations</li>
                                </ul>
                            </div>
                        </li>
                        <li>coding
                            <div className="Job-courses-details">
                                <ul>
                                    <li>C Language</li>
                                    <li>C++ Programming</li>
                                    <li>Java</li>
                                    <li>Python</li>
                                    <li>DSA</li>
                                    <li>SQL</li>
                                    <li>PHP</li>
                                    <li>NODE JS</li>
                                    <li>RUBY</li>
                                    <li>JavaScript</li>
                                    <li>R Language</li>
                                    <li>TypeScript</li>
                                    <li>PGDCA</li>
                                </ul>
                            </div>
                        </li>
                        <li>Our-Team</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header