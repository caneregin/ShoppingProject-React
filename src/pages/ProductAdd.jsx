import { Form, Formik, Field } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button } from 'semantic-ui-react'
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput'
import axios from 'axios'

export default function ProductAdd() {
    const initialValues = { productName: "", productDetail: "", unitPrice: 10, unitsInStock: 100 }

    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        productDetail: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
        unitsInStock: Yup.number().required("Ürün fiyatı zorunlu"),
        //category: Yup.number().required("Ürün adı zorunlu")
    })

    return (
            <Formik 
            initialValues={initialValues} 
            validationSchema={schema}
            onSubmit = {(values)=>{
                console.log(values)
                axios({
                    method: "post",
                    url: "http://localhost:8080/api/products/add",
                    data: values 
                  })
            }}
            >
                 <Form className='ui form'>
                    <KodlamaIoTextInput name="productName" placeholder="Ürün adı"/>
                    <KodlamaIoTextInput name="productDetail" placeholder="Ürün detayı"/>
                    <KodlamaIoTextInput name="unitPrice" placeholder="Ürün fiyatı"/>
                    <KodlamaIoTextInput name="unitsInStock" placeholder="Ürün stok"/>
                    <Field component="select" name="category.categoryId" placeholder="select options">
                    <option value="1">Telefon</option>
                    <option value="2">Bilgisayar</option>
                    <option value="3">Tv Ev Elektroniği</option>
                    <option value="4">Bilgisayar Parçaları</option>
                    <option value="5">Foto Kamera</option>
                    <option value="6">Ofis Kırtasiye</option>
                    <option value="7">Aksesuar</option>
                    <option value="8">Oyun Hobi</option>
                    <option value="9">Ev Mutfak</option>
                    <option value="10">Kişisel Bakım</option>
                    </Field>
                    <Field component="select" name="category.categoryName" placeholder="select options">
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
                    </Field>
                    <Button color="green" type='submit'>Ekle</Button>
                </Form> 
            </Formik>
    )
}

/* ESKİ TİP FORM
 <Form className='ui form'>
                    <KodlamaIoTextInput name="productName" placeholder="Ürün adı"/>
                    <FormField>
                        <Field name="productName" placeholder="Ürün Adı"></Field>
                        <ErrorMessage name="productName" render={error=>
                            <Label pointing basic color="red" content={error}></Label>
                        }></ErrorMessage>
                    </FormField>
                    <FormField>
                        <Field name="unitPrice" placeholder="Ürün Fiyatı"></Field>
                        <ErrorMessage name="unitPrice" render={error=>
                            <Label pointing basic color="red" content={error}></Label>
                        }></ErrorMessage>
                    </FormField>
                    <Button color="green" type='submit'>Ekle</Button>
                </Form> */