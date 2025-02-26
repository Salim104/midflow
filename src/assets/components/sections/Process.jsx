const Process = () => {
    return (
        <section className="bg-primary text-white py-16 px-6 text-center md:max-w-[1400px] md:mx-auto">
            {/* Section Heading */}
            <h2 className="text-4xl md:text-6xl font-bold">Process</h2>
            <p className="text-2xl md:text-3xl text-heroColor font-semibold mt-2">How we operate and seamless operations</p>

            {/* Process Steps Container */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:h-80">
                
                {/* Step 1 */}
                <div className="relative border-2 border-heroColor rounded-lg p-6 text-left self-start">
                    {/* Step Number Overlapping the Border */}
                    <span className="absolute -top-4 -left-4 bg-backgroundColor text-white px-4 py-2 rounded-md text-3xl font-bold shadow-lg">
                        1
                    </span>
                    {/* Step Title */}
                    <h3 className="text-2xl font-semibold mt-4">Discovery & Consultation</h3>
                    {/* Step Description */}
                    <p className=" mt-2 text-heroColor">
                        We analyze your needs and identify the best AI solution for your business.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="relative self-end border-2 border-heroColor rounded-lg p-6 text-left">
                    {/* Step Number Overlapping the Border */}
                    <span className="absolute -top-4 -left-4 bg-backgroundColor text-white px-4 py-2 rounded-md text-3xl font-bold shadow-lg">
                        2
                    </span>
                    {/* Step Title */}
                    <h3 className="text-2xl font-semibold mt-4">Solution Design & Development</h3>
                    {/* Step Description */}
                    <p className="text-heroColor mt-2">
                        We build custom AI automation that fits seamlessly into your workflow.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="relative border-2 border-heroColor rounded-lg p-6 text-left self-start">
                    {/* Step Number Overlapping the Border */}
                    <span className="absolute -top-4 -left-4 bg-backgroundColor text-white px-4 py-2 rounded-md text-3xl font-bold shadow-lg">
                        3
                    </span>
                    {/* Step Title */}
                    <h3 className="text-2xl font-semibold mt-4">Deployment & Support</h3>
                    {/* Step Description */}
                    <p className="text-heroColor mt-2">
                        We ensure smooth deployment and provide ongoing support for optimal performance.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Process;
