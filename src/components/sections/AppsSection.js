
import apps from "../../data/apps";



{/* about section */ }
export default function AboutSection({ oswald, inter }) {
	return (


		<section id="apps" className="my-16 px-4 sm:px-6 lg:px-8">
			<h2 className={`text-4xl font-bold text-center text-white mb-8 ${oswald.className} border-1 border-white/50 py-4 px-8 rounded-xl`}>
				Apps
			</h2>

			<div className="space-y-6">
				{apps.map((app) => {
					// Language property'sine göre stil belirleme
					const getTechStackStyle = (language) => {
						switch (language?.toLowerCase()) {
							case 'android':
								return 'bg-gradient-to-br from-green-500 to-green-600 group-hover:from-green-400 group-hover:to-green-500';
							case 'flutter':
								return 'bg-gradient-to-br from-blue-500 to-blue-600 group-hover:from-blue-400 group-hover:to-blue-500';
							default:
								return 'bg-gradient-to-br from-purple-500 to-purple-600 group-hover:from-purple-400 group-hover:to-purple-500';
						}
					};

					const getTechStackIcon = (language) => {
						switch (language?.toLowerCase()) {
							case 'android':
								return (
									<svg className="w-8 h-8 text-white transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
										<path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
									</svg>
								);
							case 'flutter':
								return (
									<svg
										className="w-8 h-8 text-cyan-400 transition-transform group-hover:scale-110"
										viewBox="0 0 256 317"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
									>
										<path d="M128.2 0L0 127.9l42.7 42.8 85.5-85.4L213.8 0h-85.6z" />
										<path d="M85.4 170.8l42.7 42.7 127.9-128H170.9l-85.5 85.3z" />
										<path d="M128.2 256.3L85.4 213.5 128.2 170.8l42.8 42.7-42.8 42.8z" />
									</svg>
								);
							default:
								return (
									<svg className="w-8 h-8 text-white transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
									</svg>
								);
						}
					};

					return (
						<a
							key={app.id}
							href={app.url}
							target="_blank"
							rel="noopener noreferrer"
							className="w-full block backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-2xl overflow-hidden transition-all hover:scale-[1.01] hover:shadow-xl text-white group"
						>
							<div className="flex">
								{/* Ana içerik alanı */}
								<div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-5 px-6 py-5">
									<img
										src={app.icon}
										alt={`${app.name} Icon `}
										className="w-20 h-20 rounded-xl object-contain p-2"
									/>
									<div className="flex-1">
										<h3 className={`text-2xl font-bold ${oswald.className}`}>{app.name}</h3>
										<p className={`text-base opacity-80 ${inter.className}`}>{app.definition}</p>
										<p className={`text-base mt-1 text-slate-300 ${inter.className}`}>
											<span className={`text-base font-semibold ${inter.className}`}>Tech Stack:</span> {app.tech_stack}
										</p>
									</div>
								</div>

								{/* Sağ taraftaki dinamik renkli alan */}
								<div className={`w-20 flex items-center justify-center transition-all ${getTechStackStyle(app.language)}`}>
									{getTechStackIcon(app.language)}
								</div>
							</div>
						</a>
					);
				})}
			</div>
		</section>


	);
}




