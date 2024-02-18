import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    // constructor(props) {
    //     super(props)
    //     console.log('Parent constructor')
    // }
    componentDidMount() {
        console.log('Parent component did mount')
    }

    render() {
        console.log('Parent render')
        return(
            <div className="p-6 mt-2 bg-slate-400 shadow-lg">
                <h1>About Us</h1>
                <UserClass name="first" location="Pune" contact="girishnaykawade"></UserClass>
                <UserClass name="second" location="Pune" contact="girishnaykawade"></UserClass>
                <UserClass name="third" location="Pune" contact="girishnaykawade"></UserClass>

            </div>
        )
    }
}

export default About;