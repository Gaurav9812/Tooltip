import React from "react";

class tool extends React.Component {
  classn = () => {
    return `position-${this.props.position}`;
  };

  render() {
    return (
      <div className={`${this.classn()}`}>
        Thanks for hovering! I'm a tooltip.
      </div>
    );
  }
}
export default tool;
