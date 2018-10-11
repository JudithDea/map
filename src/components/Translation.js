import React from "react";

export default () => {
  return (
    <div className="translation-component bg-light w-50 h-50">
      <h1 className="translation-this text-center">
        How to translate Stolpersteine
      </h1>
      <h4>Here lived... </h4>
      <p>
        The typical layout of a Stolperstein includes the following information,
        if known:
      </p>
      <ul>
        <li>"Here lived"</li>
        <li className="font-italic">
          The victim's name (and maiden name if applicable)
        </li>
        <li className="font-italic">Date of Birth</li>
        <li className="font-italic">
          Information about deportation or incarceration and date of death, if
          known. Some markers will also mention the cause of death, if known.
          Some examples are:
          <li>
            <span className="font-italic"> "Erschossen (auf der Flucht)" </span>{" "}
            - shot (when trying to escape)
          </li>
          <li>
            <span className="font-italic"> "Ermordet" </span> - murdered
          </li>
          <li>
            <span className="font-italic">"Freitod"</span> - suicide
          </li>
          <li>
            <span className="font-italic">"Verschollen"</span> - missing
          </li>
          <li>
            <span className="font-italic">"Für tot erklärt"</span> - declared
            dead
          </li>
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
