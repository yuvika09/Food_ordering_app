import React from "react";
import Profile from "./Profile";
import UserContext from "../utils/UserContext"

class About extends React.Component {
  render() {
    console.log("Parent render called");
    return (
      <>
        <h1>hey this is about me</h1>
        
        <UserContext.Consumer>
          {({ user }) => (
            <>
              <div className="text-bold">{user.name}</div>
              <div>{user.address}</div>
            </>
          )}
        </UserContext.Consumer>

        <Profile name={"Yuvika"} />
        {/* <Profile name={"Yuvi"} /> */}
      </>
    );
  }
}
export default About;
