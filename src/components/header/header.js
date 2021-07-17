import React, { useState } from 'react';
import MobileNav from './mobileNav';

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

    const buttonStack = hidden ? 'z-20' : 'z-50';
    return (
        <div>
            <MobileNav status={hidden} />
            <header className="container flex items-center w-4/5 m-auto">
                <h1 className="font-avenir-black text-base ">Rishab S</h1>
                <button onClick={clickHandler} className={buttonStack + " ml-auto"}>test</button>
            </header>

        </div>
    );
}

export default Header