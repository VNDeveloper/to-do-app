import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faStar } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./AddTask.css";

const Task = ({ task, isTaskEmpty, onAddTask }) => {
  console.log("Task", task);
  const [isUserEdit, setUserEdit] = useState(true);

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
          >
            <div
              onKeyDown={event => {
                let keyCode = event.keyCode ? event.keyCode : event.which;
                let taskName = event.target.innerText;

                if (keyCode == "13") {
                  event.preventDefault();
                  event.target.innerText = "";
                  onAddTask(taskName);
                }
              }}
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
