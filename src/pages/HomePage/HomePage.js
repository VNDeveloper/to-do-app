import React, { Component } from "react";

import "./HomePage.css";
import SideMenu from "../../components/SideMenu/SideMenu";
import DetailView from "../../components/DetailView/DetailView";

class HomePage extends Component {
  render() {
    return (
      <div className="main__container">
        <div className="main__sidemenu">
          <SideMenu />
        </div>
        <div className="main__detailview">
          <DetailView />
        </div>
      </div>
    );
  }
}

export default HomePage;
