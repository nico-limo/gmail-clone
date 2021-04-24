import React from "react";
//CSS
import "./EmailList.css";
//Material UI
import { Checkbox, IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@material-ui/icons";
//Components
import Section from "../../components/section/Section";
import EmailRow from "../../components/emailRow/EmailRow";

const EmailList = () => {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={Inbox} title="Principal" color="red" selected />
        <Section Icon={People} title="Social" color="#1A73E8"/>
        <Section Icon={LocalOffer} title="Promociones" color="green"/>
      </div>
      <div className="emailList__list">
       <EmailRow title="La mejor Clone Web" subject="Hecho por Nico" description="Lorem ipsum" time="10pm" />
       <EmailRow title="Google Interview" subject="Trabaja con nosotros" description="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" time="9am" />
      </div>
    </div>
  );
};

export default EmailList;
