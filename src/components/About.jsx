import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)',
                backgroundSize: '32px 32px'
            }}></div>

            <div className="section-container relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                About Me
                            </h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    I'm an engineer who loves to have fun while building. I tend to follow my nose, which has led to a pretty non-linear career trajectory: I started off working on the radios in the Apple Watch Series 3 + 4, spent four years at an early stage startup building AI hardware using photonics, and then <a href="https://medium.com/@mpchang17/making-the-leap-from-hardware-to-machine-learning-d85853b59a05" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5', textDecoration: 'underline', textDecorationColor: '#c7d2fe', textUnderlineOffset: '2px', fontWeight: '500', transition: 'all 0.5s' }} onMouseEnter={(e) => { e.target.style.color = '#4338ca'; e.target.style.textDecorationColor = '#6366f1'; }} onMouseLeave={(e) => { e.target.style.color = '#4f46e5'; e.target.style.textDecorationColor = '#c7d2fe'; }}>hard pivoted into software, building AI coding agents</a>. I'm currently building <a href="https://antigravity.google" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5', textDecoration: 'underline', textDecorationColor: '#c7d2fe', textUnderlineOffset: '2px', fontWeight: '500', transition: 'all 0.5s' }} onMouseEnter={(e) => { e.target.style.color = '#4338ca'; e.target.style.textDecorationColor = '#6366f1'; }} onMouseLeave={(e) => { e.target.style.color = '#4f46e5'; e.target.style.textDecorationColor = '#c7d2fe'; }}>Antigravity</a> at Google Deepmind.
                                </p>
                                <p>
                                    I live a pretty active lifestyle and throughout the years have done an open ocean swim, a triathlon, and regularly play pick up ball. I have two cats named Chichi and Tofu, otherwise known as my trash goblins.
                                </p>
                            </div>
                        </motion.div>

                        {/* Vertical Film Strip */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col gap-2 max-w-sm ml-auto bg-gray-900 p-3 rounded-lg shadow-2xl"
                        >
                            {[
                                { src: "/img/alcatraz.jpeg", alt: "Alcatraz Swim", style: {} },
                                { src: "/img/biking.JPG", alt: "Biking", style: { objectPosition: '5% center' } },
                                { src: "/img/calanques.jpeg", alt: "Kayaking in Calanques", style: { objectPosition: 'center 85%' } },
                                { src: "/img/kittens.JPG", alt: "Chichi and Tofu", style: {} }
                            ].map((image, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="relative cursor-pointer"
                                >
                                    {/* Film strip frame with perforations */}
                                    <div className="relative bg-black p-2 rounded">
                                        {/* Left perforations */}
                                        <div className="absolute left-0 top-0 bottom-0 w-2 flex flex-col justify-around py-2">
                                            {[...Array(6)].map((_, i) => (
                                                <div key={`left-${i}`} className="w-1.5 h-3 bg-white rounded-sm" />
                                            ))}
                                        </div>

                                        {/* Right perforations */}
                                        <div className="absolute right-0 top-0 bottom-0 w-2 flex flex-col justify-around py-2">
                                            {[...Array(6)].map((_, i) => (
                                                <div key={`right-${i}`} className="w-1.5 h-3 bg-white rounded-sm" />
                                            ))}
                                        </div>

                                        {/* Image */}
                                        <div className="mx-2 overflow-hidden rounded">
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-52 object-cover"
                                                style={image.style}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
