import React, { useState } from "react";
import axiosWithAuth from "./axiosWithAuth";

// make a post request to retrieve a token from the api
// when you have handled the token, navigate to the BubblePage route

export default function Login(props) {
  const credentials = {
    username: "",
    password: ""
  };

  const [state, setState] = useState(credentials);

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const postCredentials = {
      username: state.username,
      password: state.password
    };

    axiosWithAuth()
      .post("/login", postCredentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/colors");
      })
      .catch(error => {
        console.log(error);
      })
      .finally(Response => {
        // console.log(Response);
      });
  };

  return (
    <div>
      <div className="App">
        <h2> Please Sign In </h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Username </label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={state.username}
            />
          </div>
          <div>
            <label>Password </label>
            <input
              type="text"
              name="password"
              onChange={handleChange}
              value={state.password}
            />
          </div>

          <br />
          <button type="submit">Submit </button>
        </form>
      </div>
    </div>
  );
}
