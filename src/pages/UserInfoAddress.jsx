import { Form, Formik, Field } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button, Header, Icon } from 'semantic-ui-react'
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput'
import axios from 'axios'

let currentUser = localStorage.getItem("currentUser")
const initialValues = { address: "" }

const schema = Yup.object({
    address: Yup.string().required("Ürün adı zorunlu"),
})

// const NavLink = () => {
//     axios({
//         method: "PUT",
//         url: "http://localhost:8080/api/users/updateUser?userid=3&firstName=" + firstName + "&lastName=" + lastName + "&email=" + email + "&phoneNumber=" + phoneNumber + "&gender=" + gender,
//     })
// }
export default function UserInfoAddress() {
    return (
        <div>
            <Header as="h1">Adres Bilgilerim</Header>
            <p>Adreslerinizi görüntüleyebilir, değişiklik yapabilir ve yeni adres ekleyebilirsiniz.</p>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                    axios({
                        method: "put",
                        url: "http://localhost:8080/api/users/updateAddress?userid="+currentUser,
                        data: values
                    })
                }}
            >
                <Form className='ui form'>
                    <KodlamaIoTextInput name="address" placeholder="İsim" />
                    <Button color="green" type='submit'>BİLGİLERİMİ KAYDET</Button>
                </Form>
            </Formik>

        </div>

    )
}
