import React, { useState } from "react";
import Login from "./Login.css";

const Signin = () => {
  let [message, setMessage] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    const input = document.getElementsByClassName("input")[0][1];

    if (!input) {
      return setMessage((message = "Input is empty"));
    } else {
      return setMessage((message = "Submitted"));
    }
  };

  return (
    <>
      <section className="Container">
        <form className="form">
          <h3 className="h3">Sign In</h3>
          <label htmlFor="email" className="email">
            Email address
          </label>
          <br />
          <input type="email" className="input" placeholder="email address" />
          <br />
          <label htmlFor="password" className="password">
            Password
          </label>
          <br />
          <input type="password" className="input" placeholder="password" />
          <br />
          <input type="checkbox" />
          <label htmlFor="checkbox" className="remind-me">
            Remember me
          </label>
          <br />
          <button type="submit" className="btn" onClick={handleSubmit}>
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
