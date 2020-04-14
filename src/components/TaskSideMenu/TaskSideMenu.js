import React, { useState, useEffect } from "react";

import "./TaskSideMenu.css";

const TaskSideMenu = () => {
  return (
    <div className="task-side-menu">
      <ul className="task-side-menu__list">
        <li>
          <div className="task-side-menu__list-item">Task 1</div>
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
