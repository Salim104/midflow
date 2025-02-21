export const Services = () => {
    const services = [
        {
            title: "Chatbot Development",
            points: [
                "AI-powered chatbots for customer support.",
                "Works on WhatsApp, Messenger, and websites.",
                "24/7 automated responses."
            ]
        },
        {
            title: "Lead Generation Automation",
            points: [
                "AI-driven data extraction from multiple sources.",
                "Automates outreach and engagement.",
                "Helps scale your business effortlessly."
            ]
        },
        {
            title: "Email Automation",
            points: [
                "Personalized email sequences.",
                "AI-powered follow-ups for better conversion.",
                "Integrates with major email platforms."
            ]
        },
        {
            title: "Web Scraping Solutions",
            points: [
                "Extracts real-time data from websites.",
                "Handles large-scale data efficiently.",
                "Custom solutions for your business needs."
            ]
        },
        {
            title: "AI-Powered Analytics",
            points: [
                "Generates insights from large datasets.",
                "Predicts trends with machine learning.",
                "Helps businesses make data-driven decisions."
            ]
        },
        {
            title: "Social Media Automation",
            points: [
                "Schedules and posts content automatically.",
                "Engages with followers using AI responses.",
                "Boosts brand presence with minimal effort."
            ]
        }
    ];

    return (
        <section className="bg-primary text-white py-16 px-6 md:px-12  md:max-w-[1400px] md:mx-auto">
            {/* Section Heading */}
            <h2 className="text-4xl md:text-6xl font-bold text-center">
                Our Services
            </h2>
            <p className="text-2xl md:text-3xl text-heroColor font-semibold text-center pb-12">
                AI-Powered Automation Solutions
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col bg-heroColor p-6 rounded-lg text-white">
                        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            {service.points.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                        <button className=" self-center mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
                            Learn More
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;
