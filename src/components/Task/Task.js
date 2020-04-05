import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faStar } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./Task.css";

const Task = ({ index, task, isNewTask, onAddTask, onEditTask }) => {
  const [isUserEditing, setUserEditing] = useState(false);
  const [taskName, setTaskName] = useState(task ? task.name : "");

  /**
   * empty editable content div and
   * call callback function
   *
   * @param {Object} event
   */
  const handleAddTask = (event) => {
    if (!taskName || typeof index !== "undefined") {
      return;
    }

    if (typeof index !== "undefined") {
      onEditTask(index, taskName);
    } else {
      onAddTask(taskName);
      setTaskName("");
      setUserEditing(true);
    }
  };

  /**
   * add new task when user press
   * - enter
   *
   * @param {Object} event - onKeyDown event object
   */
  const handleOnKeyDown = (event) => {
    let keyCode = event.keyCode ? event.keyCode : event.which;

    if (keyCode == "13") {
      event.preventDefault();
      handleAddTask();
    }
  };

  /**
   * update taskName state
   *
   * @param {Object} event - default even object
   */
  const handleChange = (event) => {
    setTaskName(event.target.value);
  };

  return (
    <div className="task">
      <div className="task__container">
        <div className="task__content">
          <div className="task__content-selected-icon">
            <FontAwesomeIcon
              icon={isNewTask && !isUserEditing ? faPlus : faCircle}
            ></FontAwesomeIcon>
          </div>
          <div
            className="task__content-info"
            onClick={() => {
              setUserEditing(true);
            }}
          >
            {/* <div
              onKeyDown={event => handleOnKeyDown(event)}
              onBlur={event => {
                handleAddTask(event);
                setUserEditing(false);
              }}
              id="task__content-name"
              className="task__content-name"
              contentEditable={isUserEditing}
              dangerouslySetInnerHTML={{
                __html: taskName
              }}
            ></div> */}
            <input
              type="text"
              value={taskName}
              onChange={handleChange}
              onKeyDown={(event) => handleOnKeyDown(event)}
              onBlur={(event) => {
                handleAddTask(event);
                setUserEditing(false);
              }}
              readOnly={!isNewTask || !isUserEditing}
              placeholder="Add Task"
            />
            <div className="task__content-icons"></div>
          </div>
          <div className="task__content-favorite-icon">
            {!isNewTask ? (
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
