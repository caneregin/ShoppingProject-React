import { Form, Formik, Field } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button, Header, Icon } from 'semantic-ui-react'
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput'
import axios from 'axios'

const initialValues = { productName: "", productDetail: "", unitPrice: 10, unitsInStock: 100, picked: '' }

const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunlu"),
    productDetail: Yup.string().required("Ürün adı zorunlu"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
    unitsInStock: Yup.number().required("Ürün fiyatı zorunlu"),
    //category: Yup.number().required("Ürün adı zorunlu")
})
export default function UserInfo() {
    return (
        <div>
            <Header as="h1">Üyelik Bilgilerim</Header>
            <p>Üyelik bilgilerinizi görüntülemek ve güncellemek için aşağıdaki formu kullanabilirsiniz.
                <span style={{ color: "red" }}>(* ile işaretlenmiş alanların doldurulması zorunludur.)</span>
            </p>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                    // axios({
                    //     method: "post",
                    //     url: "http://localhost:8080/api/products/add",
                    //     data: values
                    // })
                }}
            >
                <Form className='ui form'>
                    <KodlamaIoTextInput name="firstName" placeholder="İsim" />
                    <KodlamaIoTextInput name="lastName" placeholder="Soyisim" />
                    <KodlamaIoTextInput name="email" placeholder="Email" />
                    <KodlamaIoTextInput name="phoneNumber" placeholder="Telefon" />
                    <div role="group" aria-labelledby="my-radio-group">
                        <label>
                        <Icon name='venus' />Kadın<Field type="radio" name="gender" value="Kadın" />
                            
                        </label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label>
                        <Icon name='mars' />Erkek<Field type="radio" name="gender" value="Erkek" />
                            
                        </label>
                    </div>
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
                    <Button color="green" type='submit'>BİLGİLERİMİ KAYDET</Button>
                </Form>
            </Formik>
            
        </div>

    )
}
