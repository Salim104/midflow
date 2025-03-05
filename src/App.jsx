
import { Navbar } from "./assets/components/Navbar"
import Footer from "./assets/components/sections/footer"
import { Home } from "./assets/components/sections/home"
import Process from "./assets/components/sections/Process"
import Services from "./assets/components/sections/Services"
import Team from "./assets/components/sections/Team"

export default function App() {
  return (
    <>
    <div className="bg-backgroundColor">
      <div className="fixed top-0 left-0 w-full z-20 ">
      <Navbar/>
      </div>
      <Home/>
      <Services/>
      <Process/>
      <Team/>
      <Footer/>
    </div>
    </>
  )
}