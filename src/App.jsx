import React from "react";
import "./App.css";
import DesktopImg from "./assets/image-header-desktop.jpg";
import MobaImg from "./assets/image-header-mobile.jpg";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    <main className="App">
      <div className="BoxContainer">
        <section className="MobaImgContainer">
          <img
            src={MobaImg}
            className={`MobileBackground`}
            alt={`background`}
          />
        </section>
        <Body />
        <section className="DeskImgContainer">
          <img
            src={DesktopImg}
            className={`DesktopBackground`}
            alt={`background`}
          />
        </section>
      </div>
    </main>
    <Footer />
    </>
  );
}

export default App;
