import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var flagsDictionary = {
    "🇧🇩": "Bangladesh",
    "🇧🇹": "Bhutan",
    "🇧🇷": "Brazil",
    "🇨🇦": "Canada",
    "🇨🇺": "Cuba",
    "🇮🇳": "India",
    "🇳🇬": "Nigeria",
    "🇵🇱": "Poland",
    "🇹🇩": "Chad",
    "🇸🇾": "Syria",
    "🇾🇪": "Yemen"
  };

  var flagsEmojiList = Object.keys(flagsDictionary);

  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    // processing
    var userInput = event.target.value;

    var meaning = flagsDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    // output
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    // processing
    var meaning = flagsDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1> Flags Encyclopedia</h1>

      <input
        placeholder="Enter the flag symbol to know about its country name"
        onChange={emojiInputHandler}
      />

      <h2> {meaning} </h2>

      <h3> Flags we know </h3>
      {flagsEmojiList.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
