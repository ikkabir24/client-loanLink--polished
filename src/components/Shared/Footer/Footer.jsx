import React from 'react';
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { FaCopyright, FaSquareCheck, FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';
import WebLogo from '../../shared/WebLogo';

const Footer = () => {
    return (
        <footer className="border-t border-base-300 py-12 bg-base-200">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">

                {/* Left: Logo & Description */}
                <div className="flex flex-col gap-4">
                    <WebLogo />
                    <p className="text-base-content/80">Learn. Share. Grow Together.</p>
                    <span className="text-sm text-base-content/60 flex gap-1 items-center">
                        <FaCopyright className='w-5 h-5' />
                        <p>Designed and Developed by Kabir.</p>
                    </span>
                    <span className="text-sm text-base-content/60 flex gap-1 items-center">
                        <FaSquareCheck className='w-5 h-5' />
                        <p>All rights reserved.</p>
                    </span>
                </div>

                {/* Right: Contact Info */}
                <div className="text-start md:text-end flex flex-col gap-4">
                    <h6 className="footer-title text-base-content font-semibold">Contact Us</h6>

                    <p>
                        Email:{" "}
                        <a
                            href="mailto:ikkabir24@yahoo.com"
                            className="text-primary hover:underline"
                        >
                            ikkabir24@yahoo.com
                        </a>
                    </p>

                    <p>
                        Phone:{" "}
                        <a
                            href="tel:+8801890995309"
                            className="text-primary hover:underline"
                        >
                            +880 1890 995309
                        </a>
                    </p>

                    <div className="flex gap-4 justify-start md:justify-end mt-2">
                        <a
                            href="https://www.linkedin.com/in/ikkabir24/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            <FaLinkedin className="text-3xl md:text-4xl" />
                        </a>

                        <a
                            href="https://www.facebook.com/ikkabir24"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            <FaFacebookSquare className="text-3xl md:text-4xl" />
                        </a>

                        <a
                            href="https://x.com/ikkabir24"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            <FaSquareXTwitter className="text-3xl md:text-4xl" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;