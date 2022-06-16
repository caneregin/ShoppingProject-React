import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Dropdown, Label } from 'semantic-ui-react'
import axios from 'axios'

export default function CartSummary() {
  let currentUser = localStorage.getItem("currentUser")
  const { cartItems } = useSelector(state => state.cart)
  let cartArray = []
  cartItems.map((cartItembir)=>(cartArray.push(cartItembir.product.productId)))
  // cartArray.push({cartItems.cartItem.product.productName})
  console.log(cartArray)
  return (
    <div>
      <Dropdown item text='Sepetiniz'>
        <Dropdown.Menu>
          {
            cartItems.map((cartItem) => (
              <Dropdown.Item key={cartItem.product.productName}>
                {cartItem.product.productName}
                <Label>
                  {cartItem.quantity}
                </Label>
              </Dropdown.Item>
            ))
          }
          <Dropdown.Divider />
          NavLink = {(values)=>{
      console.log(values)
      axios({
          method: "put",
          url: "http://localhost:8080/api/users/updateCart?=currentCart="+cartArray+"&"+currentUser,
          data: values 
        })
  }} 
          <Dropdown.Item onClick={()=>NavLink()}>Sepete Git</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
