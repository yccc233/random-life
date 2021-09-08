import React from "react";

export class StartLife extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}

    }

    componentWillMount() {
        console.log(this.props)
        console.log(this.props.match.params)
    }

    render() {
        console.log("world")
        return (
            <div>
                <p>hello this is your life!</p>
            </div>
        );
    }
}