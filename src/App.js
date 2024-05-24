import Home from "./components/Home";
import About from "./components/About";
import Skillset from "./components/Skillset";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {


  return (

    <main className="text-gray-400 bg-gray-900 body-font">

    <Navbar/>
    <Home/>
    <About className/>
    <Skillset/>
    <Projects/>
    <Contact/>
    </main>
  );
}

export default App;
