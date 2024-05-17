import "./app.scss";
import Hero from "./components/Hero/hero";
import Contact from "./components/contact/contact";
import Navbar from "./components/navbar/navbar";
import Parallax from "./components/parallax/parallax";
import Projects from "./components/projects/projects";
function App() {
  return (
    <>
      <section id="Homepage">
        <Navbar></Navbar>
        <Hero></Hero>
      </section>
      <section id="Projects">
        <Parallax type="services"></Parallax>
      </section>
      <Projects></Projects>
      <section id="Resume">
        <Parallax type="portfolio"></Parallax>
      </section>
      <section>About Me</section>
      <section id="Contact">
        <Contact></Contact>
      </section>
    </>
  );
}

export default App;
