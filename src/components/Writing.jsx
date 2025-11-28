import React from 'react';
import { motion } from 'framer-motion';

const Writing = () => {
    const articles = [
        {
            title: "Making the Leap from Hardware to Machine Learning (Part 1)",
            excerpt: "After earning a PhD in optical chip design and working 7 years in the hardware industry, I made a career pivot to machine learning software. Today, I'm a software engineer at Codeium, an AI coding assistant startup.",
            url: "https://medium.com/p/d85853b59a05",
            date: "2024",
            readTime: "7 min read"
        },
        {
            title: "My Team Won the 2024 Big Data Bowl",
            excerpt: "Here's some advice that we would give — both technical and non-technical — to future contestants. This post is not about the exact technical details and implementation of our specific model and metric.",
            url: "https://medium.com/@mpchang17/my-team-won-the-2024-big-data-bowl-ca9f668d011d",
            date: "2024",
            readTime: "6 min read"
        },
        {
            title: "Making the Leap from Hardware to Machine Learning (Part 2)",
            excerpt: "When I first considered pivoting from hardware to software, I did the obvious thing and scoured Google to see who else had done it and what they had to say. How long did it take them? What was the hardest part?",
            url: "https://medium.com/@mpchang17/making-the-leap-from-hardware-to-machine-learning-part-2-62528a232196",
            date: "2024",
            readTime: "5 min read"
        }
    ];

    return (
        <section id="writing" className="py-20 bg-gray-50">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Writing
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Thoughts on technology, engineering, and career transitions
                    </p>
                </motion.div>

                {/* Article Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {articles.map((article, index) => (
                        <motion.a
                            key={index}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="card bg-white overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                        >
                            {/* Medium Icon Header */}
                            <div className="p-6 pb-4 flex items-center gap-2 border-b border-gray-100">
                                <svg className="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                                </svg>
                                <span className="text-sm font-medium text-gray-600">Medium</span>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-all duration-500 line-clamp-2" style={{ transitionProperty: 'color, text-shadow' }}>
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                                    {article.excerpt}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                                    <span>{article.date}</span>
                                    <span>{article.readTime}</span>
                                </div>
                            </div>

                            {/* Read More Arrow */}
                            <div className="px-6 pb-6">
                                <div
                                    className="flex items-center gap-2 text-gray-600 font-medium group-hover:text-indigo-600 group-hover:gap-3 transition-all duration-500"
                                    style={{
                                        transitionProperty: 'color, gap, text-shadow',
                                        textShadow: 'var(--tw-shadow, 0 0 0 transparent)'
                                    }}
                                >
                                    <span className="group-hover:[text-shadow:0_0_8px_rgba(99,102,241,0.3)]">Read on Medium</span>
                                    <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Writing;
