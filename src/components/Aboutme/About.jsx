import React from "react";
import "./about.scss";

function About() {
  return (
    <div className="aaabout_content">
      <div className="about_img"></div>

      <div className="aaabout_content__item">
        <h2>Hello am Stephen</h2>
        <h3>I'm a developer who loves to build amazing user interfaces</h3>
        <p>
          A passionate growth driven Web Developer proficient in fundamental
          Front-end and Back-End languages mainly JAVASCRIPT es6 syntax,
          CSS/Sass, REACT.JS/NEXT.JS/Material UI or THEMEUI or CHAKRAUI,
          Typescript with advanced state Management like state machines,
          redux(toolkit), or context API.
        </p>
        <p>
          NODE.JS/Typescript with EXPRESS and MongoDB, MySQL, PostgreSQL for
          building API's client server CRUD operations, using mongoose or
          sequelize respectively, and proficient with the most popular coding
          paradigms mainly Functional and Objected Oriented Programming.
        </p>
      </div>
    </div>
  );
}

export default About;
