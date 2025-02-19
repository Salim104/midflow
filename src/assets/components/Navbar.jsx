import logo from "../../assets/midflow-log.svg"


export const Navbar = () => {

    return<nav className="flex justify-between items-center px-6 py-4 bg-[#080538] shadow-md">
    {/* Logo Section */}
    <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10" />
    </div>

    {/* Navigation Menu */}
    <div className="hidden md:flex space-x-6">
        <a href="#" className=" text-textColor font-semibold text-lg hover:text-heroColor">Services</a>
        <a href="#" className="text-textColor font-semibold text-lg hover:text-heroColor">Process</a>
        <a href="#" className="text-textColor font-semibold text-lg hover:text-heroColor">Team</a>
    </div>

    {/* Get Started Button */}
    <div>
        <button className="bg-heroColor text-backgroundColor px-4 py-2 rounded-lg text-xl font-semibold hover:bg-white">
            Get Started
        </button>
    </div>
</nav>

}