import React from "react";
import ProfileClass from "./ProfileClass";

class ParentClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent const");
  }

  componentDidMount() {
    console.log("parent did mount");
  }

  render() {
    return (
      <>
        <h1>Parent Class</h1>
        {console.log("parent render")}
        <ProfileClass name="first child" />
        <ProfileClass name="second child" />
      </>
    );
  }
}

export default ParentClass;
