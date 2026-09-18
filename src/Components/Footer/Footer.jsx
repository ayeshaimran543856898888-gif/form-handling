import React from "react";
import './Footer.css'
import pic from "../../assets/logo.jpg";

function Footer() {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                   <img src={pic} alt="" width={150} height={40} />
                    <div className="footer-p">Now create your own Jotform - It’s free!</div>
                    <button className="footer-btn">Create your own Jotform</button>
                </div>
            </div>
        </>
    );
}

export default Footer;