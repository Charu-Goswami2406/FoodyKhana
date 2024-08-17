import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to FoodyKhana, your one-stop destination for an unparalleled dining experience. FoodyKhana is a sophisticated restaurant management platform designed to bring convenience and innovation to both restaurateurs and food enthusiasts.
            At FoodyKhana, we believe in enhancing the dining experience through technology. Our platform is designed to streamline restaurant operations while offering customers a smooth and enjoyable journey from browsing to booking. Join us at FoodyKhana, where culinary delights meet innovation.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
