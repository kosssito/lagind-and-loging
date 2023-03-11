/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import "../Styles/login.css";

const Login = ({ popup, setPopup }) => {
  const [wappper, setWapper] = useState({
    active: "wrapper",
  });

  useEffect(() => {
    setWapper({
      ...wappper,
      active: popup,
    });
  }, [popup]);

  const handleRegister = () => {
    setWapper({
      ...wappper,
      active: "wrapper active-popup active",
    });
  };
  const handleLogin = () => {
    setWapper({
      ...wappper,
      active: "wrapper active-popup",
    });
  };
  const handleClose = () => {
    setPopup({
      ...wappper,
      active: "wrapper",
    });
  };

  const hanndlSubmit = (e) => {
    e.prevent.defailt();
  };

  return (
    <div className={wappper.active}>
      <span onClick={handleClose} className="icon-close">
        <ion-icon name="close"></ion-icon>
      </span>
      <div className="from-box login">
        <h2>Login</h2>
        <form onSubmit={hanndlSubmit}>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" required />
            <label>Passsword</label>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="login-register">
            <p>
              Don't have an acctunt?
              <a onClick={handleRegister} href="#">
                Registrer
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="from-box register">
        <h2>Registration</h2>
        <form onSubmit={hanndlSubmit}>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="person"></ion-icon>
            </span>
            <input type="text" required />
            <label>UserName</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" required />
            <label>Passsword</label>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />I agree to the terms & conditions
            </label>
          </div>
          <button type="submit" className="btn">
            Registrer
          </button>
          <div className="login-register">
            <p>
              Already have an account?
              <a onClick={handleLogin} href="#">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
