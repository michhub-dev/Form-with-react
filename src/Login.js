import React from "react";
import Login from "./Login.css";

const Signin = () => {
  const handleSubmit = () => {
    const email = document.getElementsByClassName("input").input;
    const password = document.getElementsByClassName("password").input;
    let message;
    if (email === 0 && password === 0) {
      return (message = "inpute is empty");
    } else {
      return alert("submitted");
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
        </form>
      </section>
    </>
  );
};

export default Signin;
