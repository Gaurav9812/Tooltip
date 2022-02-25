import React from "react";
import Tool from "./tool";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      position: "top",
      hovering: false,
    };
  }
  handleClick = (pos) => {
    this.setState({
      position: pos,
    });
  };
  handleMouseEnter = () => {
    this.setState({
      hovering: true,
    });
  };
  handleMouseLeave = () => {
    this.setState({
      hovering: false,
    });
  };

  render() {
    return (
      <div className="App ">
        <div id="buttons-container">
          <div
            style={{
              fontSize: 20,
              padding: 10,
              fontWeight: 600,
              fontFamily: "sans-serif",
            }}
          >
            Where do you want tooltip
          </div>
          <button
            className={this.state.position === "top" ? "btn active" : "btn"}
            onClick={(e) => {
              this.handleClick("top");
            }}
          >
            Top
          </button>
          <button
            className={this.state.position === "left" ? "btn active" : "btn"}
            onClick={() => this.handleClick("left")}
          >
            Left
          </button>
          <button
            className={this.state.position === "right" ? "btn active" : "btn"}
            onClick={() => this.handleClick("right")}
          >
            Right
          </button>
          <button
            className={this.state.position === "down" ? "btn active" : "btn"}
            onClick={() => this.handleClick("down")}
          >
            Down
          </button>
        </div>

        <div id="button-container">
          <button
            className="btn"
            onMouseOver={this.handleMouseEnter}
            onMouseOut={this.handleMouseLeave}
          >
            {this.state.hovering && <Tool position={this.state.position} />}
            Hover Over me !
          </button>
        </div>
      </div>
    );
  }
}

export default App;
