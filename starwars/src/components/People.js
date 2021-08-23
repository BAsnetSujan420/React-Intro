import React from "react";
import { useQuery } from "react-query";
import Person from "./Person";

const People = () => {
  const fetchPeople = async () => {
    const res = await fetch("https://swapi.dev/api/people/");
    return res.json();
  };

  const { data, status } = useQuery("people", fetchPeople);

  return (
    <div>
      <h2>People</h2>
      {/* <p>{status}</p> */}
      {status === "loading" && <div>Loading data</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {data.results.map((person) => (
            <Person person={person} key={person.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
