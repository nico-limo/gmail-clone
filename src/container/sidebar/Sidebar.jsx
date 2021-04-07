import React from "react";
//CSS
import "./Sidebar.css";
//Material UI
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
const Sidebar = () => {
  const iconAdd = () => <AddIcon fontSize="large" />;

  return (
    <div className="sidebar">
      <Button className="sidebar__compose" startIcon={iconAdd()}>
        Redactar
      </Button>
      <h1>SIDEBAR</h1>
    </div>
  );
};

export default Sidebar;
