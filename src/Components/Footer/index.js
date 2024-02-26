import React from 'react';
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaRegCirclePlay } from "react-icons/fa6";
import { LiaInstagram } from "react-icons/lia";


const Footer = () => {

    return (
        <>
            <footer className="main-footer">
                <div className="footer-section1">
                    <h3 className="spacing-h3" >POPULAR CATEGORIES</h3>
                    <ul>
                        <li>Cars</li>
                        <li>Flats for rent</li>
                        <li>Mobile Phones</li>
                        <li>Jobs</li>
                    </ul>
                </div>

                <div className="footer-section2">
                    <h3 className="spacing-h3" >TRENDING SEARCHES</h3>
                    <ul>
                        <li>Bikes</li>
                        <li>Watches</li>
                        <li>Books</li>
                        <li>Dogs</li>
                    </ul>
                </div>

                <div className="footer-section3">
                    <h3 className="spacing-h3" >ABOUT US</h3>
                    <ul>
                        <li>About </li>
                        <li>OLX Blog</li>
                        <li>Contact Us</li>
                        <li>OLX </li>
                    </ul>
                </div>

                <div className="footer-section4">
                    <h3 className="spacing-h3" >OLX</h3>
                    <ul>
                        <li>Help</li>
                        <li>Sitemap</li>
                        <li>Terms of use</li>
                        <li>Privacy </li>
                    </ul>
                </div>
                <div className="footer-section5">
                    <ul>
                        <li><h3  >Follow us</h3></li>
                        <li> <AiFillTwitterCircle /> <FaRegCirclePlay />  <LiaInstagram /> <TiSocialFacebookCircular /></li>
                    </ul>
                    <img className="icon-width" src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" />
                    <img className="icon-width" src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" />
                    <img className="icon-width" src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg" />
                </div>
            </footer>
            <div style={{
                background:'rgb(32, 32, 79)',
                width:'100%',
                height:'3rem'
            }}>
                
            </div>

        </>
    );
};

export default Footer;
