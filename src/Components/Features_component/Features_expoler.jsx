import React, { useRef } from 'react'
import './features.css'
import './FeatureRes.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Features_expoler = () => {
    const Hading = useRef();
    const Box1 = useRef();
    const Box2 = useRef();
    const Box3 = useRef();

    useGSAP(()=>{
        gsap.to(Hading.current, {
            scale: 1,
            duration: 6,
            stagger: 1,
            scrollTrigger: {
                trigger: ".main-box-component",
                scroller: "body",
                markers: false,
                start: "top 80%",
                end: "top 20%",
                scrub: 2,
                pin: false
            }
        });
        gsap.from(Box1.current, {
            x: "-100%",
            duration: 60,
            stagger: 1,
            scrollTrigger: {
                trigger: ".main-box-component",
                scroller: "body",
                markers: false,
                start: "top 80%",
                end: "top 20%",
                scrub: 5,
                pin: false
            }
        });
        gsap.from(Box2.current, {
            y: "100%",
            duration: 60,
            stagger: 1,
            scrollTrigger: {
                trigger: ".main-box-component",
                scroller: "body",
                markers: false,
                start: "top 80%",
                end: "top 20%",
                scrub: 5,
                pin: false
            }
        });
        gsap.from(Box3.current, {
            x: "100%",
            duration: 60,
            stagger: 1,
            scrollTrigger: {
                trigger: ".main-box-component",
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
            <div className="Features_expoler-component">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="Features-firstcomponent">
                                <h2 ref={Hading}>Features of Ar Square</h2>
                            </div>
                        </div>

                        <div ref={Box1} className="col-md-4 col-sm-4">
                            <div className="Features_expoler-content">
                                <img src="img/Global Certificates.png" alt="f1" />
                                <h2>Global Certificates</h2>
                                <p>It is a dedicated section that showcases the globally recognized certifications we offer. These certifications enhance your career prospects in various domains </p>
                            </div>
                        </div>
                        <div ref={Box2} className="col-md-4 col-sm-4">
                            <div className="Features_expoler-content">
                                <img src="img/Live Projects.png" alt="f2" />
                                <h2>Live Projects</h2>
                                <p>We offers hands-on training experiences where students work on real-world projects, applying their skills and knowledge to solve practical challenges.</p>
                            </div>
                        </div>
                        <div ref={Box3} className="col-md-4 col-sm-4">
                            <div  className="Features_expoler-content">
                                <img src="img/Placement.png" alt="f3" />
                                <h2>Placement Assistance</h2>
                                <p>Our goal is to empower students with the resources and skills they need for successful employment. Ensures students receive comprehensive support in their career pursuits.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Features_expoler