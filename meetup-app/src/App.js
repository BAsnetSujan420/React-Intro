import { Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <Layout>
      <Route exact path="/">
        <AllMeetups />
      </Route>
      <Route path="/new-meetup">
        <NewMeetup />
      </Route>
      <Route path="/favorites">
        <Favorites />
      </Route>
    </Layout>
  );
}

export default App;
