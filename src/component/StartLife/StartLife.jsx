import React, { useState } from "react";
import {Affix, Button, Popover, Drawer, Tooltip} from "antd";
import "./StartLife.css";
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
        let baseProp = {
            name: this.state.name,
            sex: this.state.sex,
            familyPoint: this.state.familyPoint,
            iqPoint: this.state.iqPoint,
            bodyPoint: this.state.bodyPoint,
            luckPoint: this.state.luckPoint
        }
        return (
            <>
                <DrawerProp
                    text="属性啥来着？"
                    toolTip="点击弹出属性框，点击黑色区域关闭弹窗！"
                    params={baseProp}
                />
                <div>
                {/*  业务逻辑代码在这里写  */}
                </div>
            </>
        );
    }
}

// 属性展示，抽屉展示
const DrawerProp = (props) => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    let sex = props.params.sex === "male" ? "男" : "女";

    return (
        <>
            <Tooltip
                placement="rightBottom"
                title={props.toolTip}
                mouseEnterDelay="1"
                autoAdjustOverflow={true}
            >
                <Affix offsetTop={10} offsetBottom={10}>
                    <Button
                        onClick={showDrawer}
                        className="propAffix"
                    >{props.text}</Button>
                </Affix>
            </Tooltip>

            <Drawer title={`Hi, 你的娃儿是${props.params.name}呀，还是个${sex}娃儿！`} placement="right" onClose={onClose} visible={visible}>
                <p>
                    <span className="propLabel">家庭属性：</span>
                    <span className="propValue"><u>{props.params.familyPoint}</u></span>
                </p>
                <p>
                    <span className="propLabel">智商属性：</span>
                    <span className="propValue"><u>{props.params.iqPoint}</u></span>
                </p>
                <p>
                    <span className="propLabel">身体属性：</span>
                    <span className="propValue"><u>{props.params.bodyPoint}</u></span>
                </p>
                <p>
                    <span className="propLabel">辛运属性：</span>
                    <span className="propValue"><u>{props.params.luckPoint}</u></span>
                </p>
            </Drawer>
        </>
    );
};