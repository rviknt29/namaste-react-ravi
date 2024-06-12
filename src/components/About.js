import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

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
        <h2>LoggedIn User: <UserContext.Consumer>{({loggedInUser}) => <h3>{loggedInUser}</h3> }</UserContext.Consumer> </h2>
        <h2>This is about us & our application</h2>
        <UserClass name={"Ravi from Class"} location={"Deoghar"} />
      </div>
    );
  }
}

export default About;
