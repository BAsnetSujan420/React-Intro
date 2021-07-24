import React from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

const MeetupItem = ({ id, image, title, address, description }) => {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title}></img>
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button>Add to favorite</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
