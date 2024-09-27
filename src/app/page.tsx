import React from "react";
import Config from "./configs/config.export";

const Home = () => {
  return <div>{Config().mode}</div>;
};

export default Home;
