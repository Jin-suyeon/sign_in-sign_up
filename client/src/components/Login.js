import React from "react";
import "../styles/Login.css";

function Login() {
  return (
    <div className="Login">
      <div className="Login_in">
        <div className="Login_sign_in">Sign In</div>
        <div className="Login_input">
          <input placeholder="Id" />
          <input placeholder="Password" />
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
