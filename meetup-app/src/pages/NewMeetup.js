import React from "react";
import { useHistory } from "react-router-dom";
import AddMeetup from "../components/meetups/AddMeetup";

const NewMeetup = () => {
  const history = useHistory();

  const addMeetupHandler = async (meetupData) => {
    await fetch(
      "https://react-getting-started-fc03c-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <AddMeetup onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetup;
