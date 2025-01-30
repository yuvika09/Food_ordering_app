import { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "",
        id: "",
        followers: "",
      },
    };
    console.log("Constructor called " + this.props.name);
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/yuvika09");
    const jsonData = await data.json();
    console.log(jsonData);
    this.setState({
      userInfo: jsonData,
    });
    console.log("Component did mount triggered " + this.props.name);
    this.timer = setInterval(() => {
      console.log("This is the set interval");
    }, 3000);
  }

  componentDidUpdate() {
    console.log("Component did update triggered " + this.props.name);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component will unmount triggered " + this.props.name);
  }

  render() {
    console.log("Render " + this.props.name);
    return (
      <>
        <h2>Name - {this.props.name}</h2>
        <h2>{this.state.userInfo.login}</h2>
        <div>{this.state.userInfo.followers} followers on github</div>
      </>
    );
  }
}

export default Profile;

/*
Parent render called

Constructor called Yuvika
Render Yuvika

Constructor called Yuvi
Render Yuvi

{login: 'yuvika09', id: 88945668, node_id: 'MDQ6VXNlcjg4OTQ1NjY4', avatar_url: 'https://avatars.githubusercontent.com/u/88945668?v=4', gravatar_id: '', …}
Component did mount triggered Yuvika

{login: 'yuvika09', id: 88945668, node_id: 'MDQ6VXNlcjg4OTQ1NjY4', avatar_url: 'https://avatars.githubusercontent.com/u/88945668?v=4', gravatar_id: '', …}
Component did mount triggered Yuvi

Render Yuvika
Render Yuvi

Component did update triggered Yuvika
Component did update triggered Yuvi

Component will unmount triggered Yuvika
Component will unmount triggered Yuvi
*/
