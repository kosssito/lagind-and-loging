import { useState } from "react";
import "../Styles/landing.css";
import Login from "./login"

const Landing = () => {

  const [popup, setPopup] = useState({
    active: "wrapper"
  })

  const handleBtnPopup = ()=>{
    setPopup({
        ...popup,
        active: "wrapper active-popup"
      })
  }
 
  return (
    <div>
      <header>
        <h2 className="logo">Logo</h2>
        <nav className="navigation">
          <a href="#">home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <button onClick={handleBtnPopup}  className="btnLoging-popup">Loging</button>
        </nav>
      </header>
      <Login popup={popup.active} setPopup={setPopup} />
    </div>
  );
};

export default Landing;
