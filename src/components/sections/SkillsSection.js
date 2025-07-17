export default function SkillsSection({ oswald, inter }) {
	// Skills data to make it cleaner & easier to maintain:
	const skills = [
		{ name: "Kotlin", icon: "/skill_icons/kotlin.png" },
		{ name: "Flutter", icon: "/skill_icons/flutter.png" },
		{ name: "Jetpack Compose", icon: "/skill_icons/jetpack_compose.png" },
		{ name: "Java", icon: "/skill_icons/java.png" },
		{ name: "Python", icon: "/skill_icons/python.png" },
		{ name: "Django", icon: "/skill_icons/django.png" },
		{ name: "NodeJS", icon: "/skill_icons/nodejs.png" },
		{ name: "SQLite", icon: "/skill_icons/sqlite.png" },
		{ name: "MongoDB", icon: "/skill_icons/mongodb.png" },
		{ name: "Postman", icon: "/skill_icons/postman.png" },
		{ name: "Git", icon: "/skill_icons/git.png" },
		{ name: "Firebase", icon: "/skill_icons/firebase.png" },
	];

	return (
		<section id="skills" className="my-16 px-4 sm:px-6 lg:px-8">
			<h2
				className={`text-4xl font-bold text-center text-white mb-8 border border-white/50 py-4 px-8 rounded-xl ${oswald.className}`}
			>
				Skills
			</h2>

			<div
				className={`flex flex-wrap justify-center gap-6 max-w-4xl mx-auto text-white text-2xl ${oswald.className}`}
			>
				{skills.map(({ name, icon }) => (
					<div
						key={name}
						className="flex items-center gap-2 whitespace-nowrap"
					>
						<span>{name}</span>
						<img src={icon} alt={name} className="h-7 w-7 object-contain" />
					</div>
				))}
			</div>
		</section>
	);
}
