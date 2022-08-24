import React, { useState } from "react";
import { Session } from "../api/session";
import { Navigate } from "react-router-dom";

export default function SignInPage(props) {
  const { onSignIn } = props;
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const params = {
      email: email,
      password: password,
    };
    Session.create(params).then((user) => {
      if (user?.status === 404) {
        setErrors([{ message: "Wrong email or password" }]);
      } else if (user?.id) {
        onSignIn();
        setUser(user);
      }
    });
  }

  return (
    <main>
      {user && <Navigate to="/auctions"></Navigate>}
      <div className="ui clearing segment Page">
        <h1 className="ui center aligned header">Sign In</h1>
        <form className="ui large form" onSubmit={handleSubmit}>
          {errors.length > 0 ? (
            <div className="ui negative message">
              <div className="header">Failed to Sign In</div>
              <p>{errors.map((error) => error.message).join(", ")}</p>
            </div>
          ) : (
            ""
          )}
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(event) => {
                setEmail(event.currentTarget.value);
              }}
            />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(event) => {
                setPassword(event.currentTarget.value);
              }}
            />
          </div>
          <input
            className="ui right floated orange button"
            type="submit"
            value="Sign In"
          />
        </form>
      </div>
    </main>
  );
}
