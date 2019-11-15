import React from 'react';
import { connect } from 'dva';
import {Layout} from 'antd'
import {Route,Switch,Redirect} from 'dva/router'
import NavHeader from '../components/NavHeader'
// import Home from './Home'
// import Profile from './Profile'
// import SignIn from './SignIn'
// import SignUp from './SignUp'
// import User from './User'
import {renderRoutes,renderRedirect} from '../utils/routes'
const { Header, Content, Footer} =Layout;
function IndexPage(props) {
  return (
    <Layout>
        <NavHeader {...props} />
        <Content>
        
            {/* <Route path="/home" component={Home} />
            <Route path="/user" component={User} />
            <Route path="/profile" component={Profile} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} /> */}
            <Switch>
            {
                renderRoutes(props.routes,props.app)}
            {
                renderRedirect(props.routes,'/', false)
            }
            {/* 写死了 <Redirect from ='/' to="/home" /> */}
            </Switch>
            
        </Content>
        <Footer style={{textAlign:"center"}}>@licuiying</Footer>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
