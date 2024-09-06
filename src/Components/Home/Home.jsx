import React from "react";
import "./Home.css";
import Slider from "../Slider/Slider";
import Exptext from "../Exp-text/Exptext";
import Number_count from "../Number_Count/Number_count";
import Features_expoler from "../Features_component/Features_expoler";
import Courses from "../Course-Component/Courses";
import About from "../About/About";
import Placement from "../Placement/Placement";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Slider />
      <div className="training-text-component">
        <Exptext />
      </div>
      <div className="About-Component">
        <About />
      </div>
      <div className="main-box-component">
        <Features_expoler />
      </div>

      <Number_count />

      <div id="crd">
        <div className="container">
          <div className="row">
                <h1>Our - Courses</h1>
            <Courses />
          </div>
        </div>
      </div>

      {/* Placement section start */}

      <div id="sld">
        <div className="container">
          <div className="row">
            <div className="sld">
              <h2>
                Placement By{" "}
                <span>
                  {" "}
                  <img src="/img/star.gif" alt="" />{" "}
                </span>{" "}
                <span>Ar-Square</span>
              </h2>
            </div>

            <Placement />
          </div>
        </div>
      </div>

      {/* Placement section end */}

      {/* footer section start */}

      <div id="foot">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </div>

      {/* footer section end */}
    </>
  );
};

export default Home;
