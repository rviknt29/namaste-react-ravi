import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is about us & our application</h2>
      {/* <User name={"Ravi Jha (function)"} /> */}
      <UserClass name={"Ravi from Class"} location={'Deoghar'} />
    </div>
  );
};

export default About;
