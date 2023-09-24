import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className='mt-5'>
            <p><small>Copyright &copy; {(new Date().getFullYear())} Hotel-Booking. All rights reserved.</small></p>
        </footer>
    );
};

export default Footer;