import React from "react";
//CSS
import "./Sidebar.css";
//Components
import SidebarOption from "../../components/sidebaroption/SidebarOption";
//Material UI
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";

const Sidebar = () => {
  const iconAdd = () => <AddIcon fontSize="large" />;

  return (
    <div className="sidebar">
      <Button className="sidebar__compose" startIcon={iconAdd()}>
        Redactar
      </Button>

    <SidebarOption Icon={InboxIcon} title="Recibidos" number={54} selected={true} />
    <SidebarOption Icon={StarIcon} title="Destacados" number={54} />
    <SidebarOption Icon={AccessTimeIcon} title="Pospuestos" number={54} />
    <SidebarOption Icon={LabelImportantIcon} title="Importantes" number={54} />
    <SidebarOption Icon={NearMeIcon} title="Enviados" number={54} />
    <SidebarOption Icon={NoteIcon} title="Borradores" number={54} />
    <SidebarOption Icon={ExpandMoreIcon} title="Más" number={54} />

    <div className="sidebar__footer">
      <div className="sidebar__footerIcons">
        <IconButton>
          <PersonIcon />
        </IconButton>
        <IconButton>
          <DuoIcon />
        </IconButton>
        <IconButton>
          <PhoneIcon />
        </IconButton>
      </div>
    </div>

    </div>
  );
};

export default Sidebar;
