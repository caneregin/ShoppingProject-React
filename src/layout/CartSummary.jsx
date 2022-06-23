import React from 'react'
import { useSelector } from 'react-redux'
import { Dropdown, Label } from 'semantic-ui-react'
import axios from 'axios'
import { useState } from 'react'

export default function CartSummary() {
  let currentUser = localStorage.getItem("currentUser")
  const { cartItems } = useSelector(state => state.cart)
  const [data, setData] = useState({
    productName: ""
  })
  const NavLink = () => {
    axios({
      method: "PUT",
      url: "http://localhost:8080/api/users/updateCart?&userid=" + currentUser,
      data: cartArray
    })
  }
  //cartItems.map((cartItembir) => (cartArray.push(cartItembir.product.productName)))



  let cartArray = []
  cartItems.map((cartItembir) => (cartArray.push(cartItembir.product)))
  console.log("ahahahah"+JSON.stringify(cartArray))
  //cartArray.push({cartItems.cartItem.product.productName})

  // setData(newData)
  //console.log("newdatanin" + newData.productName)
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
          <Dropdown.Item onClick={NavLink}>Sepete Git</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {/* <form onSubmit={(e) => NavLink(e)}>
        <input onChange={(e) => handle(e)} id="name" value={data.name} placeholder="name" type="text"></input>
        <input onChange={(e) => handle(e)} id="date" value={data.date} placeholder="date" type="date"></input>
        <input onChange={(e) => handle(e)} id="iduser" value={data.iduser} placeholder="iduser" type="number"></input>
        <button color="green" type='submit'>Ekle</button>
      </form> */}

      {/* <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values)
          axios({
            method: "put",
            url: "http://localhost:8080/api/users/updateCart?currentCart="+cartArray+"&userid="+currentUser,
          })
        }}
      >
        <Form className='ui form'>
          <KodlamaIoTextInput name="currentCart" placeholder="currentCart" />
          <KodlamaIoTextInput name="userid" placeholder="userid" />
          <Button color="green" type='submit'>Ekle</Button>
        </Form>
      </Formik> */}
    </div>
  )
}
