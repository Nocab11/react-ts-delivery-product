import React from 'react';
import "./footer.css";
import {useLocation} from "react-router-dom";

const Footer = () => {

    const locations = useLocation()

    return (
        <footer className={locations.pathname === "/" ? "catalog" : ""}>
            Copyright {new Date().getFullYear()}
        </footer>
    );
};

export default Footer;