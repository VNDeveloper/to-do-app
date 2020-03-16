import React, { Component } from "react";

import "./DetailView.css";

class DetailView extends Component {
  render() {
    return (
      <div className="detail-view">
        <h2>{this.props.currentSelectedMenu}</h2>
      </div>
    );
  }
}

export default DetailView;
