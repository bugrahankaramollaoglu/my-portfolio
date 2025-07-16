export default function AboutSection({ oswald, inter }) {
	return (
		<section id="about" className="text-center space-y-4">
			{/* Flex container for paragraph + image */}
			<div className="flex items-center justify-center gap-6">

				{/* About Me paragraph */}
				<p className={`${inter.className} text-lg text-slate-300 leading-relaxed flex-1 text-center`}>
					I am a <span className="text-white  font-semibold">Boğaziçi University</span> graduate programmer developing
					and publishing <span className="text-white font-semibold"> mobile apps </span>
					using state-of-the-art technologies. I am currently learning Data Science and Machine Learning to implement Artificial Intelligence Agents in my apps.
				</p>
			</div>
		</section>
	);
}
