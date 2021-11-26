import React, { useState } from "react";
import Login from "./Login.css";

const Signin = () => {
  let [message, setMessage] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    return setMessage((message = "Submitted"));
  };

  return (
    <>
      <section className="Container">
        <form className="form" onSubmit={handleSubmit}>
          <h3 className="h3">Sign In</h3>
          <label htmlFor="email" className="email">
            Email address
          </label>
          <br />
          <input
            type="email"
            className="input"
            placeholder="email address"
            required
          />
          <br />
          <label htmlFor="password" className="password">
            Password
          </label>
          <br />
          <input
            type="password"
            className="input"
            placeholder="password"
            required
          />
          <br />
          <input type="checkbox" />
          <label htmlFor="checkbox" className="remind-me">
            Remember me
          </label>
          <br />
          <button type="submit" className="btn">
            Submit
          </button>
          <small className="small">
            Forget{" "}
            <a href="#" className="anchor">
              Password
            </a>
          </small>
          <p className="message">{message}</p>
        </form>
      </section>
    </>
  );
};

export default Signin;
