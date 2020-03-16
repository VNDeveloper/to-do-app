import React, { Component } from "react";

import "./HomePage.css";
import SideMenu from "../../components/SideMenu/SideMenu";
import DetailView from "../../components/DetailView/DetailView";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSelectedMenu: "myDay"
    };

    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick(selectedMenu) {
    console.log("selected Menu", selectedMenu);
    this.setState({ currentSelectedMenu: selectedMenu });
  }

  render() {
    return (
      <div className="home-page__container">
        <div className="home-page__side-menu">
          <SideMenu onMenuClick={this.handleMenuClick} />
        </div>
        <div className="home-page__detail-view">
          <DetailView currentSelectedMenu={this.state.currentSelectedMenu} />
        </div>
      </div>
    );
  }
}

export default HomePage;
