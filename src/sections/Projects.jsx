import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'E-commerce Receiving Module',
            description: 'Architected and implemented the backend for the e-commerce Receiving module using Spring Boot. Designed a performant microservices solution that improved operational efficiency by 30%. Integrated multiple databases (MongoDB, MySQL, Neo4j) into unified business flows.',
            link: '#',
            skills: ['Spring Boot', 'Microservices', 'MongoDB', 'MySQL', 'Neo4j']
        },
        {
            title: 'Neo4j to MongoDB Migration',
            description: 'Led the full-cycle migration of high-value client data from Neo4j to MongoDB, integrating multiple data sources. Achieved 40% infrastructure cost reduction and 25% improvement in database query performance with zero downtime.',
            link: '#',
            skills: ['Neo4j', 'MongoDB', 'Data Migration', 'Java']
        },
        {
            title: 'Serverless Feature with AWS Lambda',
            description: 'Independently architected and implemented a serverless feature using AWS Lambda and API Gateway, with centralized monitoring via Datadog. Reduced production troubleshooting time by 25%.',
            link: '#',
            skills: ['AWS Lambda', 'API Gateway', 'Datadog', 'Serverless']
        }
    ];

    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-lightest lg:sr-only">Projects</h2>
            </div>
            <div>
                <ul className="group/list">
                    {projects.map((project, index) => (
                        <li key={index} className="mb-12">
                            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                <div className="z-10 sm:order-2 sm:col-span-6">
                                    <h3>
                                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-lightest hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href={project.link} target="_blank" rel="noreferrer" aria-label={project.title}>
                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                            <span>{project.title}</span>
                                        </a>
                                    </h3>
                                    <p className="mt-2 text-sm leading-normal">
                                        {project.description}
                                    </p>
                                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                        {project.skills.map((skill, i) => (
                                            <li key={i} className="mr-1.5 mt-2">
                                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                    {skill}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* Image placeholder if needed, currently just text layout similar to reference */}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Projects;
