import React from 'react'
import { Menu } from 'semantic-ui-react'
import { useDispatch } from 'react-redux';
import { changeToCategory } from '../store/actions/categoryChangerActions';

export default function Categories() {
    const dispatch = useDispatch()

    const handleChangeToCategory = (changestate) => {
        dispatch(changeToCategory(changestate));
        // cartArray.push(product.productId);
        //toast.success(`${product.productName} sepete eklendi!`);
        //console.log("ahandaburdaarray"+cartArray);
      }
    return (
        <div>
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
        </div>
    )
}
