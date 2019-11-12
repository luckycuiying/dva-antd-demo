import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import routesConfig from './routesConfig';
import {renderRoutes} from './utils/routes'
// 按需加载添加app 动态挂载
function RouterConfig({ history ,app}) {
  return (
    <Router history={history}>
      <Switch>
            {
                renderRoutes(routesConfig,app)
            }
        {/* <Route path="/" exct component={IndexPage} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
