import Navbar from './components/navBar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Works from './components/Works/works';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import { Analytics } from '@vercel/analytics/react';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
