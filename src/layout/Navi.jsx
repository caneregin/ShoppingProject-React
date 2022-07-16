import React, { useState, useEffect } from 'react'
import CartSummary from './CartSummary'
import { Container, Menu, Input } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { changeToCategoryToggle } from '../store/actions/changeCategoryToggleActions';
import "../App.css"
import ProductService from '../services/productService'

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
    const [products, setProducts] = useState([]);
    let changeArray = []
    useEffect(() => {
        let productService = new ProductService()
        productService.getProductWithCategoryDetails().then(result => setProducts(result.data.data))

    }, changeArray)
    const [text, setText] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const onChangeHandler = (text) => {
        let matches = []
        if (text.length > 0) {
            matches = products.filter(
                product => {
                    const regex = new RegExp(`${text}`, "gi")
                    return product.productName.match(regex)
                }
            )
        }
        console.log('matches', matches)
        setSuggestions(matches)
        setText(text)
    }
    return (
        <div>

            <Menu className='altindex'>
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
            <Menu className='altindex' style={{ marginTop: -10 }}>
                <Container><img onClick={goHome} src="logo.png" style={{ height: "3rem", width: "9.57rem" }} />
                    <Menu.Menu position='right'>
                        <div className='autocomplete'>
                        <Input icon='search' type="text" style={{ marginTop:2, width:500 }}
                                onChange={e => onChangeHandler(e.target.value)}
                                value={text} placeholder='Search...' />
                            
                            <div className='autocomplete-items'>
                                {suggestions && suggestions.map((suggestion, i) =>
                                    <div key={i} className='suggestion col-md-12 justify-content-md-center'>{suggestion.productName}</div>)}
                            </div> </div> </Menu.Menu>
                    <Menu.Menu position='right'>
                        {cartItems.length > 0 && <CartSummary />}
                        {localStorage.getItem("currentUser") != null ? <SignedIn /> : <SignedOut />}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
