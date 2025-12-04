import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const LeftSide = () => {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-lightest sm:text-5xl">
                    <a href="/">Shreevatsa Balthillaya</a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-lightest sm:text-xl">
                    Backend Software Engineer
                </h2>
                <p className="mt-4 max-w-xs leading-normal">
                    I build accessible, pixel-perfect digital experiences for the web.
                </p>

                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                    <ul className="mt-16 w-max">
                        <li>
                            <a className="group flex items-center py-3" href="#about">
                                <span className="nav-indicator mr-4 h-px w-8 bg-slate-dark transition-all group-hover:w-16 group-hover:bg-teal-300 motion-reduce:transition-none"></span>
                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-light group-hover:text-slate-lightest">About</span>
                            </a>
                        </li>
                        <li>
                            <a className="group flex items-center py-3" href="#experience">
                                <span className="nav-indicator mr-4 h-px w-8 bg-slate-dark transition-all group-hover:w-16 group-hover:bg-teal-300 motion-reduce:transition-none"></span>
                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-light group-hover:text-slate-lightest">Experience</span>
                            </a>
                        </li>
                        <li>
                            <a className="group flex items-center py-3" href="#projects">
                                <span className="nav-indicator mr-4 h-px w-8 bg-slate-dark transition-all group-hover:w-16 group-hover:bg-teal-300 motion-reduce:transition-none"></span>
                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-light group-hover:text-slate-lightest">Projects</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                <li className="mr-5 text-xs">
                    <a className="block hover:text-slate-lightest" href="https://github.com/Shreevatsa3942" target="_blank" rel="noreferrer">
                        <span className="sr-only">GitHub</span>
                        <FaGithub className="h-6 w-6" />
                    </a>
                </li>
                <li className="mr-5 text-xs">
                    <a className="block hover:text-slate-lightest" href="https://linkedin.com/in/shreevatsabalthillaya942" target="_blank" rel="noreferrer">
                        <span className="sr-only">LinkedIn</span>
                        <FaLinkedin className="h-6 w-6" />
                    </a>
                </li>
                <li className="mr-5 text-xs">
                    <a className="block hover:text-slate-lightest" href="mailto:sbalthillaya584@gmail.com" target="_blank" rel="noreferrer">
                        <span className="sr-only">Email</span>
                        <FaEnvelope className="h-6 w-6" />
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default LeftSide;
