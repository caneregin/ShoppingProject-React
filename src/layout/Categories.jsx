import React from 'react'
import { Menu } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux';
import { changeToCategory } from '../store/actions/categoryChangerActions';
import { useHistory } from 'react-router-dom';
import "../App.css"

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
            <Menu.Item className="categoriesMenuMenuItem11" onClick={()=>handleChangeToUyeInfo()}
                    name='Üyelik Bilgilerim' />
                <Menu.Item className="categoriesMenuMenuItem12" onClick={()=>handleChangeToUyeAddress()}
                    name='Adres Bilgilerim'>
                    </Menu.Item>
                <Menu.Item className="categoriesMenuMenuItem13" onClick={()=>handleChangeToUyeOrders()}
                    name='Siparişlerim' />
                <Menu.Item className="categoriesMenuMenuItem14" onClick={()=>handleChangeToUyeFav()}
                    name='Favorilerim' />
                <Menu.Item className="categoriesMenuMenuItem15" onClick={()=>handleChangeToUyeMessages()}
                    name='Mesajlarım' />
                <Menu.Item className="categoriesMenuMenuItem16" onClick={()=>handleChangeToUyePw()}
                    name='Şifre Değiştirme' />
                <Menu.Item className="categoriesMenuMenuItem17" onClick={()=>handleChangeToUyeLogOut()}
                    name='Çıkış' />
            </Menu>
            
            :
            
            <Menu>
            {/* <Menu.Item onClick={()=>handleChangeToCategory("TumUrunler")}
                    name='Tüm Ürünler' /> */}
                <Menu.Item className="categoriesMenuMenuItem1" onClick={()=>handleChangeToCategory("Telefon")}
                    name='Telefon'>
                        {/* <img src={require('../images/reactimg.png')}
                         /> */}
                    </Menu.Item>
                <Menu.Item className="categoriesMenuMenuItem2" onClick={()=>handleChangeToCategory("Bilgisayar")}
                    name='Bilgisayar' />
                <Menu.Item className="categoriesMenuMenuItem3" onClick={()=>handleChangeToCategory("Tv Ev Elektroniği")}
                    name='Tv Ev Elektroniği' />
                <Menu.Item className="categoriesMenuMenuItem4" onClick={()=>handleChangeToCategory("Bilgisayar Parçaları")}
                    name='Bilgisayar Parçaları' />
                <Menu.Item className="categoriesMenuMenuItem5" onClick={()=>handleChangeToCategory("Foto, Kamera")}
                    name='Foto, Kamera' />
                <Menu.Item className="categoriesMenuMenuItem6" onClick={()=>handleChangeToCategory("Ofis Kırtasiye")}
                    name='Ofis Kırtasiye' />
                <Menu.Item className="categoriesMenuMenuItem7" onClick={()=>handleChangeToCategory("Aksesuar")}
                    name='Aksesuar' />
                <Menu.Item className="categoriesMenuMenuItem8" onClick={()=>handleChangeToCategory("Oyun Hobi")}
                    name='Oyun Hobi' />
                <Menu.Item className="categoriesMenuMenuItem9" onClick={()=>handleChangeToCategory("Ev, Mutfak")}
                    name='Ev, Mutfak' />
                <Menu.Item className="categoriesMenuMenuItem10" onClick={()=>handleChangeToCategory("Kişisel Bakım")}
                    name='Kişisel Bakım' />
            </Menu>
            
            }
            
        </div>
    )
}
