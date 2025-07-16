export default function AboutSection({ oswald, inter }) {
	return (


		<section id="about" className="text-center space-y-4">
			{/* Flex container for paragraph + image */}
			<div className="flex items-center justify-center gap-6">

				{/* About Me paragraph */}
				<p className={`${inter.className} text-lg text-slate-300 leading-relaxed flex-1 text-left`}>
					I am a <span className="text-white font-semibold">Boğaziçi University</span> graduate programmer developing
					and publishing <span className="text-white font-semibold"> mobile apps </span>
					using a wide span of the latest technologies. I am currently learning Data Science and Machine Learning to implement Artificial Intelligence Agents in my apps.
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
