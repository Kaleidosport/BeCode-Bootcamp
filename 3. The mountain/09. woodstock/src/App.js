import React from "react"
import "./Assets/Style.css"
import Navbar from "./Components/Navbar"
import Woodstock from "./Components/Woodstock"
import About from "./Components/About"
import Shop from "./Components/Shop"
import Mindset from "./Components/Mindset"
import Form from "./Components/Form"
import Footer from "./Components/Footer"

function App() {
  return (
    <section>
      <Navbar/>
      <Woodstock/>
      <About/>
      <Shop/>
      <Mindset/>
      <Form/>
      <Footer/>
    </section>
  )
}

export default App
