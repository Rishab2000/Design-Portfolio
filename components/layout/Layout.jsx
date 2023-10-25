import React from "react"
import Header from '../../components/header';
import Footer from '../../components/footer';

const Layout = (props) => {
    const [hidden, visible] = React.useState(false);
    const clickHandler = () => {
        if (hidden === false) {
            visible(true);
        } else if (hidden === true) {
            visible(false);
        }
        console.log(hidden);
    };
    const scrolling = hidden ? "overflow-hidden" : " ";
    return (
        <div
            className={
                scrolling + " w-10/12 max-w-7xl h-screen mx-auto bg-background-color"
            }
        >
            <Header hidden={hidden} clickHandler={clickHandler} selectedPage={props.selectedPage} />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout;

