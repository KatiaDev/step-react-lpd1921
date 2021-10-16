import React, { useEffect, useState } from "react";
import { Heading } from "@chakra-ui/react";

const Time = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  useEffect(() => {
    let timerHandler = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return function cleanup() {
      clearInterval(timerHandler);
    };
  });

  return (
    <>
      <Heading as="h1" textAlign="center" color="palevioletred">
        {currentTime}
      </Heading>
    </>
  );
};

export default Time;
