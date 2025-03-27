import React, { Component } from "react";
import img from "./assets/img/profile.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Olukayode Kay",
        bio: "A passionate software developer.",
        imgSrc: img,
        profession: "Software Engineer",
      },
      shows: false,
      timeSinceMounted: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMounted: prevState.timeSinceMounted + 1,
      }));
    }, 1000); // Updates every second
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button onClick={this.toggleShow}>
          {this.state.shows ? "Hide Profile" : "Show Profile"}
        </button>

        {this.state.shows && (
          <div style={{ marginTop: "20px" }}>
            <img
              src={this.state.person.imgSrc}
              alt="Profile"
              style={{ width: "200px" }}
            />
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <h3>{this.state.person.profession}</h3>
          </div>
        )}

        <p>
          Component has been mounted for: {this.state.timeSinceMounted} seconds
        </p>
      </div>
    );
  }
}

export default App;
