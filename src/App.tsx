import { Hero } from './components/Hero';
import { Design } from './components/Design';
import { Manufacturing } from './components/Manufacturing';
import { Integration } from './components/Integration';
import { Support } from './components/Support';
import { Contact } from './components/Contact';
import { Header } from './components/Header';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Design />
      <Manufacturing />
      <Integration />
      <Support />
      <Contact />
    </div>
  );
}