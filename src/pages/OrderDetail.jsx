import React, { useState, useEffect } from 'react'
import UserService from '../services/userService';
import { Link, useHistory } from 'react-router-dom';
import { Button, Menu, Table, Header } from 'semantic-ui-react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { resetCart } from '../store/actions/cartActions';

export default function OrderDetail() {
    let currentUser = localStorage.getItem("currentUser")
    const dispatch = useDispatch()
    const [users, setUsers] = useState([]);
    let history = useHistory()
    useEffect(() => {
        let userService = new UserService()
        userService.findByOrderid(currentUser).then(result => setUsers(result.data.data))
    }, [])
    return (
        <div>
            <Header as="h1">Siparişlerim</Header>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Sipariş No</Table.HeaderCell>
                        <Table.HeaderCell>Sipariş Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Sipariş Durumu</Table.HeaderCell>
                        <Table.HeaderCell>Detay</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {users.map((usr) => (
                        <Table.Row key={usr.orderid}>
                            <Table.Cell>{usr.orderid}</Table.Cell>
                            <Table.Cell>{usr.orderDate}</Table.Cell>
                            <Table.Cell>{usr.orderState}</Table.Cell>
                            <Table.Cell>{usr.orderContent}</Table.Cell>
                            {/* <Table.Cell><Button onClick={() => handleAddToCart(users)}>Sepete Ekle</Button></Table.Cell> */}
                        </Table.Row>
                    ))
                    }
                </Table.Body>
            </Table>
            <p>Kişisel verileriniz sipariş takip süreci kapsamında tarafımızca işlenecektir.</p>
            <p>Kişisel verilerin korunmasına ilişkin aydınlatma metnimize “Sipariş Sorgulama Aydınlatma Metni” üzerinden erişebilirsiniz.</p>
            <p><b>Ürününüzü Teslim Alırken</b></p>
            <p>Kargo tutanağını imzalamadan önce ürününüzün kutusunda herhangi bir hasar yada sorun olup olmadığını kontrol ediniz. Herhangi bir nedenle hasar veya eksiklik, kolinin bandında açılma var ise teslimatla ilgili hiç bir belgeyi imzalamadan kargo görevlisine tutanak tutulması talebiyle birlikte kutunuzu iade ediniz. Bu yükümlülüğünüzü yerine getirdiğiniz takdirde, yeni ürünleriniz derhal tarafınıza gönderilecektir. Kutusu hasarlı olan, içeriği eksik olduğu iddia edilen ürünlerin teslim alınması durumunda içindeki ürünlerin hasarından veya eksikliğinden sorumluluğumuz bulunmamaktadır. Bu durumu en kısa zamanda info@vatanbilgisayar.com adresimize yazılı olarak ya da 0850 222 56 56 numaralı telefonumuza sözlü olarak, sözleşme numarası ile birlikte bildiriniz.</p>
            <p><b>Müşteri Hizmetlerimiz</b></p>
            <p>Siparişlerinizle ilgili tüm sorularınız ve ürünlerle ilgili bilgi almak için Türkiye'nin her yerinden 0850 222 56 56 numaralı telefonumuzdan bize ulaşabilir veya iletişim formumuzu doldurarak destek talebinde bulunabilirsiniz.</p>            </div>
    )
}
