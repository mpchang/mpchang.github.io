import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Projects
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Some projects that I've worked on in my free time
                    </p>
                </motion.div>

                {/* NFL Big Data Bowl Project */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="card p-8 overflow-hidden">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                    NFL Big Data Bowl 2024
                                </h3>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 border border-amber-200 text-amber-800 rounded-md text-sm font-medium">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    Grand Prize Winner
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <a
                                    href="https://www.kaggle.com/code/matthewpchang/uncovering-missed-tackle-opportunities"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                                    aria-label="Kaggle"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358" />
                                    </svg>
                                </a>
                                <a
                                    href="https://github.com/mpchang/uncovering-missed-tackle-opportunities"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                                    aria-label="GitHub"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://operations.nfl.com/gameday/analytics/big-data-bowl/2024-big-data-bowl-winner-and-finalists/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                                    aria-label="NFL Press Release"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-6 text-gray-700 leading-relaxed space-y-4">
                            <p>
                                The <a href="https://operations.nfl.com/gameday/analytics/big-data-bowl/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-medium hover:text-indigo-700 underline decoration-indigo-200 hover:decoration-indigo-500 underline-offset-2 transition-all duration-500 inline-flex items-center gap-1 hover:[text-shadow:0_0_8px_rgba(99,102,241,0.3)]">Big Data Bowl<svg className="w-3.5 h-3.5 inline transition-transform duration-500 hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a> is the premiere sports analytics data science competition hosted by AWS and the NFL.
                            </p>
                            <p>
                                My team was selected as the <strong>grand prize winner</strong> from a field of over 300 teams using our metric, <a href="https://www.kaggle.com/code/matthewpchang/uncovering-missed-tackle-opportunities" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-medium hover:text-indigo-700 underline decoration-indigo-200 hover:decoration-indigo-500 underline-offset-2 transition-all duration-500 inline-flex items-center gap-1 hover:[text-shadow:0_0_8px_rgba(99,102,241,0.3)]">Missed Tackle Opportunities and Tackle Probability<svg className="w-3.5 h-3.5 inline transition-transform duration-500 hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>. Missed tackle opportunities represent a new class of defensive mistake that is not captured by current statistics: think of defenders getting juked out, making ambiguous arm tackles, or being lazy.
                            </p>
                            <p>
                                To detect these missed tackle opportunities, we trained a custom XGBoost model that ingests player tracking data to predict each defender's probability of making the tackle within the next second. We verified the model's accuracy by successfully identifying ~90% of the 1100 labeled missed tackles, and on top of that, also identified an additional 3500 missed tackle opportunities that were previously undetected.
                            </p>
                            <p>
                                Missed tackle opportunities <a href="https://aws.amazon.com/blogs/media/beyond-the-box-score-aws-and-nfl-ai-powered-tackle-analysis/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-medium hover:text-indigo-700 underline decoration-indigo-200 hover:decoration-indigo-500 underline-offset-2 transition-all duration-500 inline-flex items-center gap-1 hover:[text-shadow:0_0_8px_rgba(99,102,241,0.3)]">have been incorporated<svg className="w-3.5 h-3.5 inline transition-transform duration-500 hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a> in the AWS NextGenStats pipeline.
                            </p>
                        </div>

                        {/* Images */}
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                            <div className="rounded-lg overflow-hidden bg-gray-100">
                                <img
                                    src="/img/2022110700_2902_video_2.gif"
                                    alt="Original NFL Play Animation"
                                    className="w-full h-auto"
                                />
                                <p className="text-sm text-gray-600 text-center py-2">Original NFL Play</p>
                            </div>
                            <div className="rounded-lg overflow-hidden bg-gray-100">
                                <img
                                    src="/img/play_with_tackle_prob_2022110700_2902.gif"
                                    alt="Tackle Probability Visualization"
                                    className="w-full h-auto"
                                />
                                <p className="text-sm text-gray-600 text-center py-2">Tackle Probability Analysis</p>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
