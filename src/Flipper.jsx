import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.scss";

function Flipper({ Time, Max,Secs,isNotTheFirstDigit }) {
  const [count, setCount] = useState(Max);
  const [flipping, setFlipping] = useState(false);
  const [animations, setAnimations] = useState(0);
  const [times, setTimes] = useState(0);
  useEffect(() => {
    if (Secs % Time === isNotTheFirstDigit) {
        setFlipping(true);
      }
  }, [Secs,Time]);

  function endFlip() {

    if (animations % 2 === 0) {
      setCount(count - 1);
      if (count === 0) {
        setCount(Max);
      }
    }
    if (animations % 2 === 1) {
      setFlipping(false);
    }
    setAnimations(animations + 1);
  }
  function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}
  return (
    <>
      <div
        className={`
      flip-card
      ${flipping ? "flip" : ""}
      `}
        datanumber={pad(count,2)}
        onAnimationEnd={() => endFlip()}
      >
        <div className="top">{pad(count,2)}</div>
        <div className="bottom">{pad(count,2)}</div>
      </div>
    </>
  );
}

export default Flipper;
