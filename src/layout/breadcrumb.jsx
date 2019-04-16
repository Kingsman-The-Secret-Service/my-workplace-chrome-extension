import React from 'react';
import { Breadcrumb } from 'antd';

export class MyBreadcrumb extends React.Component{
    render(){
        return(
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
        );
    }
}