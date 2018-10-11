import React from "react";
import "../App.css";
import "./About.css";

const About = props => {
  return (
    <div className="about-container">
      <div className="about-component bg-light w-50 h-50">
        <h3 className="about-this text-center">About this page</h3>
        <p className="font-italic">
          TLDR: This is the final project for my Udacity Nanodegree
        </p>
        <p>
          This page is my final project of the Udacity Nanodegree program that I
          participated in (thanks to a Grow With Google Scholarship) in 2018.
        </p>
        <p>
          The objective was to create a responsive React app, displaying a map
          that shows certain locations and additional information about each
          location, coming from a separate API.
        </p>
        <p>
          I immediately knew I wanted to show Stolpersteine, a decentralized
          memorial commemorating victims of the Holocaust. Some of these markers
          I would walk by on a daily basis when I was living in Germany, and I
          had recently heard that the locations of Stolpersteine were collected
          and stored in a database. From here, it only took a quick Google
          search, many hours of MacGyvering and some help from Travis Martensen
          (Danke, Travis!) with taming Leaflet JS to shape this project the way
          I imagined.
        </p>
        <p>
          I hope this app creates awareness of Project Stolpersteine. Each
          individual marker, placed at the victim's last place of residency,
          symbolizes a life destroyed. Other than just finishing the Nanodegree,
          this neighborhood map is supposed to help breaking down and
          visualizing the cruel fate victims of the Holocaust had to face.
        </p>
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Stolperstein"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here
          </a>{" "}
          to visit Wikipedia for more information about "Stolpersteine".
        </p>
        <div className="text-center">
          <button
            className="btn btn-light btn-outline-dark btn-sm"
            onClick={props.aboutModalClickHandler}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
