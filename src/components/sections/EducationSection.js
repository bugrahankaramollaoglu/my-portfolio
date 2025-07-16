export default function EducationSection({ oswald, inter }) {
	const educationData = [
		{
			institution: "Boğaziçi University",
			period: "2020-2025",
			location: "İstanbul",
			degree: "Bachelor's Degree",
			field: "Western Languages and Literatures",
			type: "university",
			status: "Completed"
		},
		{
			institution: "Ecole 42",
			period: "2022-2024",
			location: "İstanbul",
			field: "Software Engineering with C/C++",
			type: "coding-school",
			status: "Completed"
		},
		{
			institution: "Google Academy",
			period: "2023-2024",
			location: "Online",
			field: "Flutter & Project Management",
			type: "certification",
			status: "Completed"
		}
	];

	const extracurriculars = [
		"Athletism Club",
		"Computer Science Club"
	];

	return (
		<section id="education" className="my-16 px-4 sm:px-6 lg:px-8">
			<h2 className={`text-4xl font-bold text-center text-white mb-12 ${oswald.className} border border-white/50 py-4 px-8 rounded-xl`}>
				Education
			</h2>

			<div className="max-w-4xl mx-auto">
				{/* Education Timeline */}
				<div className="space-y-8">
					{educationData.map((edu, index) => (
						<div key={index} className="relative">
							{/* Timeline Line */}
							{index !== educationData.length - 1 && (
								<div className="absolute left-8 top-16 w-0.5 h-16 bg-gradient-to-b from-blue-400 to-purple-500"></div>
							)}

							{/* Education Card */}
							<div className="flex items-start space-x-6">
								{/* Timeline Dot */}
								<div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center border-4 border-white/20 shadow-lg">
									{edu.type === 'university' && (
										<svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
											<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
										</svg>
									)}
									{edu.type === 'coding-school' && (
										<svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
										</svg>
									)}
									{edu.type === 'certification' && (
										<svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
										</svg>
									)}
								</div>

								{/* Content */}
								<div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 hover:bg-white/15">
									<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
										<h3 className={`text-2xl font-bold text-white ${oswald.className}`}>
											{edu.institution}
										</h3>
										<div className="flex items-center space-x-4 text-sm text-gray-300">
											<span className="px-3 py-1 bg-blue-500/20 rounded-full border border-blue-400/30">
												{edu.period}
											</span>
											<span className="flex items-center space-x-1">
												<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
													<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
												</svg>
												<span>{edu.location}</span>
											</span>
										</div>
									</div>

									{edu.degree && (
										<p className={`text-blue-300 font-medium mb-2 ${inter.className}`}>
											{edu.degree}
										</p>
									)}

									<p className={`text-gray-200 text-lg ${inter.className}`}>
										{edu.field}
									</p>
								</div>
							</div>
						</div>


					))}
					{/* Extracurricular Activities */}
					<div className="bg-gradient-to-r from-slate-900/50 to-gray-900/50 rounded-2xl p-8 border border-white/20 backdrop-blur-sm">
						<h3 className={`text-2xl font-bold text-white mb-6 ${oswald.className} flex items-center space-x-3`}>
							<div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
								<svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
								</svg>
							</div>
							<span>Extracurricular Activities</span>
						</h3>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{extracurriculars.map((activity, index) => (
								<div key={index} className="bg-white/5 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 hover:bg-white/10 group">
									<div className="flex items-center space-x-3">
										<div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full group-hover:animate-pulse"></div>
										<span className={`text-gray-200 font-medium ${inter.className}`}>{activity}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
