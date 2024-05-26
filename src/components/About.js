import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);    
  }

  componentDidMount() {
    //API Call
  }

  render() {
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is about us & our application</h2>
        <UserClass name={"Ravi from Class"} location={"Deoghar"} />
      </div>
    );
  }
}

export default About;
