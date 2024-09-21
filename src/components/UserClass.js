import React from "react";
//This Class based component is used to show how render and commit phase of siblings is combined.
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };
    console.log( this.props.name + "constructor");
  }

  componentDidMount(){
    console.log(this.props.name + "componentDidMount");
  }

  render() {
    const { name, email, location } = this.props;
    console.log(this.props.name + "render method");
    return (
      <div className="user-cls">
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h3>{email}</h3>
        <h3>Count: {this.state.count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Inc Count
        </button>
      </div>
    );
  }
}

export default UserClass;
