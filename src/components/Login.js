
import React, { useState } from 'react';


import { Form, Button } from 'semantic-ui-react'
import { API } from '../services/Api';

const Login = props => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        const user = {
            email,
            password
        }
        API.auth.login(user).then(data => props.login(data))
    }

    return (
        <div>
            <div>
                <Form onSubmit={ e => handleSubmit(e) }>
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
                            icon="lock"
                            iconPosition="left"
                            onChange={ e => setPassword(e.target.value) }
                        />
                    </div>
                    <div>
                        <Button className="submitbtn" primary>Login</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Login;