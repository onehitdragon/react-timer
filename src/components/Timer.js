import React from "react";

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount(){
        this.counter = setInterval(() => {
            this.setState({
                date: new Date()
            });
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.counter);
    }

    render(){
        return (
            <div>
                It is {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}

export default Timer;