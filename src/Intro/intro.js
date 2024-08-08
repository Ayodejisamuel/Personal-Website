import React, { useEffect } from "react";
import "./intro.css";
import deji from "../Images/deji.png";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";
 

const Intro = () => {
  useEffect(() => {
    const typed = new Typed(".frontend", {
      strings: ["Frontend Engineer", "Web Designer", "React Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      showCursor: false,
    });

    ScrollReveal().reveal(".text-content", {
      reset: true,
      distance: "80px",
      duration: 2000,
      delay: 500,
      origin: "top",
    });

    ScrollReveal().reveal(".image-container", {
      reset: true,
      distance: "80px",
      duration: 2000,
      delay: 500,
      origin: "bottom",
    });

    ScrollReveal().reveal(" .Iam", {
      reset: true,
      distance: "80px",
      duration: 2000,
      delay: 500,
      origin: "left",
    });
    ScrollReveal().reveal(".introparag", {
    //   reset: true,
      distance: "80px",
      duration: 2000,
      delay: 500,
      origin: "right",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="intro" id="intro">
      <div className="intro-container">
        <div className="text-content">
          <h3 className="hello">Hello, It's me</h3>
          <h1 className="Iam">
            Ayodeji Samuel<span className="name"></span>
          </h1>
          <span className="andspan">A </span>
          <span className="frontend"></span>
          <strong>
            <p className="introparag">
              I specialize in creating visually appealing, responsive, and
              user-friendly websites.
            </p>
          </strong>
        </div>
        <div className="image-container">
          <img className="" src={deji} alt="BackgroundImage" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
