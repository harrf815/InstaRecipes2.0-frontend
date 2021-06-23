
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header'
import Signup from './Signup'

class App extends React.Component {

    state = {
        auth: {}
    }

    //! Signup
    createAccount = (data) => {
        console.log(data)
    }

    //! Components
    handleSignup = () => <Signup createAccount={this.createAccount} />

    render () {

        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <div className="main ui container">
                            <Route path="/signup" exact component={this.handleSignup}/>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App; 