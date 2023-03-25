import { Fragment } from "react";
import ParentClass from "./ParentClass";

const About = () => {
  return (
    <Fragment>
      {console.log("render")}
      <h1>About us page</h1>
      <ParentClass />
    </Fragment>
  );
};

export default About;
