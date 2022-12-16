import { useState, useEffect } from "react";

const AnalogClock = () => {
  const [date, setDate] = useState(new Date());
  const second = date.getSeconds() * 6 + 180; //// 360/60 = 6 each minutes it rotate 6deg + 180(look at 0 deg for more clarification)

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <div className="play-details">
        <div className="play-details-body">
          <h1 className="clock-play-heading">Analog Second Clock</h1>
          <br />
          <div className="analong-clock-container">
            <div className="clock">
              <div
                className="second-hand"
                style={{
                  transform: "rotate(" + second + "deg)",
                }}
              ></div>
              <div className="brand"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnalogClock;