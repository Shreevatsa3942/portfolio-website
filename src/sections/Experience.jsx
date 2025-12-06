import React from 'react';

const Experience = () => {
    const experiences = [
        {
            date: 'Jan 2025 – Present',
            title: 'Software Engineer – Backend',
            company: 'Cardinal Health',
            location: 'Bangalore, India',
            highlights: [
                { icon: '🚀', text: 'Sole architect of high-throughput e-commerce Receiving backend', metric: '30% efficiency boost' },
                { icon: '⚡', text: 'Engineered sub-100ms RESTful APIs with multi-database sync', metric: 'MongoDB · MySQL · Neo4j' },
                { icon: '📊', text: 'Pioneered centralized observability with structured logging & resilient error patterns', metric: null }
            ],
            skills: ['Java', 'Spring Boot', 'Microservices', 'MongoDB', 'MySQL', 'Neo4j', 'AWS']
        },
        {
            date: 'Aug 2022 – Dec 2024',
            title: 'Associate Software Engineer',
            company: 'Bazaarvoice',
            location: 'Bangalore, India',
            highlights: [
                { icon: '🔄', text: 'Spearheaded zero-downtime migration of client records from Neo4j to MongoDB', metric: '10M+ records' },
                { icon: '☁️', text: 'Designed event-driven serverless architecture with AWS Lambda & API Gateway', metric: '40% cost reduction' },
                { icon: '🛡️', text: 'Eliminated critical CVEs in production & optimized Kubernetes clusters', metric: '25% faster scheduling' }
            ],
            skills: ['Java', 'Spring Boot', 'AWS Lambda', 'Kubernetes', 'Neo4j', 'MongoDB', 'Datadog']
        }
    ];

    return (
        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-lightest lg:sr-only">Experience</h2>
            </div>
            <div>
                <ol className="group/list">
                    {experiences.map((exp, index) => (
                        <li key={index} className="mb-12">
                            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={exp.date}>
                                    {exp.date}
                                </header>
                                <div className="z-10 sm:col-span-6">
                                    <h3 className="font-medium leading-snug text-slate-lightest">
                                        <div>
                                            <a className="inline-flex items-baseline font-medium leading-tight text-slate-lightest hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="#" target="_blank" rel="noreferrer" aria-label={`${exp.title} at ${exp.company}`}>
                                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                <span>{exp.title} · <span className="inline-block">{exp.company}</span></span>
                                            </a>
                                        </div>
                                    </h3>

                                    {/* Enhanced bullet points with icons and metrics */}
                                    <ul className="mt-3 space-y-2">
                                        {exp.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm leading-normal text-slate-400">
                                                <span className="flex-shrink-0 text-base">{highlight.icon}</span>
                                                <span>
                                                    {highlight.text}
                                                    {highlight.metric && (
                                                        <span className="ml-2 inline-flex items-center rounded-md bg-teal-400/10 px-2 py-0.5 text-xs font-semibold text-teal-300 ring-1 ring-inset ring-teal-400/20">
                                                            {highlight.metric}
                                                        </span>
                                                    )}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
                                        {exp.skills.map((skill, i) => (
                                            <li key={i} className="mr-1.5 mt-2">
                                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                    {skill}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Experience;
