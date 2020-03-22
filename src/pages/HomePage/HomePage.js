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
        myDay: [
          { index: 1, name: "Task 1" },
          { index: 2, name: "Second task" }
        ],
        important: [{ index: 1, name: "Task 2" }],
        planned: [{ index: 1, name: "Task 3" }],
        tasks: [{ index: 1, name: "Task 4" }]
      }
    };

    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick(selectedMenu) {
    console.log("selected Menu", selectedMenu);
    this.setState({ selectedMenu });
  }

  handleAddTask(taskName) {
    console.log("handleAddTask", task);
    let selectedMenu = this.state.selectedMenu;
    let currentListOfTask = this.state.listOfTasks[selectedMenu];
    let currentTaskIndex = selectedMenu[currentListOfTask.length - 1] + 1;
    let newTask = {
      index: currentTaskIndex,
      name: taskName
    };

    this.setState({
      listOfTasks: currentListOfTask[selectedMenu].push(newTask)
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
            onAddTask={this.state.handleAddTask}
          />
        </div>
      </div>
    );
  }
}

export default HomePage;
