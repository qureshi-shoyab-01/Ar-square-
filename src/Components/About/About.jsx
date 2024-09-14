import React, { useRef } from 'react'
import './About.css'
import './AboutRes.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    const Had = useRef();


    useGSAP(() => {
        gsap.to(Had.current, {
            scale: 1,
            duration: 6,
            stagger: 1,
            scrollTrigger: {
                trigger: ".About-Component",
                scroller: "body",
                markers: false,
                start: "top 80%",
                end: "top 20%",
                scrub: 2,
                pin: false
            }
        });
        gsap.to(".About_section-component", {
            x: 0,
            duration: 60,
            stagger: 1,
            scrollTrigger: {
                trigger: ".About-Component",
                scroller: "body",
                markers: false,
                start: "top 80%",
                end: "top 20%",
                scrub: 5,
                pin: false
            }
        });
        gsap.to(".About_section-text-component", {
            x: 0,
            duration: 60,
            stagger: 1,
            scrollTrigger: {
                trigger: ".About-Component",
                scroller: "body",
                markers: false,
                start: "top 80%",
                end: "top 20%",
                scrub: 5,
                pin: false
            }
        });
    })


    return (
        <>
            <div className='text-component'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="About-hadding-text_component">
                                <h2 ref={Had}>IT Training & Coaching in Chomu</h2>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-7">
                            <div className="About_section-component">
                                <video width="100%" height="100%" controls loop>
                                    <source src="img/main-v.mp4" type="video/mp4" />
                                    <source src="movie.ogg" type="video/ogg" />
                                </video>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-5">
                            <div className="About_section-text-component">
                                <h2>ABOUT US</h2>
                                <p> <b> Ar Square it institute of technology in Chomu </b> which teaches you IT courses according to your choice and interest. It has been 5+ years that our institute is doing great and working with highly expert professionals that has made us the <b> Best IT Training Institute in Chomu</b>. We have been constantly teaching students of BCA, MCA, B.Tech and working professionals in Chomu.</p>
                                <button>Apply Now</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default About