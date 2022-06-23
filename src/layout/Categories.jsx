import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function Categories() {
    return (
        <div>
            <Menu pointing vertical>
                <Menu.Item
                    name='Telefon' />
                <Menu.Item
                    name='Bilgisayar' />
                <Menu.Item
                    name='Tv, Ev Elektroniği' />
                <Menu.Item
                    name='Bilgisayar Parçaları' />
                <Menu.Item
                    name='Foto, Kamera' />
                <Menu.Item
                    name='Ofis, Kırtasiye' />
                <Menu.Item
                    name='Aksesuar' />
                <Menu.Item
                    name='Oyun, Hobi' />
                <Menu.Item
                    name='Ev, Mutfak' />
                <Menu.Item
                    name='Kişisel Bakım' />
            </Menu>
        </div>
    )
}
