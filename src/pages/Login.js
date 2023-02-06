import React, { useEffect, useState } from "react";
import Input from "../components/Input";

const Login = (props) => {
  const [message, setMessage] = useState("");

  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const formSubmiHandler = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    if (username === "admin" && password === "123456"){
      setMessage("Good");
    }else{
      setMessage("Bad");
    }
    // console.log(username, password);
  };
  useEffect(() => {
    usernameRef.current.focus();
  });

  const getValue = () => {
   const username = document.getElementById("txtUsername").value;
    console.log(username);
  }
    
        return (
            <div className="container h-100">
    <div className="row justify-content-center h-100 align-items-center">
    <div className="col-sm-8 col-lg-5">
      <div className="card bg-primary">
        <div className="card-header text-white">
          <h4 className="card-title mb-0"><i className="bi-grid-3x3-gap-fill" /> Login</h4>
        </div>
        <div className="card-body bg-white rounded-bottom">
          <p className="text-danger text-center">{message}</p>
          <form onSubmit={formSubmiHandler}>
            <Input label="Username" inputRef={usernameRef} id="txtUsername" maxLength="30"/>
            <Input label="Password" inputRef={passwordRef} id="txtPassword" type="password"/>
            <Input label="Note" id="txtPNote" row ="3"/>
            <div className="row">
              <div className="offset-sm-3 col-auto">
                <button type="submit" onClick={getValue} className="btn btn-primary">Sign in</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
        );
    }

 
export default Login;