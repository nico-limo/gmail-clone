import React from "react";
//Material UI
import { Checkbox, IconButton } from "@material-ui/core";
import { LabelImportantOutlined, StarBorderOutlined } from "@material-ui/icons";
//CSS
import "./EmailRow.css";
import { useHistory } from "react-router";
const EmailRow = ({id ,title, subject, description, time}) => {
    const history = useHistory();
  return (
    <div onClick={()=> history.push("/mail")} className="emailRow">
      <div className="emailRow__options">
          <Checkbox />
          <IconButton>
              <StarBorderOutlined />
          </IconButton>
          <IconButton>
              <LabelImportantOutlined/>
          </IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
          <h4>{subject}{" "}<span className="emailRow__description">
              -{description}
          </span></h4>
          
      </div>
      <div className="emailRow__time">{time}</div>
    </div>
  );
};

export default EmailRow;
