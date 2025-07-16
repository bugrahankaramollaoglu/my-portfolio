import { FaMedium, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


{/* contact section */ }
export default function ContactSection({ oswald, inter }) {
	return (


		< section id = "contact" className = "text-center" >

			<h2 className={`text-lg font-semibold flex justify-center items-center gap-3 ${inter.className}`}>

				Contact me on

				<a
					href="https://linkedin.com/in/bugrahankaramollaoglu"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
					className="text-blue-600 hover:text-blue-800"
				>
					<FaLinkedin className="w-6 h-6 cursor-pointer" />
				</a>

				<a href="mailto:bugrahankaramollaolgu@gxample.com" aria-label="Email" className="text-blue-600 hover:text-blue-800">
					<FaEnvelope className="w-6 h-6 cursor-pointer" />
				</a>

				<a
					href="https://github.com/bugrahankaramollaoglu"
					target="_blank"
					aria-label="Github"
					className="text-blue-600 hover:text-blue-800"
				>
					<FaGithub className="w-6 h-6 cursor-pointer" />
				</a>
				<a
					href="https://medium.com/@bugrahankaramollaoglu"
					target="_blank"
					aria-label="Medium"
					className="text-blue-600 hover:text-blue-800"
				>
					<FaMedium className="w-6 h-6 cursor-pointer" />
				</a> •
				{/* Download Button */}
				<a
					href="#apps"
					className={`inline-block font-semibold bg-white text-black px-3 py-1 text-sm rounded-xl hover:bg-gray-100 transition-all shadow-sm hover:shadow-md ${inter.className}`}
				>
					Download Resume
				</a>
			</h2>


        </section >


	);
}
