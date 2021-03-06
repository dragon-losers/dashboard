import React, { useEffect, useState } from "react";
import { Paper } from "@material-ui/core";

const User = (props) => {
  const [auth, setAuth] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const submitCredentials = (e) => {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => setUser(res))
      .then((res) => setAuth(true));
  };
  const submitUser = (e) => {
    fetch("/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: login,
        password: password,
        name: name,
        layout: props.layout,
      }),
    })
      .then((res) => res.json())
      .then((res) => props.setUser(res))
      .then((res) => setAuth(true));
  };
  if (!auth) {
    return (
      <div>
        <Paper className="login">
          Log in or register to save your layout!
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
            <button type="button" onClick={submitCredentials}>
              Login
            </button>
            <br />
            To register, please input name as well.
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="button" onClick={submitUser}>
              Register
            </button>
          </form>
        </Paper>
      </div>
    );
  } else {
    return (
      <div>
        <Paper className="userInfo">
          <h2>Hello,</h2>
          <h1>{props.user.name}</h1>
        </Paper>
      </div>
    );
  }
};

export default User;
