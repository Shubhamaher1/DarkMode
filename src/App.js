import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "black"
    };
  }
  update(col) {
    this.setState = {
      color: col
    };
  }
  render() {
    return (
      <>
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => {
            this.update("red");
          }}
        ></button>
        <button style={{ backgroundColor: "pink" }}></button>
        <button style={{ backgroundColor: "black" }}></button>
        <button style={{ backgroundColor: "white" }}></button>
        <button style={{ backgroundColor: "yellow" }}></button>
        <button style={{ backgroundColor: "gray" }}></button>
        <div
          className="box"
          style={{ backgroundColor: this.state.color }}
        ></div>
      </>
    );
  }
}
export default App;
