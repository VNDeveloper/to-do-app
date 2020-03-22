import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import Task from "../AddTask/AddTask";
import "./DetailView.css";

const DetailView = ({ selectedMenu, listOfTasks, onAddTask }) => {
  return (
    <div className="detail-view">
      <div className="detail-view__header">
        <div className="detail-view__header-content">
          <h2>{selectedMenu}</h2>
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
      </div>
      <div className="detail-view__task-content">
        {listOfTasks.map((task, index) => (
          <Task key={index} task={task} isTaskEmpty={false}></Task>
        ))}

        <Task onAddTask={onAddTask} isTaskEmpty={true} />
      </div>
    </div>
  );
};

export default DetailView;
