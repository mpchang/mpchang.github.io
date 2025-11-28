import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const experiences = [
    {
        id: 'deepmind',
        company: 'Google Deepmind',
        role: 'Software Engineer',
        period: '2025 - Present',
        logo: '/img/deepmind_logo.png',
        color: 'deepmind',
        summary: 'I work on improving the agentic coding capabilities of Gemini, primarily through Antigravity, Google\'s agentic-native IDE. Antigravity is built on top of multiple coding agents, enabling features such as writing plans and TODO lists before execution, browser use, and parallel agents. It is a coding tool, but its surfaces extend beyond just an IDE.',
        highlights: [
            'Shipped Antigravity within 4 months of joining Google Deepmind',
            'Developed and maintained the agentic harness for Antigravity.',
            'Managed the models\' limited context and attention windows using a variety of context engineering techniques.',
            'Built and maintained the key agent metrics that enable us to evaluate new capabilities and improve them.',
            'Collaborated with the research teams to train Gemini to maximize the features of Antigravity.'
        ],
        images: [],
        video: 'https://www.youtube.com/embed/3kMuohNwqVY?si=63BvC2ZLMcAIPZ9j',
        links: ['https://antigravity.google/'],
        type: 'software',
        category: 'software',
        accentColor: 'rgb(59, 130, 246)', // Blue for software
    },
    {
        id: 'windsurf',
        company: 'Windsurf',
        role: 'Software Engineer',
        period: '2024 - 2025',
        logo: '/img/windsurf_logo.png',
        color: 'windsurf',
        summary: 'Windsurf (formerly Codeium) was my first software engineering job and holds a special place in my heart. I started here as an intern after making my transition into software! Windsurf is where I learned everything I know about building production-grade software, agents, LLM serving infrastructure, and software eval/metrics. It was my first exposure to software at scale and I loved every bit of it.',
        highlights: [
            'Wrote the first system prompt for Cascade, the coding agent embedded within the IDE.',
            'Developed the first code writing and editing tools for Cascade.',
            'Built the context engineering system used to gracefully handle long conversations and context window limits',
            'Built the Cascade memories and rules features, for creating and sharing persistent context between conversations.',
            'Conducted evals to gauge the impact of various capabilities on SWE performance',
        ],
        images: [],
        video: 'https://www.youtube.com/embed/DKUe0ST_qi4?si=YrsvYjC67vEi2JQa',
        detailedDescription: 'At Windsurf, I was instrumental in building Cascade, an AI agentic pair programmer that fundamentally changes how developers write code. Cascade goes beyond simple code completion to understand context, reason about architecture, and collaborate with developers as a true pair programming partner. This project combined my passion for developer tools with cutting-edge AI capabilities.',
        links: [],
        type: 'software',
        category: 'software',
        accentColor: 'rgb(59, 130, 246)', // Blue for software
    },
    {
        id: 'luminous',
        company: 'Luminous Computing',
        role: 'Vice President of Photonics',
        period: '2019 - 2023',
        logo: '/img/luminous_logo.png',
        color: 'luminous',
        summary: (
            <>
                I was a founding engineer at Luminous Computing, and led the photonic integrated circuit effort during my four years there. My team delivered the first <a href="https://opg.optica.org/oe/fulltext.cfm?uri=oe-31-15-24926&id=532701" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-medium hover:text-orange-700 underline decoration-orange-300 hover:decoration-orange-600 underline-offset-2 transition-colors inline-flex items-center gap-1">monolithically integrated 112 Gbps PAM4 silicon photonic transceiver<svg className="w-3.5 h-3.5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></a>. This became the foundational IP block at Enosemi, which has since been <a href="https://www.amd.com/en/blogs/2025/amd-acquires-enosemi-to-accelerate-co-packaged-optics-innovation.html" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-medium hover:text-orange-700 underline decoration-orange-300 hover:decoration-orange-600 underline-offset-2 transition-colors inline-flex items-center gap-1">acquired by AMD<svg className="w-3.5 h-3.5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>. Although Luminous did not succeed, I learned a lot about engineering and AI during my time there, for which I am forever grateful.
            </>
        ),
        highlights: [
            'Led team of 9+ photonics engineers.',
            'Raised $110M+ in funding to build an AI supercomputer that used chip-to-chip photonic interconnects to enable memory, memory bandwidth, and compute ratios that were previously unachievable by electrical interconnects.',
            'Built out an entire photonics and packaging lab from an empty garage, including in-house wafer testers.',
            'Built an in-house silicon photonics design and layout EDA tool called Spicier.',
        ],
        images: [
            '/img/luminous_sputnik.jpeg'
        ],
        links: [],
        type: 'hardware',
        category: 'hardware',
        accentColor: 'rgb(251, 146, 60)', // Orange for hardware
    },
    {
        id: 'apple',
        company: 'Apple',
        role: 'Wireless Design Engineer',
        period: '2017 - 2019',
        logo: '/img/apple_logo.png',
        color: 'apple',
        summary: 'I was part of the wireless coexistence (CoEx) team. Our job was to ensure that all radios on each Apple product could coexist without interfering with each other. This is actually a fairly complex problem, if you think about how many wireless radios are packaged into each product: bluetooth, WiFi, cellular, GPS, NFC, UWB, etc., and many of these must operate simultaneously. We used a variety of hardware and software tricks to do this, and worked half our time in Cupertino and the other half in the factories.',
        highlights: [
            'Shipped the Apple Watch Series 3 (the first with cellular capability) and Series 4.',
        ],
        images: [],
        links: [],
        type: 'hardware',
        category: 'hardware',
        accentColor: 'rgb(251, 146, 60)', // Orange for hardware
    },
    {
        id: 'princeton',
        company: 'Princeton University',
        role: 'PhD in Electrical Engineering',
        period: '2011 - 2017',
        logo: '/img/princeton_logo.svg',
        color: 'gray',
        summary: 'My PhD research was in photonic integrated circuits to process extremely wideband wireless/RF signals. This was a field known as microwave photonics/RF photonics, and would later lay the foundations for joining both Apple and Luminous Computing.',
        highlights: [
            (<>My PhD thesis: <a href="http://arks.princeton.edu/ark:/88435/dsp01c821gn289" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-medium hover:text-orange-700 underline decoration-orange-300 hover:decoration-orange-600 underline-offset-2 transition-colors inline-flex items-center gap-1">A Microwave Photonic Interference Canceller: Architectures, Systems, and Integration<svg className="w-3.5 h-3.5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></a></>),
            (<>I haven't cared about publishing since graduate school, but it's fun to see that people are still citing my papers (though I do wonder how many have actually read them)! <a href="https://scholar.google.com/citations?hl=en&user=jJyxJ48AAAAJ" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-medium hover:text-orange-700 underline decoration-orange-300 hover:decoration-orange-600 underline-offset-2 transition-colors inline-flex items-center gap-1">Almost 1,000 citations with an h-index of 16<svg className="w-3.5 h-3.5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>.</>),
            'My research became the foundational technology behind Rebeless Inc, a startup I co-founded with my advisor after graduate school that unfortunately never got funding... but it was a great experience!'
        ],
        images: [],
        video: 'https://www.youtube.com/embed/ZHJ-lg2I-5U?si=m-hGrmCimuW8z6Fp',
        links: [],
        type: 'education',
        category: 'hardware',
        accentColor: 'rgb(251, 146, 60)', // Orange for hardware
    },
];

const Journey = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Handle ESC key to close expanded card
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                setSelectedId(null);
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    const getGradientClass = (color) => {
        const gradients = {
            gray: 'from-orange-500 to-amber-500',      // Hardware (Princeton)
            apple: 'from-orange-500 to-amber-500',     // Hardware
            luminous: 'from-orange-500 to-amber-500',  // Hardware
            windsurf: 'from-blue-600 to-blue-400',     // Software
            deepmind: 'from-blue-600 to-blue-400',     // Software
        };
        return gradients[color] || gradients.gray;
    };

    const getBgClass = (color) => {
        const backgrounds = {
            gray: 'bg-orange-50',      // Hardware (Princeton)
            apple: 'bg-orange-50',     // Hardware
            luminous: 'bg-orange-50',  // Hardware
            windsurf: 'bg-blue-50',    // Software
            deepmind: 'bg-blue-50',    // Software
        };
        return backgrounds[color] || backgrounds.gray;
    };

    const getBorderClass = (color) => {
        const borders = {
            gray: 'border-orange-200',      // Hardware (Princeton)
            apple: 'border-orange-200',     // Hardware
            luminous: 'border-orange-200',  // Hardware
            windsurf: 'border-blue-200',    // Software
            deepmind: 'border-blue-200',    // Software
        };
        return borders[color] || borders.gray;
    };

    return (
        <section id="journey" className="py-20 relative overflow-hidden" style={{
            background: 'linear-gradient(to bottom, #ffffff 0%, #f3f4f6 50%, #ffffff 100%)'
        }}>
            {/* Subtle dot pattern background */}
            <div className="absolute inset-0 opacity-[0.05]" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)',
                backgroundSize: '32px 32px'
            }}></div>
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    {/* Small label */}
                    <p className="text-gray-400 text-3xl md:text-5xl font-bold tracking-wide uppercase mb-6">
                        My Journey
                    </p>

                    {/* Image-filled title */}
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                        <span
                            className="inline-block"
                            style={{
                                backgroundImage: `url('/img/wafer1.jpeg')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                color: 'transparent',
                                filter: 'drop-shadow(0 0 20px rgba(251, 146, 60, 0.4))'
                            }}
                        >
                            From Silicon Photonics
                        </span>
                        <br />
                        <span
                            className="inline-block"
                            style={{
                                backgroundImage: `url('/img/agentic_coding_bg.png')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                color: 'transparent',
                                filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))'
                            }}
                        >
                            to Agentic Coding
                        </span>
                    </h2>
                </motion.div>



                {/* Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Timeline line - animated gradient from blue (software) to orange (hardware) */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-2 md:-translate-x-1/2 overflow-visible rounded-full" style={{
                        filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))'
                    }}>
                        <div className="absolute inset-0 rounded-full" style={{
                            background: 'linear-gradient(to bottom, rgb(59, 130, 246) 0%, rgb(59, 130, 246) 35%, rgb(251, 146, 60) 45%, rgb(251, 146, 60) 100%)'
                        }}></div>
                        {/* Animated shimmer effect */}
                        <div className="absolute inset-0" style={{
                            background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                            animation: 'shimmer 4s ease-in-out infinite'
                        }}></div>
                    </div>
                    <style>{`
                        @keyframes shimmer {
                            0%, 100% { transform: translateY(-100%); opacity: 0.5; }
                            50% { transform: translateY(100%); opacity: 1; }
                        }
                    `}</style>

                    {/* Timeline items */}
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: isMobile ? 20 : (index % 2 === 0 ? -30 : 30) }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative flex items-center justify-center"
                            >
                                {/* Card Container */}
                                <div className={`relative ml-12 md:ml-0 w-full ${selectedId === exp.id ? 'z-40' : ''}`}>
                                    <motion.div
                                        whileHover={!selectedId ? { scale: 1.02, y: -2 } : {}}
                                        className={`card p-6 cursor-pointer relative overflow-visible group ${getBorderClass(exp.color)} transition-shadow duration-300`}
                                        style={{
                                            background: selectedId === exp.id
                                                ? 'rgba(255, 255, 255, 1)'
                                                : exp.category === 'hardware'
                                                    ? 'linear-gradient(135deg, rgba(251, 146, 60, 0.03) 0%, rgba(255, 255, 255, 1) 50%)'
                                                    : 'linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, rgba(255, 255, 255, 1) 50%)',
                                            position: 'relative',
                                            left: isMobile
                                                ? '0%'
                                                : selectedId === exp.id
                                                    ? '0%'
                                                    : index % 2 === 0
                                                        ? '0%'
                                                        : '60%',
                                            boxShadow: selectedId === exp.id
                                                ? '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 12px 20px -8px rgba(0, 0, 0, 0.08)'
                                                : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                                        }}
                                        onClick={() => setSelectedId(selectedId === exp.id ? null : exp.id)}
                                        animate={{
                                            width: isMobile
                                                ? '100%'
                                                : selectedId === exp.id ? '100%' : '40%',
                                            left: isMobile
                                                ? '0%'
                                                : selectedId === exp.id
                                                    ? '0%'
                                                    : index % 2 === 0
                                                        ? '0%'
                                                        : '60%',
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            ease: [0.4, 0, 0.2, 1]
                                        }}
                                    >
                                        {/* Logo in card (when expanded) */}
                                        {selectedId === exp.id && exp.logo && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: 0.1 }}
                                                className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white border-4 flex items-center justify-center p-2 shadow-md"
                                                style={{ borderColor: exp.accentColor }}
                                            >
                                                <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                                            </motion.div>
                                        )}

                                        {/* Close button (when expanded) */}
                                        {selectedId === exp.id && (
                                            <motion.button
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedId(null);
                                                }}
                                                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </motion.button>
                                        )}

                                        {/* Content */}
                                        <div className={`flex-1 min-w-0 ${selectedId === exp.id ? 'pl-16' : ''}`}>
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1 min-w-0">
                                                    <h3 className={`text-xl font-bold mb-1 bg-gradient-to-r ${getGradientClass(exp.color)} bg-clip-text text-transparent`}>
                                                        {exp.company}
                                                    </h3>
                                                    <p className="text-gray-700 font-medium mb-1">{exp.role}</p>
                                                    <p className="text-sm text-gray-500 font-mono">{exp.period}</p>
                                                </div>

                                                {/* Expand indicator */}
                                                <div className="flex flex-col items-end gap-1">
                                                    <motion.div
                                                        animate={{ rotate: selectedId === exp.id ? 180 : 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="text-gray-400"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </motion.div>
                                                    {!selectedId && (
                                                        <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                                            Click to expand
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Expanded Content */}
                                            <motion.div
                                                initial={false}
                                                animate={{
                                                    height: selectedId === exp.id ? 'auto' : 0,
                                                    opacity: selectedId === exp.id ? 1 : 0
                                                }}
                                                transition={{ duration: 0.4, delay: selectedId === exp.id ? 0.2 : 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-4 mt-4 border-t border-gray-200">
                                                    {/* Summary */}
                                                    <p className="text-gray-600 leading-relaxed mb-4">
                                                        {exp.summary}
                                                    </p>

                                                    {/* Highlights */}
                                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Highlights</h4>
                                                    <ul className="space-y-2 mb-4">
                                                        {exp.highlights.map((highlight, idx) => (
                                                            <motion.li
                                                                key={idx}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: 0.3 + idx * 0.05 }}
                                                                className="flex items-start gap-2 text-gray-700"
                                                            >
                                                                <span className="text-blue-500 mt-0.5">•</span>
                                                                <span>{highlight}</span>
                                                            </motion.li>
                                                        ))}
                                                    </ul>

                                                    {/* Links */}
                                                    {exp.links && exp.links.length > 0 && (
                                                        <div className="mt-4 mb-6">
                                                            {exp.links.map((link, idx) => (
                                                                <a
                                                                    key={idx}
                                                                    href={link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
                                                                >
                                                                    <img src="/img/antigravity-logo.jpg" alt="Antigravity" className="w-5 h-5 rounded" />
                                                                    Download Antigravity
                                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                                    </svg>
                                                                </a>
                                                            ))}
                                                        </div>
                                                    )}

                                                    {/* Featured video */}
                                                    {exp.video && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.5 }}
                                                            className="rounded-lg overflow-hidden mb-6"
                                                        >
                                                            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                                                <iframe
                                                                    className="absolute top-0 left-0 w-full h-full"
                                                                    src={exp.video}
                                                                    title="YouTube video player"
                                                                    frameBorder="0"
                                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                    referrerPolicy="strict-origin-when-cross-origin"
                                                                    allowFullScreen
                                                                ></iframe>
                                                            </div>
                                                        </motion.div>
                                                    )}

                                                    {/* Featured image */}
                                                    {exp.images && exp.images[0] && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.5 }}
                                                            className="rounded-lg overflow-hidden"
                                                        >
                                                            <img
                                                                src={exp.images[0]}
                                                                alt={`${exp.company} featured`}
                                                                className="w-full object-contain max-h-96"
                                                            />
                                                        </motion.div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Timeline logo node */}
                                <motion.div
                                    className="absolute left-4 -translate-x-1/2 md:left-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 md:-translate-x-1/2 z-20 flex items-center justify-center p-2 shadow-md"
                                    style={{ borderColor: exp.accentColor }}
                                    animate={{
                                        opacity: selectedId === exp.id ? 0 : 1,
                                        scale: selectedId === exp.id ? 0.8 : 1,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {exp.logo && (
                                        <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                                    )}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div >
        </section >
    );
};

export default Journey;
