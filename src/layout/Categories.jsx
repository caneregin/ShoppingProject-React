import React from 'react'
import { Menu } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux';
import { changeToCategory } from '../store/actions/categoryChangerActions';
import { useHistory } from 'react-router-dom';

export default function Categories() {
    const dispatch = useDispatch()
    let history = useHistory()
    const handleChangeToCategory = (changestate) => {
        history.push("/")
        dispatch(changeToCategory(changestate));
        // cartArray.push(product.productId);
        //toast.success(`${product.productName} sepete eklendi!`);
        //console.log("ahandaburdaarray"+cartArray);
      }
      let changestatetoggle = useSelector(state => state.changestatetoggle)
      console.log(changestatetoggle.payload+"EASICIKITIGER")
      const handleChangeToUyeInfo = () => {
        history.push("/user")
      }
      const handleChangeToUyeAddress = () => {
        history.push("/useraddress")
      }
      const handleChangeToUyeOrders = () => {
        history.push("/order")
      }
      const handleChangeToUyeFav = () => {
        history.push("/userfav")
      }
      const handleChangeToUyeMessages = () => {
        history.push("/usermessages")
      }
      const handleChangeToUyePw = () => {
        history.push("/")
      }
      const handleChangeToUyeLogOut = () => {
        localStorage.removeItem("tokenKey")
        localStorage.removeItem("currentUser")
        localStorage.removeItem("userName")
        history.go("/")
      }
    return (
        <div>
            {changestatetoggle.payload === "True" ? 
            <Menu pointing vertical>
            <Menu.Item onClick={()=>handleChangeToUyeInfo()}
                    name='Üyelik Bilgilerim' />
                <Menu.Item onClick={()=>handleChangeToUyeAddress()}
                    name='Adres Bilgilerim'>
                    </Menu.Item>
                <Menu.Item onClick={()=>handleChangeToUyeOrders()}
                    name='Siparişlerim' />
                <Menu.Item onClick={()=>handleChangeToUyeFav()}
                    name='Favorilerim' />
                <Menu.Item onClick={()=>handleChangeToUyeMessages()}
                    name='Mesajlarım' />
                <Menu.Item onClick={()=>handleChangeToUyePw()}
                    name='Şifre Değiştirme' />
                <Menu.Item onClick={()=>handleChangeToUyeLogOut()}
                    name='Çıkış' />
            </Menu>
            
            :
            
            <Menu pointing vertical>
            <Menu.Item onClick={()=>handleChangeToCategory("TumUrunler")}
                    name='Tüm Ürünler' />
                <Menu.Item onClick={()=>handleChangeToCategory("Telefon")}
                    name='Telefon'>
                        {/* <img src={require('../images/reactimg.png')}
                         /> */}
                    </Menu.Item>
                <Menu.Item onClick={()=>handleChangeToCategory("Bilgisayar")}
                    name='Bilgisayar' />
                <Menu.Item onClick={()=>handleChangeToCategory("Tv Ev Elektroniği")}
                    name='Tv Ev Elektroniği' />
                <Menu.Item onClick={()=>handleChangeToCategory("Bilgisayar Parçaları")}
                    name='Bilgisayar Parçaları' />
                <Menu.Item onClick={()=>handleChangeToCategory("Foto, Kamera")}
                    name='Foto, Kamera' />
                <Menu.Item onClick={()=>handleChangeToCategory("Ofis Kırtasiye")}
                    name='Ofis Kırtasiye' />
                <Menu.Item onClick={()=>handleChangeToCategory("Aksesuar")}
                    name='Aksesuar' />
                <Menu.Item onClick={()=>handleChangeToCategory("Oyun Hobi")}
                    name='Oyun Hobi' />
                <Menu.Item onClick={()=>handleChangeToCategory("Ev, Mutfak")}
                    name='Ev, Mutfak' />
                <Menu.Item onClick={()=>handleChangeToCategory("Kişisel Bakım")}
                    name='Kişisel Bakım' />
            </Menu>
            
            }
            
        </div>
    )
}
