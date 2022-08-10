import React, { useState, useEffect } from 'react'
import UserService from '../services/userService';
import { Link, useHistory } from 'react-router-dom';
import { Button, Menu, Table } from 'semantic-ui-react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { resetCart } from '../store/actions/cartActions';

export default function CartDetail() {
    let currentUser = localStorage.getItem("currentUser")
    const dispatch = useDispatch()
    const [users, setUsers] = useState([]);
    let history = useHistory()
    useEffect(() => {
        let userService = new UserService()
        userService.getByUserIdCurrentCart(currentUser).then(result => setUsers(result.data))
    }, [])
    let cartArray = []
    users.map((cartItembir) => (cartArray.push(cartItembir.productName)))
    console.log("ahahahahEEESSEEEEEE" + JSON.stringify(cartArray))
    const emptyData = ""
    const NavLink = () => {
        axios({
            method: "post",
            url: "http://localhost:8080/api/orders/add",
            data: {
                orderContent: JSON.stringify(cartArray),
                orderDate: "04.07.2022",
                orderState: "Sipariş Tamamlandı",
                user: {
                    userid: currentUser
                }
            }
        })
        
        NavLinkResetState()
        dispatch(resetCart())
        history.push("/")
    }
    const NavLinkResetState = () => {
        axios({
          method: "PUT",
          url: "http://localhost:8080/api/users/updateCart?&userid=" + currentUser,
          data: emptyData
        })
      }
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
                        <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
                        <Table.HeaderCell>Kategori</Table.HeaderCell>
                        <Table.HeaderCell>Adet</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {users?.map((usr) => (
                        <Table.Row key={usr}>
                            <Table.Cell><Link to={`/products/${usr.productName}`}>{usr.productName}</Link></Table.Cell>
                            <Table.Cell>{usr.unitPrice}</Table.Cell>
                            <Table.Cell>{usr.category.categoryName}</Table.Cell>
                            <Table.Cell>1</Table.Cell>
                            {/* <Table.Cell><Button onClick={() => handleAddToCart(users)}>Sepete Ekle</Button></Table.Cell> */}
                        </Table.Row>
                    ))
                    }
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='left-right' pagination>
                                <Button onClick={NavLink}>Sipariş Ver</Button>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
