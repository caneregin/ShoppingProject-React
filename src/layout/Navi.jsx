import React from 'react'
import CartSummary from './CartSummary'
import { Container, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { changeToCategoryToggle } from '../store/actions/changeCategoryToggleActions';
import "../App.css"

export default function Navi() {
    let history = useHistory();
    const dispatch = useDispatch()
    const { cartItems } = useSelector(state => state.cart)
    const goHome = () => {
        dispatch(changeToCategoryToggle("false"));
        history.push("/")
    }
    const handleChangeToWebeOzel = () => {
        history.push("/")
    }
    const handleChangeToYeni = () => {
        history.push("/")
    }
    const handleChangeToHazirSistem = () => {
        history.push("/")
    }
    const handleChangeToPCToplama = () => {
        history.push("/")
    }
    const handleChangeToOutlet = () => {
        history.push("/")
    }
    const handleChangeToSiparisTakibi = () => {
        history.push("/order")
    }
    const handleChangeToiade = () => {
        history.go("/")
    }
    const handleChangeToMagazalar = () => {
        history.push("/")
    }
    const handleChangeToBizeUlasin = () => {
        history.push("/")
    }
    return (
        <div>

            <Menu>
                <Container>
                    <Menu.Item style={{ marginLeft: 160 }} className="menutextaligncenter" onClick={() => handleChangeToWebeOzel()}
                        name="'Web'e Özel'" />
                    <Menu.Item className="menutextaligncenter" onClick={() => handleChangeToYeni()}
                        name='Yeni'>
                    </Menu.Item>
                    <Menu.Item className="menutextaligncenter" onClick={() => handleChangeToHazirSistem()}
                        name='Hazır Sistem' />
                    <Menu.Item className="menutextaligncenter" onClick={() => handleChangeToPCToplama()}
                        name='PC Toplama' />
                    <Menu.Item className="menutextaligncenter" onClick={() => handleChangeToOutlet()}
                        name='Outlet' />
                    <Menu.Item className="menutextaligncenter" onClick={() => handleChangeToSiparisTakibi()}
                        name='Sipariş Takibi' />
                    <Menu.Item className="menutextaligncenter" onClick={() => handleChangeToiade()}
                        name='İade' />
                    <Menu.Item className="menutextaligncenter" onClick={() => handleChangeToMagazalar()}
                        name='Mağazalar' />
                    <Menu.Item className="menutextaligncenter" onClick={() => handleChangeToBizeUlasin()}
                        name='Bize Ulaşın!' />
                </Container></Menu>
            <Menu style={{marginTop:-10}}>
                <Container><img onClick={goHome} src="logo.png" style={{ height: "3rem", width: "9.57rem" }} />
                    <Menu.Menu position='right'>
                        {cartItems.length > 0 && <CartSummary />}
                        {localStorage.getItem("currentUser") != null ? <SignedIn /> : <SignedOut />}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
