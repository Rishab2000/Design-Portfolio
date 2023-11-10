import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray20 text-text-secondary">
      <div className=" flex flex-col-reverse gap-8 md:flex-row justify-between w-full mx-auto py-8 w-10/12 max-w-7xl mx-auto bg-background-color">
        <div className="flex flex-col md:justify-between lg:justify-start">
          <p className="label">
            Thanks for stopping by!
          </p>
          <p className="label pb-1">Designed + Developed  by Rishab Sachidanand © 2022</p>

        </div>
        <div className="flex flex-col lg:w-520">
          <p className="label">
            Let's create engaging experiences together 😁
          </p>
          <a className="label hover:underline" href="mailto: rishabsachidanand@gmail.com" target="_blank" rel="noreferrer">rishabsachidanand@gmail.com</a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
