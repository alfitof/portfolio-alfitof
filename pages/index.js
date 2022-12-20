import dynamic from 'next/dynamic';
const Greetings = dynamic(() => import('../containers/Greetings'));

export default function Home() {
  return <Greetings />;
}
