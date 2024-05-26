import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "default Name",
        location: "Default Location",
        avatar_url: "http://dummy-photo.com",
      },
    };
  }

  async componentDidMount() {
    // API Call
    const data = await fetch("https://api.github.com/users/ravikant");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { login, location, avatar_url } = this.state.userInfo;
    const { count } = this.state;

    console.log(name + "Child Render");

    return (
      <div className="user-card">
        <h1>Count = {count}</h1>
        <button
          onClick={() => {
            // Never update state variable directly
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Inc Count
        </button>
        <img src={avatar_url}></img>
        <h2>Name: {login}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 9834xxxx34</h4>
      </div>
    );
  }
}

export default UserClass;
