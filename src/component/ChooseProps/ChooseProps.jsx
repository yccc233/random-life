
import React from "react";
import './ChooseProps.css';

import {Redirect} from 'react-router-dom';
import {Form, Button, Select, Input, Tooltip, InputNumber, Popconfirm} from 'antd';
import {
    UserOutlined,
    FrownOutlined,
    SmileOutlined,
    MehOutlined,
    InfoCircleOutlined,
    QuestionCircleOutlined
} from '@ant-design/icons';

const { Option } = Select;


const names = ['赵','钱','孙','李','周','吴','郑','王'];
const sexs = ['male','female','random'];
const startPath = "/startlife";

const Layout = {
    labelCol: {
        span: 10,
    },
    wrapperCol: {
        span: 4,
    }
}

const tailLayout = {
    wrapperCol: {
        offset: 10,
        span: 16,
    },
};

export default class ChooseProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            sex: null,
            isFinish: false,
            totalPoints: 100,
            usedPoints: 0,
            familyPoint: 0,
            iqPoint: 0,
            bodyPoint: 0,
            luckPoint: 0
        };
    }

    onSexChange = (value) => {
        switch (value) {
            case 'male':
                this.setState({
                    sex: "male"
                })
                break;

            case 'female':
                this.setState({
                    sex: "female"
                })
                break;

            case 'random':
                this.setState({
                    sex: "random"
                })
                break;
            default:
        }
    };

    onFinish = (value) => {
        this.setState({
            isFinish: true
        });
    };

    onRandom = () => {
        let rn = Math.floor(Math.random() * 100) % names.length;
        let rs = Math.floor(Math.random() * 100) % 3;
        let rp = [];
        for (let i = 0; i < 3; i++)
            rp.push(Math.floor(Math.random() * 100))
        rp.sort((a, b) => {
            return a - b;
        });
        this.setState({
            name: names[rn] + "某",
            sex: sexs[rs],
            usedPoints: 100,
            familyPoint: rp[0] - 0,
            iqPoint: rp[1] - rp[0],
            bodyPoint: rp[2] - rp[1],
            luckPoint: 100 - rp[2]
        })
    };

    onPointsChange = (type, value) => {
        let pastPoint = this.state[type];
        let used = this.state.usedPoints + value - pastPoint
        let newState = {
            type: value,
            usedPoints: used,
            remainPoints: this.state.totalPoints - used
        };
        newState[type] = value;
        this.setState(newState);
    }

    render() {
        return (
            <div>
                <div style={{width: "100%"}}>
                    <h1 className="title-style mt10">人生选择器</h1>
                </div>
                <Form name="control-hooks" onFinish={this.onFinish} className="form-style">
                    <Form.Item
                        label="姓名"
                        {...Layout}
                    >
                        <InputName defaultName={this.state.name}/>
                    </Form.Item>
                    <Form.Item
                        label="性别"
                        {...Layout}
                    >
                        <SelectSex onChange={this.onSexChange} sex={this.state.sex}/>
                    </Form.Item>
                    <p style={{textAlign: "center"}}>
                        <span>下面为娃儿基本属性加个点！点数剩余</span>
                        <span style={{color: "blue"}}>{this.state.totalPoints - this.state.usedPoints}</span>
                        <span>，请自觉分配！</span>
                        {
                            (this.state.totalPoints - this.state.usedPoints < 0) &&
                                <span style={{color: "#c7c7c7", fontSize: "10px"}}
                                > 小东西被你发现了bug 🐶</span>
                        }
                    </p>

                    <Form.Item
                        {...Layout}
                        label="家境"
                    >
                        <PropPoints defaultValue={this.state.familyPoint} max={this.state.totalPoints}
                                    onPointsChange={this.onPointsChange} type={"familyPoint"}/>
                    </Form.Item>
                    <Form.Item
                        {...Layout}
                        label="智力"
                    >
                        <PropPoints defaultValue={this.state.iqPoint} max={this.state.totalPoints}
                                    onPointsChange={this.onPointsChange} type={"iqPoint"}/>
                    </Form.Item>
                    <Form.Item
                        {...Layout}
                        label="体力"
                    >
                        <PropPoints defaultValue={this.state.bodyPoint} max={this.state.totalPoints}
                                    onPointsChange={this.onPointsChange} type={"bodyPoint"}/>
                    </Form.Item>
                    <Form.Item
                        {...Layout}
                        label="幸运值"
                    >
                        <PropPoints defaultValue={this.state.luckPoint} max={this.state.totalPoints}
                                    onPointsChange={this.onPointsChange} type={"luckPoint"}/>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Popconfirm title="确定就这样吗？"
                                    onConfirm={this.onFinish}
                                    icon={<QuestionCircleOutlined/>}
                                    okText="就这样 ！"
                                    cancelText="别吧..."
                        >
                            <Button type="primary" className="btn">
                                开始
                            </Button>
                        </Popconfirm>

                        <Button type="link" htmlType="button" onClick={this.onRandom}>
                            随机人生
                        </Button>
                    </Form.Item>
                </Form>
                {
                    this.state.isFinish && (
                        <Redirect to={`${startPath}/${this.state.name}/${this.state.sex}/${JSON.stringify({
                                familyPoint: this.state.familyPoint,
                                iqPoint: this.state.iqPoint,
                                bodyPoint: this.state.bodyPoint,
                                luckPoint: this.state.luckPoint
                            })}`}/>

                    )
                }

            </div>
        );
    }
}

/**
 * 个人基本属性，需要最大值max，change方法onPointsChange，属性类型type，默认值defaultValue四种
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const PropPoints = (props) => (
    <div>
        <InputNumber
            defaultValue={props.defaultValue}
            min={0}
            max={props.max}
            key={Math.floor((Math.random() * 10000))}
            formatter={value => `${value}%`}
            parser={value => value.replace('%', '')}
            onChange={value => props.onPointsChange(props.type, value)}
        />
    </div>
)

const InputName = (props) => (
    <Input
        placeholder="输入娃儿的姓名"
        key={`${Math.floor((Math.random() * 1000))}`}
        prefix={<UserOutlined className="site-form-item-icon" />}
        suffix={
            <Tooltip title="请你正常一点！">
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
        }
        defaultValue={props.defaultName}
    />
)


const SelectSex = (props) => (
    <div>
        <Select
            placeholder="选择出生的娃儿性别"
            onChange={props.onChange}
            className="form-select-style"
            value={props.sex}
        >
            <Option value="male">男</Option>
            <Option value="female">女</Option>
            <Option value="random">随机</Option>
        </Select>
        <span>
            {
                props.sex === "female" ?
                    <SmileOutlined className="ml10"/> :
                    (props.sex === "random" ?
                            <MehOutlined className="ml10"/> :
                            <FrownOutlined className="ml10"/>
                    )
            }
        </span>
    </div>
)

