import Topbar from "./Components/Topbar/Topbar"
import Contact from "./Components/Contact/Contact"
import Intro from "./Components/Intro/Intro"
import Portofolio from "./Components/Portofolio/Portofolio"
import Testimonial from "./Components/Testimonial/Testimonial"
import Work from "./Components/Work/Work"
import "./App.scss"
import { useState } from "react"
import Menu from "./Components/Menu/Menu"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen}setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen}setMenuOpen={setMenuOpen} />
      <div className="Section">
        <Intro />
        <Portofolio />
        <Work />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}

export default App;
