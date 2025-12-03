import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    } else {
      timeLeft = { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center space-x-8 my-8" data-aos="fade-left" data-aos-delay="400" data-a0s-duration="2000">
      <div className="text-center">
        <span className="block text-4xl font-bold">{timeLeft.days}</span>
        <span className="block text-sm text-gray-500">Days</span>
      </div>
      <div className="text-center">
        <span className="block text-4xl font-bold">{timeLeft.hours}</span>
        <span className="block text-sm text-gray-500">Hours</span>
      </div>
      <div className="text-center">
        <span className="block text-4xl font-bold">{timeLeft.minutes}</span>
        <span className="block text-sm text-gray-500">Mins</span>
      </div>
      <div className="text-center">
        <span className="block text-4xl font-bold">{timeLeft.seconds}</span>
        <span className="block text-sm text-gray-500">Secs</span>
      </div>
    </div>
  );
};

export default CountdownTimer;

