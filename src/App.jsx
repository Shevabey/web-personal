import React from "react"
import Header from "./components/Header/Header"
import css from "./styles/app.module.scss"
import Hero from "./components/Hero/Hero"
import Experties from "./components/Experties/Experties"

const App = () => {

  return (
    <div className= {`bg-primary ${css.container}`}>
      <Header/>
      <Hero/>
      <Experties/>
    </div>
  )
}
  
export default App
