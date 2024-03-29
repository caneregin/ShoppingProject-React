import React, { useState, useEffect } from 'react'
import { Dropdown, Menu, Image, Icon } from 'semantic-ui-react'
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
             <Icon name='user' />
                <Dropdown pointing="top left" text={user.firstName}>
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" onClick={() => handleChangetoToggle("True")} icon="info" />
                        <Dropdown.Item onClick={logOut} text="Çıkış yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
