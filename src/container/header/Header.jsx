import React from "react";
//CSS
import "./Header.css";
//Material UI
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { IconButton, Avatar } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://i.blogs.es/16b956/gmail-nuevo-logo-google-workspace/1366_2000.jpg"
          alt=""
        />
      </div>

      <div className="header__middle">
        <SearchIcon/>
        <input type="text" placeholder="Buscar correo"/>
        <ArrowDropDown className="header__inputCaret" />
      </div>

      <div className="header__right">
        <IconButton>
        <AppsIcon />
        </IconButton>
        <IconButton>
        <NotificationsIcon />
        </IconButton>
        <Avatar/>
      </div>
    </div>
  );
};

export default Header;
