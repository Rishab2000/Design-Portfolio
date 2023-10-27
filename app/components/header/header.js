// import React from "react";
// import Link from "next/link";
// import MobileNav from "./mobileNav";


// const Header = ({ clickHandler, hidden, selectedPage }) => {
//   const hamburgerState = hidden ? "open" : " ";
//   const headerState = hidden ? "opacity-0" : " ";

//   const render = true;

//   return (
//     <div className="pt-16 w-full">
//       <MobileNav
//         clickHandler={clickHandler}
//         status={hidden}
//       />
//       <header className=" flex items-center">
//         <h1
//           className={
//             headerState +
//             " font-avenir-regular text-xl lg:text-2xl transtion-opacity duration-300 ease-in"
//           }
//         >

//         </h1>
//         <div
//           onClick={clickHandler}
//           className={hamburgerState + " nav-icon3 ml-auto md:hidden"}
//         >
//           <span className="nav-icon3-bar"></span>
//           <span className="nav-icon3-bar"></span>
//           <span className="nav-icon3-bar"></span>
//           <span className="nav-icon3-bar"></span>
//         </div>
//         <div className="hidden font-avenir-regular md:flex md:ml-auto md:gap-8 md:text-xl md:text-gray40">
//           <Link href='/' className={`${selectedPage === 'work' && 'text-red-500'}`}>
//             Work
//           </Link>
//           <a href="https://medium.com/@rishabs" rel="noreferrer" target="_blank" className="hover:text-link-hover-color">
//             Blog
//           </a>
//           <Link
//             href="/about"
//             className={`${selectedPage === 'about' && 'text-red-500'}`}
//           >

//             About me
//           </Link>
//         </div>
//       </header >
//       <div className={headerState + " transtion-opacity duration-300 ease-in"}>
//         <p className="font-avenir-medium pt-1 lg:pt-2 lg:text-2xl text-red">

//         </p>
//       </div>
//     </div >
//   );
// };

// export default Header;
// // Giving form to product visions."
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarItem, Link, Button } from "@nextui-org/react";
import "./header.css"


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Work",
    "Blog",
    "About",
  ];

  return (
    <Navbar classNames={{
      base: "justify-end mt-16",
      wrapper: "px-0"
    }} shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="end">
        <NavbarItem>
          <Link color="foreground" href="/">
            <p> Work </p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/ibm">
            <p>Blog</p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about">
            <p>About</p>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="pl-9 mt-16" >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} >
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
