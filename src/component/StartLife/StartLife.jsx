import React from "react";
const sqlite = require("../../utils/sqlite");

export class StartLife extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    componentWillMount() {
        let par = this.props.match.params;
        par = {
            name: par.name,
            sex: par.sex,
            ...JSON.parse(par.params)
        }
        this.setState(par);
        sqlite.addLine(par);
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