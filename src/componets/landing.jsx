import { useState } from "react";
import "../Styles/landing.css";
import Login from "./login"

const Landing = () => {

  const [popup, setPopup] = useState({
    active: "wrapper",
    menu: "navigation",
    name: "menu-sharp",
    blur: "nav-bg"
  })

  const handleBtnPopup = ()=>{
    setPopup({
        ...popup,
        active: "wrapper active-popup",
        menu: "navigation",
        name: "menu-sharp",
        blur: "nav-bg"
      })
  }

  const handleMenu = ()=>{
    if(popup.name === "menu-sharp")
    return  setPopup({
        ...popup,
        menu: "navigation active",
        name: "close",
        blur: "nav-bg active"
      })

    

    if(popup.name === "close") return setPopup({
      ...popup,
      menu: "navigation",
      name: "menu-sharp",
      blur: "nav-bg"
    })
    
  }
 
  return (
    <div>
      <header>
        <h2 className="logo">Logo</h2>
        <ion-icon id="menu" name={popup.name} onClick={handleMenu}></ion-icon>
        <nav className={popup.menu}>
          <a href="#">home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <button onClick={handleBtnPopup}  className="btnLoging-popup">Loging</button>
        </nav>
      </header>
      <div className={popup.blur}></div>
      <Login popup={popup} setPopup={setPopup} />
    </div>
  );
};

export default Landing;
