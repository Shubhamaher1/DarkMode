import React from "react";
import "./styles.css";
import ColorBlock from "./Component/ColorBlock";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "black"
    };
  }
  update = (col) => {
    this.setState({
      color: col
    });
  };
  render() {
    return (
      <>
        <div className="box" style={{ backgroundColor: this.state.color }}>
          <ColorBlock color="red" onClick={this.update} />
          <ColorBlock color="yellow" onClick={this.update} />
          <ColorBlock color="pink" onClick={this.update} />
          <ColorBlock color="black" onClick={this.update} />
          <ColorBlock color="green" onClick={this.update} />
          <ColorBlock color="gray" onClick={this.update} />
        </div>

        {/* it working finaly but here lot of repeatative work we are doing we can avid that */}
        {/* <button
          style={{ backgroundColor: "red" }}
          onClick={() => {
            this.update("red");
          }}
        ></button>
        <button
          style={{ backgroundColor: "pink" }}
          onClick={() => {
            this.update("pink");
          }}
        ></button>
        <button
          style={{ backgroundColor: "black" }}
          onClick={() => {
            this.update("black");
          }}
        ></button>
        <button
          style={{ backgroundColor: "white" }}
          onClick={() => {
            this.update("white");
          }}
        ></button>
        <button
          style={{ backgroundColor: "yellow" }}
          onClick={() => {
            this.update("yellow");
          }}
        ></button>
        <button
          style={{ backgroundColor: "gray" }}
          onClick={() => {
            this.update("gray");
          }}
        ></button>
        <div
          className="box"
          style={{ backgroundColor: this.state.color }}
        ></div> */}
      </>
    );
  }
}
export default App;
