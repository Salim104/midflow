import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const words = ["Lead Generation", "Chatbot Development", "Web Scraping", "Customer Support", "Social Media"];



export const Home = () => {

    const [index, setIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % words.length);
      }, 5000); // Change every 3 seconds
  
      return () => clearInterval(interval);
    }, []);


    return (
        <section  className="flex flex-col justify-center h-screen bg-[#080538] text-textColor px-7 md:max-w-[1400px] md:mx-auto">
            {/* Blurred Circle Effect */}
            <div className="absolute top-20 right-20 w-28 z-50 h-8 bg-[#665CFF] rounded-full blur-[50px] md:w-48 md:h-48"></div>

            {/* Content Wrapper */}
            <div className="max-w-full md:max-w-7xl ">


                <h1 className="text-heroColor text-3xl sm:text-4xl md:text-7xl lg:text-8xl  font-bold leading-tight">
          We Build <br />
          AI-Powered Automations <br />
           
          for <motion.span
            key={words[index]} // Reacts to key changes
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-[#7079D3]"
          >
            {words[index]}
          </motion.span>
        </h1>

                <p className="text-white  sm:text-lg lg:text-xl my-6 max-w-full mx-auto">
                    Tired of slow, manual data collection? Our AI-driven web scraping solutions automate  <br />
                    data extraction, saving you time, reducing errors, and scaling effortlessly. Focus on insights <br />
                    while we handle the heavy lifting.
                </p>
                <button className="mt-6 bg-heroColor text-white px-6 py-3 rounded-lg  text-xl font-semibold hover:bg-[#5A6CCB] transition">
                    Contact Us
                </button>
            </div>
        </section>

    )


    }