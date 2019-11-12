import React from 'react';
import {Layout,Menu,Icon} from 'antd'
import {Link} from 'dva/router'
import styles from './index.less' // styleComponent
const {Content,Header,Footer } = Layout
let logo = require("../../assets/yay.jpg")
const NavHeader = (props) => {
  return (
    <Header className={styles.header}>
      <img  src={logo}/>
      <Menu mode="horizontal" className={styles.menu} selectedKeys={[props.location.pathname]}> 
          <Menu.Item key="/home"><Link to ='/home'>首页 </Link></Menu.Item>
          <Menu.Item key ="/user"><Link to ='/user'>用户管理 </Link></Menu.Item>
          <Menu.Item key="/profile"><Link to ='/profile'>个人中心 </Link></Menu.Item>
          <Menu.Item key="/signup"><Link to ='/signup'>注册 </Link></Menu.Item>
          <Menu.Item key="/signin"><Link to ='/signin'>登录 </Link></Menu.Item>
      </Menu>
    </Header>
  );
};

NavHeader.propTypes = {
};

export default NavHeader;
