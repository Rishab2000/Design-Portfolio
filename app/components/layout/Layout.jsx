"use client"

import React from "react"
import Header from '../../components/header';
import Footer from '../../components/footer';

const Layout = (props) => {
    return (
        <div
            className=" w-10/12 max-w-7xl mx-auto bg-background-color"
        >
            <Header selectedPage={props.selectedPage} />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout;

