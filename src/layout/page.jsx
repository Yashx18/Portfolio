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
      className="text-white lg:mx-86 md:mx-56 sm:mx-20 mx-4 w-full h-auto relative lg:py-26 md:py-16 sm:py-10 pt-6 pb-10 flex flex-col items-center justify-center"
    >
      <Navbar />
      <Heading />
      <About />
      <Projects />
      {/* <Writings /> */}
      <Education />
      <Contact />
      <Skills />
      <Footer />
    </section>
  );
};

export default Page;
