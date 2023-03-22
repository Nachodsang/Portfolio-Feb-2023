// import components
import About from "./components/About";
import Header from "./components/Header";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Cover from "./components/Cover";
function App() {
  return (
    <div className="relative">
      <Header />
      <Cover />
      <Hero />
      <About />
      <Work />

      <Footer />
    </div>
  );
}

export default App;
