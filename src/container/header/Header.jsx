import React from "react";
//CSS
import "./Header.css";
//Material UI
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { IconButton, Avatar } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redux/reducers/userSlice";
import { auth } from "../../fbConfig";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout())

    })
  }

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-3-1.png"
          alt=""
        />
      </div>

      <div className="header__middle">
        <SearchIcon />
        <input type="text" placeholder="Buscar correo" />
        <ArrowDropDown className="header__inputCaret" />
      </div>

      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar className="avatar" onClick={signOut} src={user?.photoUrl} />
      </div>
    </div>
  );
};

export default Header;
