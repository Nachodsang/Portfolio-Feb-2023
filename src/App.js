// import components
import About from "./components/About";
import Header from "./components/Header";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
function App() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <About />
      <Work />

      <Footer />
    </div>
  );
}

export default App;
