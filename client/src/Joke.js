import React, { useState } from "react";
import Axios from "axios";
export default function Joke() {
  const [joke, setJoke] = useState("");
  const getJoke = () => {
    Axios.get("https://v2.jokeapi.dev/joke/Dark,Pun?type=single").then(
      (response) => {
        let joke = response.data.joke;
        setJoke(joke);
      }
    );
  };
  window.addEventListener("load", (event) => {
    getJoke();
  });
  return (
    <div className="Joke">
      <h1>Got Jokes?</h1>
      <div className="container">
        <button onClick={getJoke}>Generate Joke</button>
        <h1>{joke}</h1>
      </div>
    </div>
  );
}
