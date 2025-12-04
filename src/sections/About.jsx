import React from 'react';

const About = () => {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-lightest lg:sr-only">About</h2>
            </div>
            <div>
                <p className="mb-4">
                    I am a Backend Software Engineer with 3+ years of experience designing and developing scalable Java/Spring Boot applications and microservices. I have proven expertise in architecting low-level design (LLD) solutions, building high-performance backend systems, and taking full ownership of backend services from design to production.
                </p>
                <p className="mb-4">
                    My strong foundation lies in distributed systems, API design, microservices architecture, and cloud-native deployment. I am experienced in building resilient, maintainable systems using SOLID principles and design patterns.
                </p>
                <p>
                    Currently, I am a Software Engineer at <span className="font-medium text-slate-lightest">Cardinal Health</span>, where I architected the backend for the e-commerce Receiving module. Previously, I worked at <span className="font-medium text-slate-lightest">Bazaarvoice</span>, leading data migrations and cloud-native feature delivery.
                </p>
            </div>
        </section>
    );
};

export default About;
