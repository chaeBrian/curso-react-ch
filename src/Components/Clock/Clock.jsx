import React, { Fragment } from "react";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <Fragment>
      <section className="clock__container">
        <div className="clock__days">
          <span>0{timerDays}</span>
          <span>days</span>
        </div>
        <div className="clock__container--second">
          <div className="clock__hours">
            {
              timerHours < 10
              ? <span>0{timerHours}</span>
              : <span>{timerHours}</span>
            }
            <span>hours</span>
          </div>{" "}
          <div className="clock__container--third">
            <div className="clock__min">
              {
                timerMinutes < 10
                ? <span>0{timerMinutes}</span>
                : <span>{timerMinutes}</span>
              }
              <span>min</span>
            </div>{" "}
            <div className="clock__sec">
              {
                timerSeconds < 10
                ? <span>0{timerSeconds}</span>
                : <span>{timerSeconds}</span>
              }
              <span>sec</span>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Clock;
