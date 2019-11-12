import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import { Route,Link } from 'dva/router';
import UserAdd from './UserAdd';
import UserList from './UserList'
const { Sider, Content } = Layout
export default class User extends Component {
    render() {
        return (
            <Layout>
                <Sider>
                    <Menu selectedKeys={[this.props.location.pathname]}>
                        <Menu.Item key="/user/list"><Link to='/user/list'>用户列表 </Link></Menu.Item>
                        <Menu.Item key="/user/add"><Link to='/user/add'>新增用户 </Link></Menu.Item>
        
                    </Menu>
                </Sider>
                <Content>
                <Route path="/user/list" component={UserList} />
                    <Route path="/user/add" component={UserAdd} />
                </Content>
            </Layout>
        )
    }
}
