import Ticker from "./components/Ticker.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Projects from "./components/Projects.jsx";
import Process from "./components/Process.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ChatBot from "./components/ChatBot.jsx";

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Lewati ke konten
      </a>
      <Ticker />
      <Header />
      <main id="main">
        <Hero />
        <Stats />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </>
  );
}
