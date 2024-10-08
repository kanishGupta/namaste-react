import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserClassLifeCycle from "./UserClassLifeCycle";

class About extends Component {

    constructor(props){
        super(props);
        console.log("parent constructor");
    }

    componentDidMount(){
        console.log("parent component mount");
    }

    render(){
        console.log("parent render");
        return(
            <>
            <h1>About us</h1>
            {/* //This Class based component is used to show how render and commit phase of siblings is combined.
            <UserClass name={"First"} location={"Noida"} email={"kanishk0206@gmail.com"}/>
            <UserClass name={"Second"} location={"Seattle"} email={"kanishk0206@gmail.com"}/> */}

             {/* This is to show whole lifecycle of class based componernt */}
            <UserClassLifeCycle name={"Second"} location={"Seattle"} email={"kanishk0206@gmail.com"}/> 
            </>
        );
    }
}




// const About = () => {
//     return(
//         <>
//         <h1>About us</h1>
//         <User name={"kanishk Gupta"} location={"Delhi"} email={"kanishk0206@gmail.com"}/>
//         <UserClass name={"Sarakshi Garg"} location={"Noida"} email={"kanishk0206@gmail.com"}/>
//         </>
//     );
// }

export default About;