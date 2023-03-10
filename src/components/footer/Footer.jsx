import React from "react";
import "./footer.css";
import Socials from "../socials/Socials";

const Footer = () => {
  return (
    <footer>
      <a href="#header" className="footer__logo">
        Web Reaper
      </a>

      <ul className="permalinks">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <Socials />
      </div>

      <div className="footer__copyright">
        <small>&copy; {new Date().getFullYear()} Web Reaper</small>
      </div>
    </footer>
  );
};

export default Footer;
