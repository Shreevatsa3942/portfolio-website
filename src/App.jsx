import React from 'react';
import Layout from './components/Layout';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';

function App() {
  return (
    <Layout>
      <LeftSide />
      <RightSide>
        <About />
        <Experience />
        <Projects />
        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
          <p>
            Loosely designed in <span className="font-medium text-slate-400">Figma</span> and coded in{' '}
            <span className="font-medium text-slate-400">Visual Studio Code</span> by yours truly. Built with{' '}
            <span className="font-medium text-slate-400">React</span> and{' '}
            <span className="font-medium text-slate-400">Tailwind CSS</span>, deployed with{' '}
            <span className="font-medium text-slate-400">Vercel</span>.
          </p>
        </footer>
      </RightSide>
    </Layout>
  );
}

export default App;
