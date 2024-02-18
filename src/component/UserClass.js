import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: "125-458-658",
            count: 14
        }
    }
    componentDidMount() {
        console.log(this.props.name+'  component did mount')
    }

    render() {
        const {name, location, contact} = this.props;
        const {phone, count} = this.state;
        return (
            <div className="border border-white rounded-lg p-5 my-4 bg-gray-300">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Contact: {contact}</h3>
                <h4>Phone: {phone}</h4>
                <h4>Count: {count}</h4>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count+1
                    })
                }}>Count++</button>
            </div>
        )
    }
}

export default UserClass;