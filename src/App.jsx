import "./app.scss";
import Hero from "./components/Hero/hero";
import Navbar from "./components/navbar/navbar";
import Parallax from "./components/parallax/parallax";
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
      <section>Project1</section>
      <section>Project2</section>
      <section>Project3</section>
      <section id="Resume">
        <Parallax type="portfolio"></Parallax>
      </section>
      <section>About Me</section>
      <section id="Contact">Contact</section>
    </>
  );
}

export default App;
