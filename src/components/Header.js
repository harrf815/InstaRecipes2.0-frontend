
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <>
            <div className=" ui secondary menu">
                <Link to="/signup" className="title item">Create Account</Link>
            </div>
        </>
    )
}

export default Header; 