import React from 'react'
import { Switch, Route,Router } from 'react-router-dom';
import LoadableComponent from './LoadableComponent'
import PrivateRoute from './privateRoute'
import history from './history'

const ProductManagement = LoadableComponent(()=>import('../pages/product/product-management'))  //参数一定要是函数，否则不会懒加载，只会代码拆分


const ContentMain = () => {
  return (
      <div style={{padding: 16, position: 'relative'}}>
        <Switch history = {history}>
            <Router>
            {/* <PrivateRoute exact path='/product-management' component={ProductManagement}/> */}
              <Route path='/product-management' component={ProductManagement}/>
            </Router>
        </Switch>
      </div>
)}

export default ContentMain