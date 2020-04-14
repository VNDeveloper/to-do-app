import React, { useState, useEffect } from "react";
import Task from "../Task/Task.js";

import "./TaskSideMenu.css";

const TaskSideMenu = ({ task }) => {
  console.log("task", task);
  return (
    <div className="task-side-menu">
      <ul className="task-side-menu__list">
        <li>
          <div className="task-side-menu__list-item">{task.name}</div>
        </li>
        <li>
          <div className="task-side-menu__list-item">Task 2</div>
        </li>
        <li>
          <div className="task-side-menu__list-item">Task 3</div>
        </li>
      </ul>
    </div>
  );
};

export default TaskSideMenu;
