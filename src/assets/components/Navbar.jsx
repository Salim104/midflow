import logo from "../../assets/midflow-log.svg"
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

       {/* toggle nav on and off */}
    const handleNav = () => {
        setIsOpen(!isOpen)
    }

    return<nav className="flex justify-between items-center px-6 py-4 bg-[#080538] shadow-md relative">
    {/* Logo Section */}
    <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10" />
    </div>

    {/* Navigation Menu */}
    <div className="hidden md:flex space-x-6">
        <a  href="#services" className=" text-textColor font-semibold text-lg hover:text-heroColor">Services</a>
        <a href="#Process" className="text-textColor font-semibold text-lg hover:text-heroColor">Process</a>
        <a href="#Team" className="text-textColor font-semibold text-lg hover:text-heroColor">Team</a>
    </div>

    {/* Get Started Button */}
    <div className="hidden md:block">
        <button className="bg-heroColor text-backgroundColor px-4 py-2 rounded-lg text-xl font-semibold hover:bg-white">
            Get Started
        </button>
    </div>

      {/* Mobile Menu Button */}
      <div className="block md:hidden">
                <button onClick={handleNav} className="text-white text-2xl">
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu (Dropdown) */}
            
                <div className={isOpen ? 'fixed flex flex-col h-full left-0 top-0 z-40 w-[60%] bg-backgroundColor ease-in-out duration-500 md:hidden':'fixed left-[-100%]'}>

                    <div className="h-[50%] flex flex-col justify-evenly items-center  ">
                    <a  href="#services" className="text-textColor font-semibold text-lg hover:text-heroColor" onClick={() => setIsOpen(false)}>Services</a>
                    <a href="#Process" className="text-textColor font-semibold text-lg hover:text-heroColor" onClick={() => setIsOpen(false)}>Process</a>
                    <a href="#Team" className="text-textColor font-semibold text-lg hover:text-heroColor" onClick={() => setIsOpen(false)}>Team</a>
                    </div>


                <div className="flex justify-center">
                    <button className="bg-heroColor text-backgroundColor px-4 py-2 rounded-lg hover:bg-secondary" onClick={() => setIsOpen(false)}>
                            Get Started
                        </button>

                    </div> 
                </div>
            
</nav>

}
