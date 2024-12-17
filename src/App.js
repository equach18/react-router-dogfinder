import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import RouteList from "./RouteList";
// import { useState, useEffect } from "react";

function App({
  dogs = [
    {
      name: "Whiskey",
      age: 5,
      src: "whiskey",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: "duke",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: "perry",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
  ],
}) {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar dogs={dogs} />
        <div>
          <RouteList dogs={dogs} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
