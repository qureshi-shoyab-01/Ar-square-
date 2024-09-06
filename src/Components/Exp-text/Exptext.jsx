import React from "react";
import "./ep.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Exptext = () => {
  useGSAP(() => {
    gsap.to(".main_text_component h1", {
      x: 0,
      duration: 60,
      stagger: 1,
      scrollTrigger: {
        trigger: ".main_text_component",
        scroller: "body",
        markers: false,
        start: "top 80%",
        end: "top 20%",
        scrub: 5,
        pin: false,
      },
    });
    gsap.to(".main_text_component h2", {
      x: 0,
      duration: 60,
      stagger: 1,
      scrollTrigger: {
        trigger: ".main_text_component",
        scroller: "body",
        markers: false,
        start: "top 80%",
        end: "top 20%",
        scrub: 5,
        pin: false,
      },
    });
  });

  return (
    <>
      <div className="main-text-background">
        <div className="main-text-box">
          <div className="main_text_component">
            <h1> training </h1>
            <h2> development </h2>
            <h1> placement </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exptext;
