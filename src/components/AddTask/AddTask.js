import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faStar } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./AddTask.css";

const Task = ({ task, isTaskEmpty }) => {
  console.log("Task", task);
  const [isUserEdit, setUserEdit] = useState(true);
  const [taskName, setTaskName] = useState(task.name);
  console.log("isUserEdit", isUserEdit);

  return (
    <div className="task">
      <div className="task__container">
        <div className="task__content">
          <div
            className="task__content-selected-icon"
            onClick={e => setUserEdit(false)}
          >
            {isTaskEmpty ? (
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
            )}
          </div>
          <div
            className="task__content-info"
            onClick={e => {
              console.log(e);
              setUserEdit(true);
            }}
            onKeyDown={event => {
              let keyCode = event.keyCode ? event.keyCode : event.which;

              console.log("taskName", event.target.value);
              setTaskName(taskName);

              if (keyCode == "13") {
                onAddTask(taskName);
              }
            }}
            onChange={e => console.log("onChange e", e)}
          >
            <div
              className="task__content-name"
              contentEditable={isUserEdit}
              dangerouslySetInnerHTML={{
                __html: taskName
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
