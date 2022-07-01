import React from 'react'
import CartSummary from './CartSummary'
import { Container, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { changeToCategoryToggle } from '../store/actions/changeCategoryToggleActions';

export default function Navi() {
    let history = useHistory();
    const dispatch = useDispatch()
    const { cartItems } = useSelector(state => state.cart)   
    const goHome = () => {
    dispatch(changeToCategoryToggle("False"));
        history.push("/")
      }
    return (
        <div>
            <Menu inverted fixed='top'>
                <Container>
                    <Menu.Item onClick={goHome} name='home' />
                    <Menu.Item name='messages' />
                    <Menu.Menu position='right'>
                        {cartItems.length>0&&<CartSummary/>}
                        {localStorage.getItem("currentUser") != null ? <SignedIn/>:<SignedOut/>}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
