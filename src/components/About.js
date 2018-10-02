import React from "react";
import "../App.css";

export default () => {
  return (
    <div>
      <h1>About this page</h1>
      <p>
        This was originally the final project of the Udacity Nanodegree program
        that I participated in (thanks to a Grow With Google Scholarship) in
        2018.
      </p>
      <p>
        The objective was to create a responsive React app, displaying a map
        that shows certain locations and additional information about that
        location, coming from a separate API.
      </p>
      <p>
        I immediately knew I wanted to show Stolpersteine, a decentralized
        memorial commemorating victims of the Holocaust. Some of these markers I
        would walk by on a daily basis when I was living in Germany, and I had
        recently heard that the locations of Stolpersteine were collected and
        stored in a database. From here, it only took a quick Google Search and
        a lot of MacGyvering to shape this project the way I imagined.
      </p>
      <p>
        I hope this app creates awareness of Project Stolpersteine. Each
        individual marker, placed at the victim's last place of residency,
        symbolizes a life destroyed. Other than just finishing the Nanodegree,
        this neighborhood map is supposed to help breaking down and visualizing
        the cruel fate victims of the Holocaust had to face.
      </p>
      <p>TLDR: This is the final project for my Nanodegree</p>
      <p>
        <a
          href="https://en.wikipedia.org/wiki/Stolperstein"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here
        </a>{" "}
        Click here to visit Wikipedia for more information on Stolpersteine.
      </p>
    </div>
  );
};
