import { Form, Formik, Field } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button, Icon } from 'semantic-ui-react'
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export default function Auth() {
  const initialValues = { userName: "", password: "" }
  const schema = Yup.object({
    userName: Yup.string().required("Kullanici adi zorunlu"),
    password: Yup.string().required("sifre zorunlu"),
    firstName: Yup.string().required("İsim zorunlu"),
    lastName: Yup.string().required("Soyisim zorunlu"),
    email: Yup.string().required("Email zorunlu"),
    address: Yup.string().required("Adres zorunlu"),
    phoneNumber: Yup.string().required("Telefon zorunlu")
  })
  const history = useHistory()

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values)
          axios({
            method: "post",
            url: "http://localhost:8080/auth/register",
            data: values
          })
          history.go("/")
        }}
      >
        <Form className='ui form'>
          <KodlamaIoTextInput name="userName" placeholder="kullanici adi" />
          <KodlamaIoTextInput name="password" placeholder="Sifre" />
          <KodlamaIoTextInput name="firstName" placeholder="İsim" />
          <KodlamaIoTextInput name="lastName" placeholder="Soyisim" />
          <KodlamaIoTextInput name="email" placeholder="Email" />
          <KodlamaIoTextInput name="address" placeholder="Adres" />
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
          <Button color="green" type='submit'>Kayıt Ol</Button>
        </Form>
      </Formik>
    </div>
  )
}