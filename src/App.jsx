
import { Navbar } from "./assets/components/Navbar"
import Footer from "./assets/components/sections/footer"
import { Home } from "./assets/components/sections/home"
import Services from "./assets/components/sections/Services"

export default function App() {
  return (
    <>
    <div className="bg-backgroundColor">
      <Navbar/>
      <Home/>
      <Services/>
      <Footer/>
    </div>
    </>
  )
}