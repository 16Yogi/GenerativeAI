import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div class="login-page">
            <div class="form">
              <form class="login-form">
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button>login</button>
                <p class="message">
                  Not registered? <a href="/singup">Create an account</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


