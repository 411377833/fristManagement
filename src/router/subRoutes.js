import React from 'react'
import { Switch, Route } from 'react-router-dom';
import LoadableComponent from './LoadableComponent'
import CategoryList from '../pages/product/category/list'
import AddCategory from '../pages/product/category/addCategory'
// import PrivateRoute from './privateRoute'

const ProductManagement = LoadableComponent(()=>import('../pages/product/product-management'))
const ErrorPage = LoadableComponent(()=>import('../pages/ErrorPage/index'))


const SubRoutes = () => {
  return (
      <div style={{width:'100%'}}>
        <Switch>
            <Route path='/category-list' component={CategoryList}/>
            <Route path='/product-management' component={ProductManagement}/>
            <Route path='/add-category/:id' component={AddCategory}/>
            <Route component={ErrorPage}/>
        </Switch>
      </div>
)}

export default SubRoutes