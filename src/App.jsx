import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.scss";
import backgroundStars from "./assets/bg-stars.svg"
import hills from "./assets/pattern-hills.svg"
import Flipper from "./Flipper.jsx";
import Facebook from "./assets/icon-facebook.svg"
import Instagram from "./assets/icon-instagram.svg"
import Pinterest from "./assets/icon-pinterest.svg"
function App() {
  const [Secs, setSecs] = useState(777600);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setSecs(Secs - 1); // <-- Change this line!
      console.log(Secs)
    }, 1000);
    return () => {
      window.clearInterval(timer);
    };
  }, [Secs]);

  return (
    <>
      <img src={backgroundStars} alt="" className="stars" />
      <img src={hills} alt="" className="hills" />

    <div className="content">
      <h1>We're launching soon!</h1>
        <div className="countdown">
          <div className="flipper">
            <Flipper Time={60*60*24} Max={8} Secs={Secs } isNotTheFirstDigit={1}/>
            <p>Days</p>
          </div>
          <div className="flipper">
            <Flipper Time={60*60} Max={23} Secs={Secs } isNotTheFirstDigit={1}/>
            <p>Hours</p>
          </div>
          <div className="flipper">
            <Flipper Time={60} Max={59} Secs={Secs} isNotTheFirstDigit={1}/>
            <p>Minutes</p>
          </div>
          <div className="flipper">
            <Flipper Time={1} Max={59} Secs={Secs} isNotTheFirstDigit={0}/>
            <p>Seconds</p>
          </div>
        </div>

        <div className="logos">
          <a href="" className="facebook"><img src={Facebook} alt=""  /></a>
                <a href=""><img src={Instagram} alt="" className="instagram" /></a>
                <a href=""><img src={Pinterest} alt="" className="pinterest" /></a>
        </div>
    </div>
    </>
  );
}

export default App;
