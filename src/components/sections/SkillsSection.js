export default function SkilssSection({ oswald, inter }) {
	return (
		<section id="skills" className="my-16 px-4 sm:px-6 lg:px-8">
			<h2 className={`text-4xl font-bold text-center text-white mb-8 ${oswald.className} border border-white/50 py-4 px-8 rounded-xl`}>
				Skills
			</h2>

			<h4 className={`text-2xl flex justify-center items-center gap-2 ${oswald.className}`}>

				<div className={`space-y-2 text-white text-2xl flex flex-col items-center ${oswald.className}`}>
					{/* Row 1 */}
					<div className="flex items-center gap-2 flex-wrap justify-center">
						Kotlin
						<img src="/skill_icons/kotlin.png" alt="Kotlin" className="h-7 w-7" />
						<span className="mx-2">•</span>

						Flutter
						<img src="/skill_icons/flutter.png" alt="Flutter" className="h-7 w-7" />
						<span className="mx-2">•</span>

						Jetpack Compose
						<img src="/skill_icons/jetpack_compose.png" alt="Flutter" className="h-7 w-7" />
						<span className="mx-2">•</span>

						Java
						<img src="/skill_icons/java.png" alt="Flutter" className="h-7 w-7" />
						<span className="mx-2">•</span>

						Python
						<img src="/skill_icons/python.png" alt="Jetpack Compose" className="h-7 w-7" />
					</div>

					{/* Row 2 */}
					<div className="flex items-center gap-2 flex-wrap justify-center">
						Django
						<img src="/skill_icons/django.png" alt="Flutter" className="h-7 w-7" />
						<span className="mx-2">•</span>

						NodeJS
						<img src="/skill_icons/nodejs.png" alt="Flutter" className="h-7 w-7" />
						<span className="mx-2">•</span>

						SQLite
						<img src="/skill_icons/sqlite.png" alt="Flutter" className="h-7 w-7" />
						<span className="mx-2">•</span>

						MongoDB
						<img src="/skill_icons/mongodb.png" alt="Flutter" className="h-7 w-7" />
						<span className="mx-2"></span>

					</div>

					{/* Row 3 */}
					<div className="flex items-center gap-2 flex-wrap justify-center">
						Postman
						<img src="/skill_icons/postman.png" alt="Flutter" className="h-7 w-7" />
						<span className="mx-2">•</span>

						Git
						<img src="/skill_icons/git.png" alt="Flutter" className="h-7 w-7" />
						<span className="mx-2">•</span>

						Firebase
						<img src="/skill_icons/firebase.png" alt="Flutter" className="h-7 w-7" />
						<span className="mx-2"></span>
					</div>
				</div>

			</h4>
		</section>
	);
}
