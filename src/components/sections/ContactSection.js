import { FaMedium, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ResumeDownloadButton from '../ResumeDownloadButton';
import { inter, oswald } from "@/components/utilities/fonts";

export default function ContactSection() {
	return (
		<section id="contact" className="text-center space-y-4">
			<h2 className="text-lg font-semibold flex flex-wrap justify-center items-center gap-3">
				Contact me on,

				<a
					href="https://linkedin.com/in/bugrahankaramollaoglu"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
					className="text-blue-600 hover:text-blue-800"
				>
					<FaLinkedin className="w-6 h-6 cursor-pointer" />
				</a>

				<a href="mailto:bugrahankaramollaoglu@gmail.com" aria-label="Email" className="text-blue-600 hover:text-blue-800">
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
				</a>
			</h2>

			{/* Resume button below contact line */}
			<div className="flex justify-center">
				<ResumeDownloadButton oswald={oswald} inter={inter} />
			</div>

			{/* Mouse icon below */}
			<div>
				<button
					className="focus:outline-none"
					aria-label="Scroll to projects"
				>
					<img
						src="https://i0.wp.com/rambutgelap.com/wp-content/uploads/2022/07/scroll-down-mouse.gif?ssl=1"
						alt="Scroll down mouse GIF"
						width={50}
						height={50}
						className="opacity-80 hover:opacity-100 transition-opacity mx-auto"
					/>
				</button>
			</div>
		</section>

	);
}
