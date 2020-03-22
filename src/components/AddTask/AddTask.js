import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faStar } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./AddTask.css";

const Task = ({ task, isTaskEmpty }) => {
  console.log("Task", task);
  const [isUserEdit, setUserEdit] = useState(true);
  const [taskName, setTaskName] = useState("");
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
            onKeyDown={e => {
              console.log("onKeyDown e", e);
              setTaskName("random");
            }}
          >
            <div
              className="task__content-name"
              contentEditable={isUserEdit}
              dangerouslySetInnerHTML={{
                __html: task ? task.name : ""
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
