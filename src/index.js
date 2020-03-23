// import the react and react Dom library

import React from "react";
import ReactDom from "react-dom";
import NameCard from "./nameCard";

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
      },
      err => {
        console.log(err);
      }
    );

    return (
      <div className="ui container comments">
        <NameCard></NameCard>
        <NameCard></NameCard>
        <NameCard></NameCard>
      </div>
    );
  }
}

// Take the react component and show it on the screen.

ReactDom.render(<App />, document.querySelector("#root"));
