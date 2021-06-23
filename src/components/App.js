
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { API } from '../services/Api';
import Header from './Header'
import Signup from './Signup'

const App = () => {

    const [currentUser, setCurrentUser] = useState( {} )

    //! Get Current User
    useEffect (() => {
        const token = localStorage.token

        if (token) {
            API.auth.getCurrentUser().then(data => setCurrentUser(data))
        }
        
    }, [] )

    //! Signup
    const createAccount = data => {
        const userState = setCurrentUser(data)
        localStorage.setItem('token', data.token)
        console.log(userState)
    }

    //! Login
    const login = data => {
        console.log(data)
    }

    //! Logout 
    const logout = () => {
        localStorage.clear()
        setCurrentUser({})
    }


    //! Components
    const handleSignup = () => <Signup createAccount={createAccount} />

    

        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <div className="main ui container">
                            <Route path="/signup" exact component={handleSignup}/>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        )
    
}

export default App; 