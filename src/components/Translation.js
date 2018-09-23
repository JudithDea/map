import React from "react";

export default () => {
  return (
    <div>
      <h1>Translation Cheat Sheet</h1>
      <h4>To help understand the markers - Here lived... </h4>
      <p>
        The typical layout of a Stolperstein includes the following information,
        if known:
      </p>
      <ul>
        <li>"Here lived"</li>
        <li class="font-italic">
          The victim's name (and maiden name if applicable)
        </li>
        <li class="font-italic">Date of Birth</li>
        <li class="font-italic">
          Information about deportation or incarceration and date of death, if
          known.
        </li>
      </ul>
      <p>
        To learn more about Stolpersteine visit the artist Gunter Demnig's
        website at{" "}
        <a
          href="http://http://www.stolpersteine.eu/en/"
          alt="Link to the artist's webpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.stolpersteine.eu/.en
        </a>
        , or{" "}
        <a
          href="https://en.wikipedia.org/wiki/Stolperstein"
          target="_blank"
          rel="noopener noreferrer"
        >
          click here to be referred to Wikipedia
        </a>
        .
      </p>
    </div>
  );
};
