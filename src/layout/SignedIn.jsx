import React, { useState, useEffect } from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'
import { useHistory } from "react-router-dom"
import UserService from '../services/userService'
import { useDispatch } from 'react-redux';
import { changeToCategoryToggle } from '../store/actions/changeCategoryToggleActions';

export default function SignedIn(props) {
    const [user, setUser] = useState([]);

    const dispatch = useDispatch()

    useEffect(()=>{
      let userService = new UserService()
      userService.getByUserId(localStorage.getItem("currentUser")).then(result=>setUser(result.data))
    },[])

    let history = useHistory();

    const handleChangetoToggle = (changestatetoggle) => {
        dispatch(changeToCategoryToggle(changestatetoggle));
        history.push("/user")
        // cartArray.push(product.productId);
        //toast.success(`${product.productName} sepete eklendi!`);
        //console.log("ahandaburdaarray"+cartArray);
      }

    const logOut = () => {
      localStorage.removeItem("tokenKey")
      localStorage.removeItem("currentUser")
      localStorage.removeItem("userName")
      history.go("/")
    }
    return (
        <div>
            <Menu.Item>
             <Image avatar spaced="right" src="https://i0.wp.com/shiftdelete.net/wp-content/uploads/2022/03/recep-ivedik-7-ilk-video.jpg?fit=1280%2C720&ssl=1" />
                <Dropdown pointing="top left" text={user.userName}>
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" onClick={() => handleChangetoToggle("True")} icon="info" />
                        <Dropdown.Item onClick={logOut} text="Çıkış yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
