import React, { useRef, useEffect, useState } from "react";
import "./Login.css";
import Input from "./../components/Input";

const Login = (props) => {
  const [message, setMessage] = useState("");

  const usernameRef = useRef();
  const passwordRef = useRef();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    if (username === "admin" && password === "123456") {
      setMessage("Good");
    } else {
      setMessage("Bad");
    }
  };

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <div className="container h-100">
      <div className="row justify-content-center h-100 align-items-center">
        <div className="col-sm-8 col-lg-5">
          <div className="card bg-primary">
            <div className="card-header text-white">
              <h4 className="card-title mb-0">
                <i className="bi-grid-3x3-gap-fill" /> Login
              </h4>
            </div>
            <div className="card-body bg-white rounded-bottom">
              <p className="text-danger text-center">{message}</p>
              <form onSubmit={formSubmitHandler}>
                <Input inputRef={usernameRef} label="Username" id="txUsername" maxLength="30" />
                <Input inputRef={passwordRef} label="Password" id="txtPassword" type="password" />
                {/* <Input label="Note" id="txtNote" rows="3" /> */}
                <div className="row">
                  <div className="offset-sm-3 col-auto">
                    <button type="submit" className="btn btn-primary">
                      Sign in
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
