import React from 'react';
import {Link}  from 'react-router-dom'



const MobileNav = (props) => {
    const navClass = props.status ? 'opacity-1 z-30 ' : 'opacity-0 -z-10';
    return (

        <nav className={navClass + " transtion-opacity duration-300 ease-in flex flex-col gap-8 items-center absolute mx-auto right-0 left-0 w-4/12 text-center pt-96 text-2xl font-avenir-bold"}>
            <Link to='/' className="w-max hover:underline hover:text-link-hover-color">Work</Link>
            <Link to='/Blog' className="w-max hover:underline hover:text-link-hover-color">Blog</Link>
            <Link to='/AboutMe' className="w-max hover:underline hover:text-link-hover-color">About me</Link>
        </nav>
    );

}

// 
export default MobileNav;