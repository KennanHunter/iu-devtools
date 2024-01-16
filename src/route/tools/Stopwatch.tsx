import { FC } from "react";

// export const Stopwatch: FC = () => {
//   const [counterText, setCounterText] = useState("00:00:00");

//   const [startTime, setStartTime] = useState(0);

//   function update() {
//     const seconds = Math.round((Date.now() - startTime) / 1000);

//     // calculate the time in hours, minutes and seconds from the time in seconds
//     let hours = Math.floor(seconds / 3600);
//     let minutes = Math.floor(seconds / 60);
//     let currentSeconds = seconds % 60;

//     // console.dir({
//     //   startTime: startTime,
//     //   hours: hours,
//     //   minutes: minutes,
//     //   seconds: seconds,
//     // });

//     // update the html
//     setCounterText(
//       `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
//         seconds < 10 ? "0" : ""
//       }${currentSeconds}`
//     );
//   }

//   const { start, stop } = useInterval(update, 1);

//   return (
//     <div>
//       <h1>Stopwatch</h1>

//       <p>{startTime ? counterText : "00:00:00"}</p>

//       <Group>
//         <Button
//           onClick={() => {
//             if (startTime === 0) setStartTime(Date.now());

//             start();
//           }}
//         >
//           Start
//         </Button>
//         <Button onClick={stop}>Stop</Button>
//         <Button
//           onClick={() => {
//             setStartTime(Date.now());
//             setCounterText("00:00:00");
//           }}
//         >
//           Reset
//         </Button>
//       </Group>
//     </div>
//   );
// };

export const Stopwatch: FC = () => {
  return (
    <>
      <iframe
        style={{
          all: "unset",
          width: "100%",
          height: 800,
          overflow: "visible",
          top: 0,
          left: 0,
          border: 0,
        }}
        src="/stopwatch.html"
      />
    </>
  );
};
