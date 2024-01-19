import { Button, Group } from "@mantine/core";
import { FC, useEffect, useState } from "react";

export const Stopwatch: FC = () => {
  const [counterText, setCounterText] = useState("00:00:00");

  const [startTime, setStartTime] = useState(0);


  const [isRunning, setIsRunning] = useState(false);
  // this creates a variable that we will later use to contain the setInterval function
  const [watch, setWatch] = useState(0);

  function update() {
    // the number of seconds is equal to the time minus the time it started (they are both in milliseconds so /1000)
    const seconds = Math.round((Date.now() - startTime) / 1000);
    console.log('seconds:', seconds, "date.now():", Date.now(), "startTime:", startTime);

    // calculate the time in hours, minutes and seconds from the time in seconds
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor(seconds / 60);
    let currentSeconds = seconds % 60;

    // console.dir({
    //   startTime: startTime,
    //   hours: hours,
    //   minutes: minutes,
    //   seconds: seconds,
    // });

    // update the html
    setCounterText(
      `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""
      }${currentSeconds}`
    );
  }
  // "useInterval" was there before
  // const { start, stop } = setInterval(update, 1);


  function stop() {
    setIsRunning(false);
    clearInterval(watch);
  }

  function start() {
    if (!isRunning) {
      console.log('Starting the stopwatch. startTime:', startTime);
      if (startTime === 0) setStartTime(Date.now());
      setIsRunning(true);
      setWatch(setInterval(update, 1000));
    }
  }

  return (
    <div>
      <h1>Stopwatch</h1>

      <p>{startTime ? counterText : "00:00:00"}</p>

      <Group>
        <Button
          onClick={() => {
            if (startTime === 0) setStartTime(Date.now()), console.log('start time set to:', Date.now(), 'startTime:', startTime);

            start();
          }}
        >
          Start
        </Button>
        <Button onClick={stop}>Stop</Button>
        <Button
          onClick={() => {
            setStartTime(Date.now());
            setCounterText("00:00:00");
            stop();
          }}
        >
          Reset
        </Button>
      </Group>
    </div>
  );
};


// export const Stopwatch: FC = () => {
//   return (
//     <>
//       <iframe
//         style={{
//           all: "unset",
//           width: "100%",
//           height: 800,
//           overflow: "visible",
//           top: 0,
//           left: 0,
//           border: 0,
//         }}
//         src="/stopwatch.html"
//       />
//     </>
//   );
// };
