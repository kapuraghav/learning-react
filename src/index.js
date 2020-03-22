// import the react and react Dom library

import React from "react";
import ReactDom from "react-dom";
import NameCard from "./nameCard";


const App = () => {
  return (
    <div className="ui container comments">
      <NameCard></NameCard>
      <NameCard></NameCard>
      <NameCard></NameCard>
    </div>
  );
};

// Take the react component and show it on the screen.

ReactDom.render(<App />, document.querySelector("#root"));
