import React from 'react';
import {Link}  from 'react-router-dom'



const MobileNav = (props) => {
    const navClass = props.status ? 'opacity-1' : 'opacity-0';
    return (

        <nav className={navClass + " transtion-opacity duration-300 ease-in flex flex-col gap-6 items-center absolute w-full h-full text-center pt-96 text-xl font-avenir-bold bg-background-color"}>
            <Link to='/' className="w-max hover:underline hover:text-link-hover-color">Work</Link>
            <Link to='/' className="w-max hover:underline hover:text-link-hover-color">Blog</Link>
            <Link to='/' className="w-max hover:underline hover:text-link-hover-color">About me</Link>
        </nav>
    );

}

// 
export default MobileNav;