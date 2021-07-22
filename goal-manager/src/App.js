import React, { useEffect, useState } from "react";
import Airtable from "airtable";
import Goal from "./components/Goal";
import styled from "styled-components";
import { GlobalStyle } from "./styles/Global.style";

const base = new Airtable({ apiKey: "keygrkS7O6T1SzFW0" }).base(
  "applojz8ymHAdjMys"
);

function App() {
  const [goals, setGoals] = useState([]);
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    base("goals")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setGoals(records);
        fetchNextPage();
      });
    base("updates")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setUpdates(records);
        fetchNextPage();
      });
  }, []);

  const StyledH1 = styled.h1`
    text-align: center;
    font-size: 4rem;
    margin: 1rem 0;
  `;
  return (
    <>
      <GlobalStyle />
      <StyledH1>My Goals</StyledH1>
      {goals.map((goal) => (
        <Goal
          key={goal.id}
          goal={goal}
          updates={updates.filter(
            (update) => update.fields.goalid[0] === goal.id
          )}
        />
      ))}
    </>
  );
}

export default App;
