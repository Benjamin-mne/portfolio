import { NavBar } from './components/navbar/NavBar'
import { Header } from "./components/header/Header"
import { About } from "./components/about/About"
import { Experience } from "./components/experience/Experience"
import { Services } from './components/services/Services'
import { Portfolio } from './components/portfolio/Portfolio'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'


function App() {

  return (
    <div>
     <NavBar/>
     <Header/>
     <About/>
     <Experience/>
     <Services/>
     <Portfolio/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
