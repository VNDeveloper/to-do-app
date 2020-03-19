import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import Task from "../AddTask/AddTask";
import "./DetailView.css";

class DetailView extends Component {
  render() {
    return (
      <div className="detail-view">
        <div className="detail-view__header">
          <div className="detail-view__header-content">
            <h2>{this.props.currentSelectedMenu}</h2>
            <FontAwesomeIcon icon={faEllipsisH} />
          </div>
        </div>
        <div className="detail-view__task-content">
          <Task />
        </div>
      </div>
    );
  }
}

export default DetailView;
