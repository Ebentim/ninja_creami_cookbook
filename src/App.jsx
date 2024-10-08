import Faq from "./sections/Faq";
import Features from "./sections/Features";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Testimonial from "./sections/Testimonial";
import CallToActions from "./sections/CallToActions.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  return (
    <main className="bg-p3 text-white">
      <Header />
      <Hero />
      <Features />
      <Testimonial />
      <CallToActions />
      <Faq />
      <Footer />
    </main>
  );
};
export default App;
