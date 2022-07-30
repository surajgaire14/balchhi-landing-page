import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles";
import "./app.scss";


const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
  },
  bottom: {
    color: "grey",
  },
  top: {
    color: "#02c7fb",
    animationDuration: "550ms",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
}));

const App = () => {
  const classes = useStyles();

  const [Countdown, setCountDown] = React.useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  let interval = useRef();
  let MIN = 0;
  let MAX = 60;
  let maxHours = 24;
  let minHours = 0;
  let maxDays = 365;
  const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);
  const normaliseHours = (value) =>
    ((value - minHours) * 100) / (maxHours - minHours);
  const normaliseDays = (value) => ((value - MIN) * 100) / (maxDays - MIN);

  React.useEffect(() => {
    const duration = new Date("August 30,2022 00:00:00").getTime();

    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const timeGap = duration - now;
      const days = Math.floor(timeGap / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (timeGap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((timeGap % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeGap % (1000 * 60)) / 1000);

      if (timeGap < 0) {
        console.log(timeGap);
        clearInterval(interval.current);
      } else {
        setCountDown({
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds,
        });
      }
    }, 1000);

    return () => clearInterval(interval.current);
  }, []);

  return (
    <div className="container">
      <Navbar />
      <h1>We're </h1>  
       <h1 className="linear_gradient" > Getting Ready</h1>  
       <h1>to Launch in</h1>
      <div className="progress__container">
        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", top: "52px", left: "48px" }}>
            {Countdown.days}
          </span>
          <CircularProgress
            variant="determinate"
            value={100}
            size="8rem"
            className={classes.bottom}
            thickness={1}
          />
          <CircularProgress
            variant="determinate"
            value={normaliseDays(Countdown.days)}
            size="8rem"
            className={classes.top}
            thickness={1}
          />
          <p>Days</p>
        </div>
        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", top: "45px", left: "45px" }}>
            {Countdown.hours}
          </span>
          <CircularProgress
            variant="determinate"
            value={100}
            size={window.innerWidth <= "450px" ? "5rem" : "7rem"}
            className={classes.bottom}
            thickness={1}
          />
          <CircularProgress
            variant="determinate"
            value={normaliseHours(Countdown.hours)}
            size="7rem"
            className={classes.top}
            thickness={1}
          />
          <p>Hours</p>
        </div>
        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", top: "35px", left: "35px" }}>
            {Countdown.minutes}
          </span>
          <CircularProgress
            variant="determinate"
            value={100}
            size="6rem"
            className={classes.bottom}
            thickness={1}
          />
          <CircularProgress
            variant="determinate"
            value={normalise(Countdown.minutes)}
            size="6rem"
            className={classes.top}
            thickness={1}
          />
          <p>Minutes</p>
        </div>
        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", top: "26px", left: "26px" }}>
            {Countdown.seconds}
          </span>
          <CircularProgress
            variant="determinate"
            value={100}
            size="5rem"
            className={classes.bottom}
            thickness={1}
          />
          <CircularProgress
            variant="determinate"
            value={normalise(Countdown.seconds)}
            size="5rem"
            className={classes.top}
            thickness={1}
          />
          <p>Seconds</p>
        </div>
      </div>
      <div className="about">
        {/* <p>
          Our website is under construction,we are working very hard to give you
          the <br />
          best experience on our new website
        </p> */}
        <Typography component={"p"}>Our website is under construction,we are working very hard to give you
          the <br />
          best experience on our new website</Typography>
      </div>
      <div className="footer">
        <p>All rights reserved &copy;2022</p>
      </div>
    </div>
  );
};

export default App;
