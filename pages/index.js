import dynamic from 'next/dynamic';
const Navigation = dynamic(() => import('../components/Navigation'));
const Greetings = dynamic(() => import('../containers/Greetings'));
const Skills = dynamic(() => import('../containers/Skills'));
const Proficiency = dynamic(() => import('../containers/Proficiency'));
const Education = dynamic(() => import('../containers/Education'));
const Experience = dynamic(() => import('../containers/Experience'));
const Projects = dynamic(() => import('../containers/Projects'));
import { showContactUs } from '../portfolio';
import SEO from '../components/SEO';
import Contact from '../components/ContactUs.jsx';

export default function Home() {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Projects />
      {showContactUs ? <Contact /> : null}
    </div>
  );
}
