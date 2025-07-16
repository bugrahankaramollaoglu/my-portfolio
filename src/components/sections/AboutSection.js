import { FaMedium, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


{/* about section */ }
export default function AboutSection({ oswald, inter }) {
	return (


		<section id="about" className="text-center space-y-4">
			{/* Flex container for paragraph + image */}
			<div className="flex items-center justify-center gap-6">

				{/* About Me paragraph */}
				<p className={`${inter.className} text-lg text-slate-300 leading-relaxed flex-1 text-left`}>
					I am a <span className="text-white font-semibold">Boğaziçi University</span> graduate programmer developing
					<span className="text-blue-400 font-semibold"> Native Android</span> /
					<span className="text-blue-400 font-semibold"> Flutter</span> apps using a wide span of mobile technologies.
					I write & publish apps along with writing Medium articles on Medium.
					Currently learning Data Science and Machine Learning to implement Artificial Intelligence Agents in my apps.
				</p>

				{/* Scroll down mouse GIF */}
				<button
					className="focus:outline-none"
					aria-label="Scroll to projects"
				>
					<img
						src="https://i0.wp.com/rambutgelap.com/wp-content/uploads/2022/07/scroll-down-mouse.gif?ssl=1"
						alt="Scroll down mouse GIF"
						width={50}
						height={50}
						className="opacity-80 hover:opacity-100 transition-opacity"
					/>
				</button>
			</div>
		</section>

	);
}
