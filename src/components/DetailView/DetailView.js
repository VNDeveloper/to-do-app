import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import Task from "../Task/Task";
import "./DetailView.css";

const DetailView = ({ selectedMenu, listOfTasks, onAddTask, onEditTask }) => {
  return (
    <div className="detail-view">
      <div className="detail-view__header">
        <div className="detail-view__header-content">
          <h2>{selectedMenu}</h2>
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
      </div>
      <div className="detail-view__task-content">
        {listOfTasks.map(task => (
          <Task
            key={task.index}
            index={task.index}
            task={task}
            isNewTask={false}
            onAddTask={onAddTask}
            onEditTask={onEditTask}
          ></Task>
        ))}

        <Task isNewTask={true} onAddTask={onAddTask} />
      </div>
    </div>
  );
};

export default DetailView;
