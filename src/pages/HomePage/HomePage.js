import React, { Component } from "react";

import SideMenu from "../../components/SideMenu/SideMenu";
import DetailView from "../../components/DetailView/DetailView";
import TaskSideMenu from "../../components/TaskSideMenu/TaskSideMenu";

import "./HomePage.css";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMenu: "myDay",
      listOfTasks: {
        myDay: [{ index: 0, name: "Task 1" }],
        important: [{ index: 0, name: "Task 2" }],
        planned: [{ index: 0, name: "Task 3" }],
        tasks: [{ index: 0, name: "Task 4" }],
      },
      openTaskMenu: false,
      selectedTask: {},
    };

    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleEditTask = this.handleEditTask.bind(this);
    this.onClickTask = this.onClickTask.bind(this);
  }

  handleMenuClick(selectedMenu) {
    this.setState({ selectedMenu });
  }

  /**
   * handle the logic of update the state with new task
   *
   * @param {String} taskName - task name
   */
  handleAddTask(taskName) {
    let selectedMenu = this.state.selectedMenu;
    let currentListOfTask = this.state.listOfTasks;

    for (let category in currentListOfTask) {
      if (category === selectedMenu) {
        let currentTaskIndex = currentListOfTask[category].length - 1;
        let newTask = {
          index: currentTaskIndex + 1,
          name: taskName,
        };

        currentListOfTask[category] = [...currentListOfTask[category], newTask];
      }
    }

    this.setState({
      listOfTasks: currentListOfTask,
    });
  }

  /**
   * handle editing task,
   * - find the current index within the list
   * - change the name of that index
   *
   * @param {Integer} id
   * @param {String} taskName
   */
  handleEditTask(index, taskName) {
    let selectedMenu = this.state.selectedMenu;
    let currentListOfTask = this.state.listOfTasks;

    for (let category in currentListOfTask) {
      if (category === selectedMenu) {
        currentListOfTask[category] = currentListOfTask[category].map(
          (task) => {
            let updateTask = {};

            if (task.index === index) {
              updateTask = {
                index,
                name: taskName,
              };

              return updateTask;
            }
          }
        );
      }
    }

    this.setState({
      listOfTasks: currentListOfTask,
    });
  }

  /**
   * handle on click task
   */
  onClickTask(task) {
    console.log("on click task", task);
    if (task.name !== this.state.selectedTask.name) {
      this.setState({
        openTaskMenu: true,
        selectedTask: task,
      });
    }
  }

  render() {
    let selectedMenu = this.state.selectedMenu;

    return (
      <div className="home-page__container">
        <div className="home-page__side-menu">
          <SideMenu onMenuClick={this.handleMenuClick} />
        </div>
        <div
          className={`home-page__detail-view ${
            this.state.openTaskMenu && "home-page__side-menu-active"
          }`}
        >
          <DetailView
            selectedMenu={selectedMenu}
            listOfTasks={this.state.listOfTasks[selectedMenu]}
            onAddTask={this.handleAddTask}
            onEditTask={this.handleEditTask}
            onClickTask={this.onClickTask}
          />
        </div>
        {this.state.openTaskMenu && (
          <TaskSideMenu task={this.state.selectedTask} />
        )}
      </div>
    );
  }
}

export default HomePage;
