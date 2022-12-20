import dynamic from 'next/dynamic';
const Navigation = dynamic(() => import('../components/Navigation'));
const Greetings = dynamic(() => import('../containers/Greetings'));
import SEO from '../components/SEO';
import Education from '../containers/Education';
import Experience from '../containers/Experience';
import Proficiency from '../containers/Proficiency';
import Projects from '../containers/Projects';
import Skills from '../containers/Skills';

export default function Home() {
  return (
    <div>
      <SEO />
      {/* <Navigation /> */}
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Projects />
    </div>
  );
}
