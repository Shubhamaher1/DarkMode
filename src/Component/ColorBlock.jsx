import React from "react";

class ColorBlock extends React.Component {
  constructor(proms) {
    super(proms);
  }
  render() {
    return (
      <button
        onClick={() => {
          this.props.onClick(this.props.color);
        }}
        style={{ backgroundColor: this.props.color }}
      ></button>
    );
  }
}
export default ColorBlock;
