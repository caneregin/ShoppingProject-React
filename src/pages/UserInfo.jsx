import { Form, Formik, Field } from 'formik'
import React, { useState, useEffect } from 'react'
import * as Yup from "yup"
import { Button, Header, Icon } from 'semantic-ui-react'
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput'
import axios from 'axios'
import UserService from '../services/userService'


let currentUser = localStorage.getItem("currentUser")
const initialValues = { firstName: "", lastName: "", email: "", phoneNumber: "", gender: "" }

const schema = Yup.object({
    firstName: Yup.string().required("İsim zorunlu"),
    lastName: Yup.string().required("Soyisim zorunlu"),
    email: Yup.string().required("Email zorunlu"),
    phoneNumber: Yup.number().required("Telefon numarası zorunlu"),
    gender: Yup.string().required("Cinsiyet zorunlu")
})

export default function UserInfo() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        let userService = new UserService()
        userService.getByUserId(localStorage.getItem("currentUser")).then(result => setUser(result.data))
    }, [])
    return (
        <div>
            <Header as="h1">Üyelik Bilgilerim</Header>
            <p>Üyelik bilgilerinizi görüntülemek ve güncellemek için aşağıdaki formu kullanabilirsiniz.<span style={{ color: "red" }}>(* ile işaretlenmiş alanların doldurulması zorunludur.)</span></p>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                    axios({
                        method: "put",
                        url: "http://localhost:8080/api/users/updateUser?userid=" + currentUser + "&firstName="
                            + values.firstName + "&lastName=" + values.lastName + "&email=" + values.email +
                            "&phoneNumber=" + values.phoneNumber + "&gender=" + values.gender
                    })
                }}
            >
                <Form className='ui form'>
                    <KodlamaIoTextInput name="firstName" placeholder={user.firstName} />
                    <KodlamaIoTextInput name="lastName" placeholder={user.lastName} />
                    <KodlamaIoTextInput name="email" placeholder={user.email} />
                    <KodlamaIoTextInput name="phoneNumber" placeholder={user.phoneNumber} />
                    <div role="group" aria-labelledby="my-radio-group">
                        <label><Icon name='venus' />Kadın<Field type="radio" name="gender" value="Kadın" /></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label><Icon name='mars' />Erkek<Field type="radio" name="gender" value="Erkek" /></label>
                    </div>
                    <Button color="green" type='submit'>BİLGİLERİMİ KAYDET</Button>
                    {/* <Field component="select" name="category.categoryName" placeholder="select options">
                    <option value="Telefon">Telefon</option>
                    <option value="Bilgisayar">Bilgisayar</option>
                    <option value="Tv Ev Elektroniği">Tv Ev Elektroniği</option>
                    <option value="Bilgisayar Parçaları">Bilgisayar Parçaları</option>
                    <option value="Foto Kamera">Foto Kamera</option>
                    <option value="Ofis Kırtasiye">Ofis Kırtasiye</option>
                    <option value="Aksesuar">Aksesuar</option>
                    <option value="Oyun Hobi">Oyun Hobi</option>
                    <option value="Ev Mutfak">Ev Mutfak</option>
                    <option value="Kişisel Bakım">Kişisel Bakım</option>
                    </Field> */}

                </Form>
            </Formik>

        </div>

    )
}
