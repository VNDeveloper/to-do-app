import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGrinBeam,
  faStar,
  faCalendar
} from "@fortawesome/free-regular-svg-icons";
import { faTasks, faPlus } from "@fortawesome/free-solid-svg-icons";

import "./SideMenu.css";

class SideMenu extends Component {
  render() {
    return (
      <div className="side-menu">
        <div className="side-menu__content">
          <ul className="side-menu__list">
            <li>
              <div className="side-menu__list-item">
                <div className="side-menu__list-item-content">
                  <FontAwesomeIcon icon={faGrinBeam} />
                  <span>My Day</span>
                </div>
              </div>
            </li>
            <li>
              <div className="side-menu__list-item">
                <div className="side-menu__list-item-content">
                  <FontAwesomeIcon icon={faStar} />
                  <span>Important</span>
                </div>
              </div>
            </li>
            <li>
              <div className="side-menu__list-item">
                <div className="side-menu__list-item-content">
                  <FontAwesomeIcon icon={faCalendar} />
                  <span>Planned</span>
                </div>
              </div>
            </li>
            <li>
              <div className="side-menu__list-item">
                <div className="side-menu__list-item-content">
                  <FontAwesomeIcon icon={faTasks} />
                  <span>Tasks</span>
                </div>
              </div>
            </li>

            <hr></hr>

            <li>
              <div className="side-menu__list-item">
                <div className="side-menu__list-item-content">
                  <FontAwesomeIcon icon={faPlus} />
                  <span>New List</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideMenu;
