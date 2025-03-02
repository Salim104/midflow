export const Home = () => {
    return (
        <section  className="flex flex-col justify-center h-screen bg-[#080538] text-textColor px-7 md:max-w-[1400px] md:mx-auto">
            {/* Blurred Circle Effect */}
            <div className="absolute top-20 right-20 w-28 h-8 bg-[#665CFF] rounded-full blur-[50px] md:w-48 md:h-48 "></div>

            {/* Content Wrapper */}
            <div className="max-w-7xl ">
                <h1 className="text-heroColor text-3xl sm:text-4xl md:text-7xl lg:text-8xl  font-bold">
                    We Build <br />
                    AI-Powered Automations<br />
                    for Lead Generation
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