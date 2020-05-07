import React, { useEffect, useState } from "./react";
import { Paper } from "@material-ui/core";

const User = (props) => {
  const [isAuth, setAuth] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const submitCredentials = (e, value) => {};

  if (isAuth === false) {
    return (
      <div>
        Log in to save your layout!
        <Paper>
          <form>
            <input
              type="text"
              name="login"
              placeholder="Login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={submitCredentials}>
              Login
            </button>
          </form>
        </Paper>
      </div>
    );
  }
};

export default User;
