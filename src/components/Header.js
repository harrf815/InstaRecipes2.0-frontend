
import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
    const loggedIn = !!props.currentUser._id
    const currentUser = props.currentUser
    console.log(props.currentUser)

    return (

        <>
            { loggedIn ? (
                <div className=" ui secondary menu">
                    <Link to="/" className="title item">Home</Link>
                    <Link to="/recipe" className="title item">Create Recipe</Link>
                    <div className="right menu">
                        <Link to="/profile" className="title item"></Link>
                        <Link to="/" className="title item" onClick={props.logout}>Logout</Link>
                    </div>
                </div>
            ) : (
                <div className="ui secondary menu">
                    <Link to="/" className="title item">Home</Link>
                    <div className="right menu">
                        <Link to="/signup" className="title item">Create Account</Link>
                        <Link to="/login" className="title item">Login</Link>
                    </div>
                </div>
            )}
        </>
    )
}

export default Header; 