import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import ActionGrade from "material-ui/svg-icons/action/grade";
import ContentSend from "material-ui/svg-icons/content/send";
import ContentDrafts from "material-ui/svg-icons/content/drafts";
import Divider from "material-ui/Divider";
import ActionInfo from "material-ui/svg-icons/action/info";
import TextField from "material-ui/TextField";

import "./SideMenu.css";

class SideMenu extends Component {
  render() {
    return (
      <div className="navigation__body">
        <TextField hintText="Search for Items" />

        <List className="navigation__menu">
          <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
        </List>
        <Divider />
        <List>
          <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
          <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
        </List>
      </div>
    );
  }
}

export default SideMenu;
