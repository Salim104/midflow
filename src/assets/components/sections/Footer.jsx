export const Footer = () => {
    return (
        <footer className="relative bg-primary text-white text-center py-12 px-6 md:max-w-[1400px] md:mx-auto">
            {/* Section Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-heroColor uppercase">
                READY TO TRANSFORM YOUR BUSINESS?
            </h2>

            {/* Subheading */}
            <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">
                Availability is limited—let’s create a lasting legacy for your business together!
            </p>

            {/* CTA Button */}
            <button className="mt-6 bg-heroColor text-white px-6 py-3 text-lg font-semibold rounded-md hover:bg-opacity-80 transition">
                BOOK YOUR FREE CONSULTATION
            </button>

            {/* Thin Line */}
            <div className="w-full h-[5px] bg-heroColor mt-10"></div>

            {/* Copyright Text */}
            <p className="text-sm md:text-1xl text-textColor mt-4 relative z-10">© All rights reserved. Midflow AI</p>

            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-[#080538]/[92%] to-[#170E9E]"></div>
        </footer>
    );
}

export default Footer;
