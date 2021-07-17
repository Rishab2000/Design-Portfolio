import React from 'react';



const MobileNav = (props) => {
    const navClass = props.status ? 'opacity-0' : 'opacity-1';
    return (

        <nav className={navClass + " transtion-opacity duration-300 ease-in flex flex-col gap-6 items-center absolute w-full h-full text-center pt-96 text-xl bg-background-color"}>
            <a href='/' className="w-max hover:underline hover:text-link-hover-color">Work</a>
            <a href='/' className="w-max hover:underline hover:text-link-hover-color">Blog</a>
            <a href='/' className="w-max hover:underline hover:text-link-hover-color">About me</a>
        </nav>
    );

}

// 
export default MobileNav;