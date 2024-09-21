import React from "react";

class UserClassLifeCycle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo : {
        login:"Dummy data",
        created_at:"don't know",
        avatar_url:"www.dummy.com"
      }
    };
    console.log("constructor called");
  }

  async componentDidMount(){
    console.log("componentDidMount called");

    const response = await fetch("https://api.github.com/users/kanishgupta");
    const json = await response.json();

    this.setState({
        userInfo: json
    });
  }

  componentDidUpdate(){
    console.log("componentDidUpdate called");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount called");
  }

  render() {
    const { name, email, location } = this.props;
    const { login, created_at, avatar_url} = this.state.userInfo;

    console.log("render method called");
    return (
      <div className="user-cls">
        <h2>{login}</h2>
        <img src={avatar_url} alt="Some_image"></img>
        <h3>Created at: {created_at}</h3>
      </div>
    );
  }
}

export default UserClassLifeCycle;
