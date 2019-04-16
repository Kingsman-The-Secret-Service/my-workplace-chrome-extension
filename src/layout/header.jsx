/*global chrome*/
import React from 'react';
import { Layout, Switch, Row, Col } from 'antd';
import moment from 'moment';

const { Header} = Layout;

export class MyHeader extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            time: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        }
        this.checked();
    }
    tick() {
        this.setState({
            time: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        });
    }

    componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    checked(){
        chrome.storage.sync.get('url', (items) => {
            this.setState({
                checked: (items.url === chrome.extension.getURL('index.html') ? "true" : '')
            });
        });
    }

    onChange = (checked) => {
        let url = 'chrome-search://local-ntp/local-ntp.html';
        if(checked){
            url =  chrome.extension.getURL('index.html');
        }

        chrome.storage.sync.set({
            url: url
        });
        this.checked();
    }

    render(){
        return(
            <Header style={{ background: '#fff', padding: 0 }} >
                <Row type="flex" justify="end" align="middle">
                    <Col span={4}></Col>
                    <Col span={8}>{this.state.time}</Col>
                    <Col span={4}>                      
                        <Switch 
                            style={{float: 'right'}}
                            checkedChildren="My Workplace Tab" 
                            unCheckedChildren="Chrome Tab" 
                            onChange={this.onChange} 
                            {...this.state}
                        />
                    </Col>
                </Row>
            </Header>
        );
    }
}