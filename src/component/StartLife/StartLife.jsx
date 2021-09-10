import React from "react";
const $ = require('jquery');

const dbTable = 'roles';

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

        //后台传数据
        $.get("http://localhost:3005/server/sqlite/addline", {
            table: dbTable,
            columns: Object.keys(par).join('&'),
            line: Object.values(par).join('&')
        }).then(res => {
            console.log("接口返回：", res);
        });
    }

    render() {
        return (
            <div>
                <p>hello this is your life!</p>
            </div>
        );
    }
}