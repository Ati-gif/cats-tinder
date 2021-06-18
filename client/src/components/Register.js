import React, {useContext, useState} from 'react'
import { Form } from 'semantic-ui-react'
import { useFormInput } from '../customHooks/useFormInput'
import {AuthContext} from '../providers/AuthProvider'
import {useHistory} from 'react-router-dom'

const Register = (props) => {
    const history = useHistory()
    const {handleRegister} = useContext(AuthContext)
    const  email = useFormInput('test@test.com', 'Email')
    const  userName = useFormInput('Tacos34', 'Username')
    const  name = useFormInput('Jim Franks', 'Name')
    const  password = useFormInput('123456', 'Password')
    const  passwordConfirmation = useFormInput('123456', 'Password Confirmation')

    const handleSubmit = (e) =>{
        e.preventDefault()
        // front end validation
        if(password.value !== passwordConfirmation.value  || password.value.length < 6){
            alert('passwords do not match or too short')
        } else{
          handleRegister({
              email: email.value, 
              password:password.value,
              user_name:userName.value,
              name: name.value
            }, history)
        }
    }
    return (
        <>
          <h1>Register form</h1>
          <Form onSubmit={handleSubmit}>
              <Form.Input {...email} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"  />
              <Form.Input {...userName} />
              <Form.Input {...name} />
              <Form.Input {...password} />
              <Form.Input {...passwordConfirmation}/>
              <Form.Button type='submit'>add</Form.Button>
          </Form>
        </>
    )
}

export default Register