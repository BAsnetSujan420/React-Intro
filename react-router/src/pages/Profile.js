import React, { useEffect } from "react";
import {
  Switch,
  useHistory,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import EditProfile from "../components/EditProfile";
import ViewProfile from "../components/ViewProfile";

const Profile = ({ login }) => {
  const history = useHistory();

  const { path, url } = useRouteMatch();

  useEffect(() => {
    if (!login) {
      history.push("/about");
    }
  }, [login, history]);
  return (
    <>
      <h3>Profile Page</h3>
      <ul>
        <li>
          <Link to={`${url}/viewprofile`}>ViewProfile</Link>
        </li>
        <li>
          <Link to={`${url}/editprofile`}>Edit Profile</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/viewprofile`} component={ViewProfile} />
        <Route path={`${path}/editprofile`} component={EditProfile} />
      </Switch>
    </>
  );
};

export default Profile;
