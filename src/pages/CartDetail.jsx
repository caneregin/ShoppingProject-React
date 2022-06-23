import React, { useState, useEffect } from 'react'
import UserService from '../services/userService';
import { Link } from 'react-router-dom';
import { Icon, Menu, Table } from 'semantic-ui-react'

export default function CartDetail() {
    let currentUser = localStorage.getItem("currentUser")

    const [users, setUsers] = useState([]);

    useEffect(() => {
        let userService = new UserService()
        userService.getByUserIdCurrentCart(currentUser).then(result => setUsers(result.data))
    }, [])
    //const cartArray = users
    //users.map((cartItembir) => (cartArray.push(cartItembir)))
    //cartArr.push(users)
    //let arr = cartArray.split(',');
    //console.log("Cararayinilkindeksi" + arr)
    //const string = users.currentCart;
    //console.log(abu+"AAAAAAAAAAAAA")

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
                        <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
                        <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
                        <Table.HeaderCell>Açıklama</Table.HeaderCell>
                        <Table.HeaderCell>Kategori</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {users.map((usr) => (
                            <Table.Row key={usr}>
                                <Table.Cell><Link to={`/products/${usr.productName}`}>{usr.productName}</Link></Table.Cell>
                                <Table.Cell>{usr.productName}</Table.Cell>
                                <Table.Cell>{usr.productName}</Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                {/* <Table.Cell><Button onClick={() => handleAddToCart(users)}>Sepete Ekle</Button></Table.Cell> */}
                            </Table.Row>
                        ))
                    }

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
