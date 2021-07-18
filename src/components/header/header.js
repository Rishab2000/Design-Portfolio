import React, { useState } from 'react';
import MobileNav from './mobileNav';

import './header.css'

const Header = () => {
    const [hidden, visible] = useState(false);


    const clickHandler = () => {
        if (hidden === false) {
            visible(true)
        } else if (hidden === true) {
            visible(false)
        }
        console.log(hidden)
    }

    const hamburgerState = hidden ? 'open' : ' ';
    return (
        <div>
            <MobileNav status={hidden} />
            <header className="container flex items-center w-4/5 m-auto">
                <h1 className="font-avenir-black text-xl ">Rishab</h1>
                <div onClick={clickHandler} className={hamburgerState + " nav-icon3 ml-auto"}>
                    <span className="nav-icon3-bar"></span>
                    <span className="nav-icon3-bar"></span>
                    <span className="nav-icon3-bar"></span>
                    <span className="nav-icon3-bar"></span>
                </div>
      
            </header>

        </div>
    );
}

export default Header