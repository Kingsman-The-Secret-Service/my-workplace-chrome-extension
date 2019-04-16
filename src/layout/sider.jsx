import React from 'react';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
  
export class MySider extends React.Component{

    state = {
        collapsed: true,
    };
    
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    render(){

        return(
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                >
  
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Icon type="safety-certificate" />
                        <span>My Workplace</span> 
                    </Menu.Item>
                    <Menu.Item key="8">
                        <Icon type="heart" />
                        <span>My Favorite</span>
                    </Menu.Item>
                </Menu>
          </Sider>
        );
    }
}