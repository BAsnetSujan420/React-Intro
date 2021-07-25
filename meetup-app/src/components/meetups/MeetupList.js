import React from "react";
import MeetupItem from "./MeetupItem";

const MeetupList = ({ meetups }) => {
  return (
    <ul style={list}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          description={meetup.description}
        />
      ))}
    </ul>
  );
};

const list = {
  listStyle: "none",
  margin: 0,
  padding: 0,
};

export default MeetupList;
