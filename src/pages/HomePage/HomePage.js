import React, { Component } from "react";

import SideMenu from "../../components/SideMenu/SideMenu";
import DetailView from "../../components/DetailView/DetailView";

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
        tasks: [{ index: 0, name: "Task 4" }]
      }
    };

    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
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
          name: taskName
        };

        currentListOfTask[category] = [...currentListOfTask[category], newTask];
      }
    }

    this.setState({
      listOfTasks: currentListOfTask
    });
  }

  render() {
    let selectedMenu = this.state.selectedMenu;

    return (
      <div className="home-page__container">
        <div className="home-page__side-menu">
          <SideMenu onMenuClick={this.handleMenuClick} />
        </div>
        <div className="home-page__detail-view">
          <DetailView
            selectedMenu={selectedMenu}
            listOfTasks={this.state.listOfTasks[selectedMenu]}
            onAddTask={this.handleAddTask}
          />
        </div>
      </div>
    );
  }
}

export default HomePage;
