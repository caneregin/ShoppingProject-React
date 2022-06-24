import React from 'react'
import { useState } from 'react'
import { Menu } from 'semantic-ui-react'

export default function Categories() {
    const [changeCategory, setChangeCategory] = useState("Telefon")

    function Category1() {
        setChangeCategory("Telefon")
    }
    function Category2() {
        setChangeCategory("Bilgisayar")
    }
    function Category3() {
        setChangeCategory("Tv, Ev Elektroniği")
    }
    function Category4() {
        setChangeCategory("Bilgisayar Parçaları")
    }
    function Category5() {
        setChangeCategory("Foto, Kamera")
    }
    function Category6() {
        setChangeCategory("Ofis, Kırtasiye")
    }
    function Category7() {
        setChangeCategory("Aksesuar")
    }
    function Category8() {
        setChangeCategory("Oyun, Hobi")
    }
    function Category9() {
        setChangeCategory("Ev, Mutfak")
    }
    function Category10() {
        setChangeCategory("Kişisel Bakım")
    }
    return (
        <div>
            <Menu pointing vertical>
                <Menu.Item
                    name='Tüm Ürünler' />
                <Menu.Item onClick={Category1}
                    name='Telefon' />
                <Menu.Item onClick={Category2}
                    name='Bilgisayar' />
                <Menu.Item onClick={Category3}
                    name='Tv, Ev Elektroniği' />
                <Menu.Item onClick={Category4}
                    name='Bilgisayar Parçaları' />
                <Menu.Item onClick={Category5}
                    name='Foto, Kamera' />
                <Menu.Item onClick={Category6}
                    name='Ofis, Kırtasiye' />
                <Menu.Item onClick={Category7}
                    name='Aksesuar' />
                <Menu.Item onClick={Category8}
                    name='Oyun, Hobi' />
                <Menu.Item onClick={Category9}
                    name='Ev, Mutfak' />
                <Menu.Item onClick={Category10}
                    name='Kişisel Bakım' />
            </Menu>
        </div>
    )
}
