import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faStar } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./Task.css";

const Task = ({
  index,
  task,
  isNewTask,
  onAddTask,
  onEditTask,
  onClickTask,
}) => {
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
    <div
      onClick={() => !isNewTask && onClickTask(task)}
      className={`task ${isNewTask && "task-editable"}`}
    >
      <div className="task__container">
        <div className={`task__content`}>
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
            {!isNewTask && <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
