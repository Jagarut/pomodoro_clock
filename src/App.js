import React, { Component } from "react";

import "./App.css";

const audio = document.getElementById("beep");
let cron;

class App extends Component {
  state = {
    title: "Session",
    sessionL: 25,
    minutes: 25,
    seconds: 60,
    breakL: 5,
    active: true,
  };

  handleDecrement = (t) => {
    const { minutes, breakL, sessionL } = this.state;
    if (t === "breakL" && breakL > 1) {
      this.setState({
        breakL: breakL - 1,
      });
    } else if (t === "sessionL" && minutes > 1) {
      this.setState({
        sessionL: sessionL - 1,
        minutes: minutes - 1,
      });
    }
  };

  handleIncrement = (t) => {
    const { minutes, breakL, sessionL } = this.state;
    if (t === "breakL" && breakL < 60) {
      this.setState({
        breakL: breakL + 1,
      });
    } else if (t === "sessionL" && sessionL < 60) {
      this.setState({
        sessionL: sessionL + 1,
        minutes: minutes + 1,
      });
    }
  };

  timer = () => {
    const { title, minutes, seconds, breakL } = this.state;

    if (seconds === 60) {
      this.setState({
        minutes: minutes - 1,
      });
    }
    if (minutes === 0 && seconds === 0) {
      audio.play();

      this.setState({
        minutes: breakL,
        title: title === "Session" ? "Break" : "Session",
      });
    }
    this.setState({
      seconds: seconds === 0 ? 60 : seconds - 1,
    });
  };

  handlePlayPause = () => {
    const { active } = this.state;

    this.setState({
      active: !active,
    });

    if (active) {
      cron = setInterval(() => {
        this.timer();
      }, 1000);
    } else {
      clearInterval(cron);
    }
  };

  handleReset = () => {
    this.setState({
      title: "Session",
      sessionL: 25,
      minutes: 25,
      seconds: 60,
      breakL: 5,
      active: true,
    });
    clearInterval(cron);
    audio.pause();
    audio.currentTime = 0;
  };

  render() {
    const { title, minutes, seconds, breakL, sessionL } = this.state;
    return (
      <div className="App">
        <h1>25 + 5 Clock</h1>

        <div className="labels-container">
          <div id="break-label">
            <h3>Break Length</h3>
            <button
              onClick={() => this.handleDecrement("breakL")}
              id="break-decrement"
            >
              <i className="fa fa-arrow-down fa-2x" value="-"></i>
            </button>
            <p id="break-length" style={{ display: "inline" }}>
              {breakL}
            </p>
            <button
              onClick={() => this.handleIncrement("breakL")}
              id="break-increment"
            >
              <i className="fa fa-arrow-up fa-2x"></i>
            </button>
          </div>

          <div id="session-label">
            <h3>Session Length</h3>
            <button
              id="session-decrement"
              onClick={() => this.handleDecrement("sessionL")}
            >
              <i className="fa fa-arrow-down fa-2x"></i>
            </button>
            <p id="session-length" style={{ display: "inline" }}>
              {sessionL}
            </p>
            <button
              onClick={() => this.handleIncrement("sessionL")}
              id="session-increment"
            >
              <i className="fa fa-arrow-up fa-2x"></i>
            </button>
          </div>
        </div>
        <div className="timer">
          <h4 id="timer-label" className={title === "Break" && "red"}>
            {title}
          </h4>
          <h2 id="time-left" className={title === "Break" && "red"}>
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds === 60 ? "00" : seconds < "10" ? `0${seconds}` : seconds}
            {/* <span id="minute">{minutes < 10 ? `0${minutes}` : minutes}</span>:
            <span id="second">
              {seconds === "60"
                ? "00"
                : seconds < "10"
                ? `0${seconds}`
                : seconds}
            </span> */}
          </h2>
        </div>
        <div className="timer-control">
          <button id="start_stop" onClick={this.handlePlayPause}>
            <i className="fa fa-play fa-lg"></i>
            <i className="fa fa-pause fa-lg"></i>
          </button>

          <button onClick={this.handleReset}>
            <i id="reset" className="fas fa-sync-alt fa-lg"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
