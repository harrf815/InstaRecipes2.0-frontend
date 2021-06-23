
import React, { useEffect, useState } from 'react';
import { Route, withRouter } from 'react-router-dom';

import { API } from '../services/Api';
import Header from './Header'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'

const App = props => {

    const [currentUser, setCurrentUser] = useState( {} )

    //! Get Current User
    useEffect (() => {
        const token = localStorage.token

        if (token) {
            API.auth.getCurrentUser().then(data => {
                console.log(data)
                setCurrentUser(data)})
        }
    }, [] )

    //! Signup
    const createAccount = data => {
        localStorage.setItem('token', data.token)
        setCurrentUser(data)
        const token = localStorage.token
        if ( token && token !== "undefined") {
            props.history.push("/")
        }
       
    }

    //! Login
    const login = data => {
        localStorage.setItem('token', data.token)
        setCurrentUser(data)
        const token = localStorage.token
        if ( token && token !== "undefined") {
            props.history.push("/")
        }

    }

    //! Logout 
    const logout = () => {
        localStorage.clear()
        setCurrentUser({})
    }


    //! Components
    const handleHome = () => <Home />
    const handleSignup = () => <Signup createAccount={createAccount} />
    const handleLogin = () => <Login login={login} />

    

        return (
            <div>
                <>
                    <div>
                        <Header logout={logout} currentUser={currentUser}/>
                        <div className="main ui container">
                            <Route path="/" exact component={handleHome} />
                            <Route path="/signup" exact component={handleSignup} />
                            <Route path="/login" exact component={handleLogin} />
                        </div>
                    </div>
                </>
            </div>
        )
    
}

export default withRouter(App); 