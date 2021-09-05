import React from "react";
import "../styles/Login.css";

function SignUp() {
  return (
    <div className="Login">
      <div className="Login_in">
        <div className="Login_sign_in">Sign Up</div>
        <div className="Login_input">
          <input placeholder="Id" />
          <input placeholder="Password" />
          <button>화원가입</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
