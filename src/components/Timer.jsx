import { useState, useRef, useEffect } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  let timerId = useRef(null);
  let h2Ref = useRef(null);
  let StartButton = useRef(null);
  let StopButton = useRef(null);

  useEffect(() => {
    if (timer === 0) {
      h2Ref.current.innerText = `Timer Value is ${timer}`;
      h2Ref.current.style.color = "black";
    } else {
      h2Ref.current.innerText = `Timer is Started and Value is ${timer}`;
      h2Ref.current.style.color = "green";
    }
  });

  const StartTimer = () => {
    StartButton.current.disabled = true;
    StopButton.current.disabled = false;

    timerId.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };
  const StopTimer = () => {
    StartButton.current.disabled = false;
    StopButton.current.disabled = true;
    h2Ref.current.innerText = `Timer is Stopped and Value is ${timer}`;
    h2Ref.current.style.color = "red";

    clearInterval(timerId.current);
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <h2 id="heading" ref={h2Ref}>
        Timer is {timer}
      </h2>
      <button onClick={StartTimer} ref={StartButton}>
        Start
      </button>{" "}
      &emsp;
      <button onClick={StopTimer} ref={StopButton}>
        Stop
      </button>
    </div>
  );
};

export default Timer;
