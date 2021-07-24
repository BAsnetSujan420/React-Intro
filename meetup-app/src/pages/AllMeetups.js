import React, { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetups = () => {
  const [loading, setLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    fetchMeetups();
  }, []);

  const fetchMeetups = async () => {
    const res = await fetch(
      "https://react-getting-started-fc03c-default-rtdb.firebaseio.com/meetups.json"
    );
    const data = await res.json();

    const meetups = [];
    for (const key in data) {
      const meetup = {
        id: key,
        ...data[key],
      };
      meetups.push(meetup);
    }
    console.log(meetups);
    setLoading(false);
    setLoadedMeetups(meetups);
  };

  if (loading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetups;
