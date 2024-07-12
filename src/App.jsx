import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footers"
import Home from "./components/Home"
import Navbars from "./components/Navbars"
import About from "./components/About"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Page404 from "./components/Page404"


function App() {


  return (
    <>

      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
