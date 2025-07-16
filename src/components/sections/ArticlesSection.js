import articles from "../../data/articles";

export default function ArticlesSection({ oswald, inter }) {
	return (

		<section id="articles" className="my-16 px-4 sm:px-6 lg:px-8">
			<h2 className={`text-4xl font-bold text-center text-white mb-8 ${oswald.className} border border-white/50 py-4 px-8 rounded-xl`}>
				Medium Articles
			</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
				{articles.map((article) => (
					<div key={article.id} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 transition hover:scale-[1.01] hover:shadow-xl">
						<a
							href={article.url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-cyan-400 text-lg font-semibold hover:underline block mb-2"
						>
							{article.name}
						</a>
						<p className="text-sm text-slate-300">{article.definition}</p>
					</div>
				))}
			</div>
		</section>

	);
}
