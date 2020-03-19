import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faStar } from "@fortawesome/free-regular-svg-icons";

import "./AddTask.css";

const Task = () => {
  return (
    <div className="task">
      <div className="task__container">
        <div className="task__content">
          <div className="task__content-selected-icon">
            <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
          </div>
          <div className="task__content-text">
            <span>Something else</span>
            <span>Something</span>
          </div>
          <div className="task__content-favorite-icon">
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          </div>
        </div>
        <hr></hr>
      </div>
    </div>
  );
};

export default Task;
