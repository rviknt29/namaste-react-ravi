import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h1>Count = {count}</h1>
        <button onClick={() => {
            // Never update state variable directly
            this.setState({
                count: this.state.count + 1,
            })
        }}>Inc Count</button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 9834xxxx34</h4>
      </div>
    );
  }
}

export default UserClass;
