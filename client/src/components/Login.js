import React from "react";

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
        props.history.push("/friends");
      })
      .catch(error => {
        console.log(error);
      })
      .finally(Response => {
        console.log(Response);
      });
  };

  return (
    <div>
      <div className="App">
        <h1> Please Sign In </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Username </label>
            <br />
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={state.username}
            />
          </div>
          <br />
          <div>
            <label>Password </label>
            <br />
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
