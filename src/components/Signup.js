
import React, { useState } from 'react';

import { Form, Button } from 'semantic-ui-react'

import { API } from '../services/Api'

const Signup = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSumbit = e => {
        e.preventDefault()

        const user = {
            name,
            email,
            password
        }
        API.auth.signup(user).then(data => {
            props.createAccount(data)
        })
        

    }

    return (
        <div>
            <div>
                <Form onSubmit={ e => handleSumbit(e) }>
                    <div>
                        <Form.Input 
                            label="Name"
                            name="name"
                            type="text"
                            icon="user"
                            iconPosition="left"
                            onChange={ e => setName(e.target.value) }
                        />
                    </div>
                    <div>
                        <Form.Input 
                            label="Email"
                            name="email"
                            type="text"
                            icon="envelope"
                            iconPosition="left"
                            onChange={ e => setEmail(e.target.value) }
                        />
                    </div>
                    <div>
                        <Form.Input 
                            label="Password"
                            name="password"
                            type="password"
                            iconPosition="left"
                            icon="lock"
                            onChange={ e => setPassword(e.target.value) }
                        />
                    </div>
                    <div>
                        <Button id="submitbtn" primary>Create Account</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Signup; 