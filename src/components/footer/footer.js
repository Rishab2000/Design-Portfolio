import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mx-auto pt-8 border-t border-gray20">
    
     
      <p className="font-avenir-medium mb-2 text-title-colour">
        Don't be shy - drop me a line I'm looking forward to speaking to you!
      </p>
     <a className="font-avenir-medium text-gray40 hover:underline" href="mailto: rishabsachidanand@gmail.com" target="_blank" rel="noreferrer">rishabsachidanand@gmail.com</a>
     <p className="text-avenir-book text-xs text-gray20 mt-8">© 2021, Rishab Sachidanand</p>
   
    </footer>
  );
};

export default Footer;
