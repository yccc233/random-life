import React from "react";

export class StartLife extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}

    }

    componentWillMount() {
        let par = this.props.match.params;
        this.setState({
            name: par.name,
            sex: par.sex,
            ...JSON.parse(par.params)
        });
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <p>hello this is your life!</p>
            </div>
        );
    }
}