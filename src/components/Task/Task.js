import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faStar } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./Task.css";

const Task = ({ index, task, isTaskEmpty, onAddTask, onEditTask }) => {
  const [isUserEdit, setUserEdit] = useState(true);

  /**
   * empty editable content div and
   * call callback function
   *
   * @param {Object} event
   */
  const handleAddTask = event => {
    let taskName = event.target.innerText;

    if (typeof index !== "undefined") {
      onEditTask(index, taskName);
    } else {
      onAddTask(taskName);
      event.target.innerText = "";
    }
  };

  /**
   * add new task when user press
   * - enter
   *
   * @param {Object} event - onKeyDown event object
   */
  const handleOnKeyDown = event => {
    let keyCode = event.keyCode ? event.keyCode : event.which;

    if (keyCode == "13") {
      event.preventDefault();
      handleAddTask(event);
    }
  };

  return (
    <div className="task">
      <div className="task__container">
        <div className="task__content">
          <div
            className="task__content-selected-icon"
            onClick={() => setUserEdit(false)}
          >
            {isTaskEmpty ? (
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
            )}
          </div>
          <div className="task__content-info" onClick={() => setUserEdit(true)}>
            <div
              onKeyDown={event => handleOnKeyDown(event)}
              className="task__content-name"
              contentEditable={isUserEdit}
              dangerouslySetInnerHTML={{
                __html: task.name
              }}
            ></div>
            <div className="task__content-icons"></div>
          </div>
          <div className="task__content-favorite-icon">
            {!isTaskEmpty ? (
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
