import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCheck } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';

const Hero = () => {
    const [emailCopied, setEmailCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('mpchang17@gmail.com');
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
            {/* Toast Notification */}
            <AnimatePresence>
                {emailCopied && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: -20, x: '-50%' }}
                        className="fixed top-24 left-1/2 z-50 flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full shadow-lg"
                    >
                        <FaCheck className="w-3 h-3 text-green-400" />
                        <span className="text-sm font-medium">Email copied to clipboard!</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                }}></div>
            </div>

            {/* Wafer background image */}
            <div className="absolute inset-0 opacity-[0.15]">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('/img/wafer2.jpeg')`,
                        backgroundPosition: 'right center',
                        transform: 'scale(1.1)'
                    }}
                ></div>
                {/* Gradient overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
            </div>

            <div className="section-container relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center"
                    >
                        {/* Headshot */}
                        <div className="relative mb-8">
                            {/* Glow effect - outside the clipped circle */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse scale-110"></div>

                            {/* Headshot */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative w-64 h-64 md:w-80 md:h-80 mx-auto overflow-hidden rounded-full"
                            >
                                <img
                                    src="/img/headshot.jpg"
                                    alt="Matthew Chang"
                                    className="relative w-full h-full object-cover shadow-2xl border-4 border-white"
                                    style={{ objectPosition: 'center', transform: 'scale(2.0) translateY(15%) translateX(-2.8%)' }}
                                />
                            </motion.div>
                        </div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-5xl md:text-7xl font-bold text-gray-900 mb-12"
                        >
                            Matt Chang
                        </motion.h1>


                        {/* Social links - Icon only */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex gap-4 justify-center mb-12"
                        >
                            <a
                                href="https://github.com/mpchang"
                                target="_blank"
                                rel="noreferrer"
                                className="p-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                                aria-label="GitHub"
                            >
                                <FaGithub className="w-6 h-6" />
                            </a>
                            <a
                                href="https://linkedin.com/in/changmp"
                                target="_blank"
                                rel="noreferrer"
                                className="p-4 bg-white border border-gray-200 text-blue-600 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="w-6 h-6" />
                            </a>
                            <a
                                href="https://scholar.google.com/citations?hl=en&user=jJyxJ48AAAAJ"
                                target="_blank"
                                rel="noreferrer"
                                className="p-4 bg-white border border-gray-200 text-gray-700 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                                aria-label="Google Scholar"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
                                </svg>
                            </a>
                            <button
                                onClick={handleCopyEmail}
                                className="p-4 bg-white border border-gray-200 text-gray-600 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                                aria-label="Copy Email"
                            >
                                <FaEnvelope className="w-6 h-6" />
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2 text-gray-400 cursor-pointer"
                    onClick={() => {
                        document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    <span className="text-sm font-medium">Scroll to explore</span>
                    <HiArrowDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
