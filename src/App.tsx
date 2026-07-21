import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import TechnicalArsenal from "./components/TechnicalArsenal";
import EducationCertifications from "./components/EducationCertifications";
import CtaFooter from "./components/CtaFooter";
import ChatWidget from "./components/ChatWidget";

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main>
        <Hero />
        <Experience />
        <TechnicalArsenal />
        <EducationCertifications />
      </main>
      <CtaFooter />
      <ChatWidget />
    </div>
  );
}
