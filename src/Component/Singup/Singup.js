import React from "react";
import "./Singup.css";
export default function Singup() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div class="login-page">
            <div class="form">
              <form class="login-form">
                <input type="text" placeholder="name" />
                <input type="password" placeholder="password" />
                <input type="text" placeholder="email address" />
                <button>create</button>
                <p class="message">
                  Already registered? <a href="/login">Sign In</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
