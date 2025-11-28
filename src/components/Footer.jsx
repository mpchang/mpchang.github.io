import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCheck } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [emailCopied, setEmailCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('mpchang17@gmail.com');
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    return (
        <footer className="bg-gray-900 text-white py-12 relative">
            {/* Toast Notification */}
            <AnimatePresence>
                {emailCopied && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: 20, x: '-50%' }}
                        className="fixed bottom-24 left-1/2 z-50 flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-full shadow-lg"
                    >
                        <FaCheck className="w-3 h-3 text-green-500" />
                        <span className="text-sm font-medium">Email copied to clipboard!</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="section-container">
                <div className="max-w-4xl mx-auto">
                    {/* Social links */}
                    <div className="flex justify-center gap-6 mb-8">
                        <a
                            href="https://github.com/mpchang"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                            aria-label="GitHub"
                        >
                            <FaGithub className="w-6 h-6" />
                        </a>
                        <a
                            href="https://linkedin.com/in/changmp"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="https://scholar.google.com/citations?hl=en&user=jJyxJ48AAAAJ"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                            aria-label="Google Scholar"
                        >
                            <SiGooglescholar className="w-6 h-6" />
                        </a>
                        <button
                            onClick={handleCopyEmail}
                            className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                            aria-label="Copy Email"
                        >
                            <FaEnvelope className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Copyright */}
                    <div className="text-center text-gray-400 text-sm">
                        <p>© {currentYear} Matt Chang. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
