import React from "react";

const Footer = () => {
  return (
    <footer className=" flex flex-col-reverse gap-8 md:flex-row justify-between w-full mx-auto py-8 border-t border-gray20">

      <div  className="flex flex-col md:justify-between lg:justify-start">
        <p className="label text-title-colour">
          Thanks for stopping by!
        </p>
        <p className="label text-gray50 pb-1">Designed + Developed  by Rishab Sachidanand © 2022</p>

      </div>
      <div className="flex flex-col lg:w-520">
        <p className="label text-title-colour">
        Let's create engaging experiences together 😁
        </p>
        <a className="label text-gray40 hover:underline" href="mailto: rishabsachidanand@gmail.com" target="_blank" rel="noreferrer">rishabsachidanand@gmail.com</a>

      </div>
    </footer>
  );
};

export default Footer;
