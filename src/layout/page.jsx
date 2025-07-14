import Heading from "../components//heading";
import About from "../components//about";
import Education from "../components//education";
import Contact from "../components//contact";
import Skills from "../components//skills";
import Writings from "../components//writings";
import Projects from "../components//projects";
import Footer from "../components//footer";
import Navbar from "../components/navbar";

const Page = () => {
  return (
    <section
      id="home"
      className="text-white mx-86 w-full h-auto relative py-26"
    >
      <Navbar />
      <Heading />
      <About />
      <Projects />
      <Writings />
      <Education />
      <Contact />
      <Skills />
      <Footer />
    </section>
  );
};

export default Page;
