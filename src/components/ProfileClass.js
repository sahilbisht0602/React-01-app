import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " constructor");
    this.state = {
      count: 1,
      count2: 2,
    };
  }

  componentDidMount() {
    console.log(console.log(this.props.name + " did mount"));
    this.timer = setInterval(() => {
      console.log("timmer");
    }, 1000);
  }

  componentDidUpdate() {
    console.log(this.props.name + " update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        {console.log(this.props.name + " render")}
        <h3>{this.props.name}</h3>
        <h4>{this.state.count}</h4>
        <h4>{this.state.count2}</h4>
        <button
          onClick={() => {
            this.setState({
              count: 2,
              count2: 3,
            });
          }}
        >
          Click
        </button>
      </>
    );
  }
}

export default ProfileClass;
