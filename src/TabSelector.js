import React, { Component } from "react";

class TabSelector extends Component {
  render() {
    const { activeId } = this.props;
    return (
      <div className="TabSelector">
        <button
          id="home"
          onClick={(event) => this.props.handleChangeTab(event)}
          className={activeId === "home" ? "active" : ""}
        >
          Home
        </button>
        <button
          id="about"
          onClick={(event) => this.props.handleChangeTab(event)}
          className={activeId === "about" ? "active" : ""}
        >
          About
        </button>
        <button
          id="contact"
          onClick={(event) => this.props.handleChangeTab(event)}
          className={activeId === "contact" ? "active" : ""}
        >
          Contact
        </button>
      </div>
    );
  }
}

export default TabSelector;
