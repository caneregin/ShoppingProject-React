import React from 'react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import { Grid } from 'semantic-ui-react'
import { Redirect, Route } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'
import { ToastContainer } from 'react-toastify'
import ProductAdd from '../pages/ProductAdd'
import AuthLog from '../pages/AuthLog'
import AuthReg from '../pages/AuthReg'

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position='bottom-right'/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
          <Route exact path="/" component={ProductList}></Route>
          <Route exact path="/products" component={ProductList}></Route>
          <Route path="/products/:name" component={ProductDetail}></Route>
          <Route path="/cart" component={CartDetail}></Route>
          <Route path="/product/add" component={ProductAdd}></Route>
          <Route exact path="/auth">
          {localStorage.getItem("currentUser") !=null ? <Redirect to="/" />:<AuthLog/>}
          </Route>
          <Route exact path="/authReg" component={AuthReg}></Route>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
