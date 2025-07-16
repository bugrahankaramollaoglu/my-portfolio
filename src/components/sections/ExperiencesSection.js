export default function ExperienceSection({ oswald, inter }) {
	const experienceData = [
		{
			company: "TNC Group",
			position: "IT Intern",
			period: "05/2025 - 06/2025",
			location: "Remote",
			description: "Assorted IT projects.",
			type: "internship",
			skills: ["AutoCAD", "Photoshop", "Excel", "Python"],
			color: "from-blue-500 to-cyan-600",
			status: "Completed"
		},
		{
			company: "Yazilim.xyz",
			position: "Jetpack Compose Intern",
			period: "08/2024 - 09/2024",
			location: "Remote",
			description: "Google Calendar Clone in Android using Dependency Injection.",
			type: "internship",
			skills: ["Jetpack Compose", "Android", "Dependency Injection", "Kotlin"],
			color: "from-green-500 to-emerald-600",
			status: "Completed"
		}
	];

	return (
		<section id="experience" className="my-16 px-4 sm:px-6 lg:px-8">
			<h2 className={`text-4xl font-bold text-center text-white mb-12 ${oswald.className} border border-white/50 py-4 px-8 rounded-xl`}>
				Experience
			</h2>

			<div className="max-w-6xl mx-auto">
				{/* Experience Cards */}
				<div className="grid lg:grid-cols-2 gap-8">
					{experienceData.map((exp, index) => (
						<div key={index} className="group relative">
							{/* Card */}
							<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 hover:bg-white/10 h-full">
								{/* Header */}
								<div className="flex items-start justify-between mb-6">
									<div className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-xl flex items-center justify-center shadow-lg`}>
										<svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm-1 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
										</svg>
									</div>

									<div className="flex items-center space-x-2">
										<div className={`w-3 h-3 rounded-full ${exp.status === 'Current'
												? 'bg-blue-400 animate-pulse'
												: 'bg-green-400'
											}`}></div>
										<span className={`text-sm font-medium ${exp.status === 'Current'
												? 'text-blue-300'
												: 'text-green-300'
											}`}>
											{exp.status}
										</span>
									</div>
								</div>

								{/* Content */}
								<div className="space-y-4">
									<div>
										<h3 className={`text-2xl font-bold text-white mb-2 ${oswald.className} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300`}>
											{exp.position}
										</h3>
										<h4 className={`text-xl font-semibold text-gray-300 ${inter.className}`}>
											{exp.company}
										</h4>
									</div>

									<p className={`text-gray-200 text-base leading-relaxed ${inter.className}`}>
										{exp.description}
									</p>

									{/* Skills */}
									<div className="flex flex-wrap gap-2 mt-6">
										{exp.skills.map((skill, skillIndex) => (
											<span
												key={skillIndex}
												className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-white/20 hover:border-white/30 transition-all duration-300"
											>
												{skill}
											</span>
										))}
									</div>

									{/* Footer */}
									<div className="flex items-center justify-between pt-6 border-t border-white/10">
										<div className="flex items-center space-x-2 text-sm text-gray-400">
											<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
											</svg>
											<span>{exp.period}</span>
										</div>

										<div className="flex items-center space-x-2 text-sm text-gray-400">
											<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
											</svg>
											<span>{exp.location}</span>
										</div>
									</div>
								</div>
							</div>

							{/* Hover Glow Effect */}
							<div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`}></div>
						</div>
					))}
				</div>

			</div>
		</section>
	);
}
