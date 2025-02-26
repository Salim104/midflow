import { FaLinkedin, FaGithub } from "react-icons/fa";
import team1 from "../../../assets/team1.png"; // Replace with actual image paths
import team2 from "../../../assets/team2.png";


function Team() {
     return (
        <section className="bg-primary text-white py-16 px-6 text-center">
            {/* Section Heading */}
            <h2 className="text-4xl md:text-6xl font-bold">Team</h2>
            <p className="text-2xl md:text-3xl text-heroColor font-semibold mt-2">The Minds Behind Innovation</p>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 max-w-5xl mx-auto">
                
                {/* Team Member 1 */}
                <div className="flex flex-col items-center">
                    <img src={team1} alt="Team Member 1" className="w-[330px] h-[400px] rounded-lg object-cover" />
                    <h3 className="text-2xl mt-4 font-semibold">John Doe</h3>
                    <p className="text-gray-400">Lead Developer</p>
                    <div className="flex space-x-4 mt-2">
                        <a href="#" className="text-secondary text-2xl hover:text-white"><FaLinkedin /></a>
                        <a href="#" className="text-secondary text-2xl hover:text-white"><FaGithub /></a>
                    </div>
                </div>

                {/* Team Member 2 */}
                <div className="flex flex-col items-center">
                    <img src={team2} alt="Team Member 2" className="w-[330px] h-[400px] rounded-lg object-cover" />
                    <h3 className="text-2xl mt-4 font-semibold">Jane Smith</h3>
                    <p className="text-gray-400">AI Engineer</p>
                    <div className="flex space-x-4 mt-2">
                        <a href="#" className="text-secondary text-2xl hover:text-white"><FaLinkedin /></a>
                        <a href="#" className="text-secondary text-2xl hover:text-white"><FaGithub /></a>
                    </div>
                </div>

            </div>
        </section>
    );
}


export default Team;
