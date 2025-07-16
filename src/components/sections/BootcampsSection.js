export default function BootcampsSection({ oswald, inter }) {

	const certificationsData = [
		{
			institution: "Kasım Adalan Bootcamp",
			period: "2025",
			location: "Pupilica",
			field: "Android Development with Kotlin",
			type: "certification",
			status: "Completed",
			color: "from-purple-500 to-white-600"
		},
		{
			institution: "Atıl Samancıoğlu Android I-II",
			period: "2023",
			location: "Udemy",
			field: "Android Fundamentals & Advanced",
			type: "certification",
			status: "Completed",
			color: "from-green-500 to-emerald-600"
		},
		{
			institution: "Flutter with Max Schwarzmüller",
			period: "2022",
			location: "Udemy",
			field: "Flutter Development",
			type: "certification",
			status: "Completed",
			color: "from-blue-500 to-cyan-600"
		},
		{
			institution: "Project Management",
			period: "2023",
			location: "Coursera",
			field: "Flutter Development",
			type: "certification",
			status: "Completed",
			color: "from-orange-500 to-white-600"
		},

	];

	return (

		<section id="bootcamps" className="my-16 px-4 sm:px-6 lg:px-8">

			<h2 className={`text-4xl font-bold text-center text-white mb-12 mt-8 ${oswald.className} border border-white/50 py-4 px-8 rounded-xl`}>
				Bootcamps & Certificates
			</h2>

			{/* Certificates & Bootcamps */}
			<div className="mb-16">

				<div className="grid md:grid-cols-2 gap-8">
					{certificationsData.map((cert, index) => (
						<div key={index} className="group relative">
							{/* Card */}
							<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 hover:bg-white/10">
								{/* Header with Icon */}
								<div className="flex items-start justify-between mb-6">
									<div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center shadow-lg`}>
										{cert.type === 'bootcamp' && (
											<svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
											</svg>
										)}
										{cert.type === 'certification' && (
											<svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
											</svg>
										)}
									</div>

									<div className="flex items-center space-x-2">
										<div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
										<span className="text-green-300 text-sm font-medium">Completed</span>
									</div>
								</div>

								{/* Content */}
								<div className="space-y-4">
									<h4 className={`text-xl font-bold text-white ${oswald.className} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300`}>
										{cert.institution}
									</h4>

									<p className={`text-gray-200 text-base leading-relaxed ${inter.className}`}>
										{cert.field}
									</p>

									<div className="flex items-center justify-between pt-4 border-t border-white/10">
										<div className="flex items-center space-x-2 text-sm text-gray-400">
											<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
											</svg>
											<span>{cert.period}</span>
										</div>

										<div className="flex items-center space-x-2 text-sm text-gray-400">
											<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
											</svg>
											<span>{cert.location}</span>
										</div>
									</div>
								</div>
							</div>

							{/* Hover Glow Effect */}
							<div className={`absolute inset-0 bg-gradient-to-r ${cert.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`}></div>
						</div>
					))}
				</div>
			</div>


		</section>

	);
}
