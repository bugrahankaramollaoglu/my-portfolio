import Image from "next/image";
import apps from "../data/apps"
import articles from "../data/articles"

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mt-10 space-y-16">

        {/* Hero Section */}

        <section className="space-y-4 text-center">
          <Image
            src="/avatar.jpg"
            alt="Buğrahan Karamollaoğlu"
            width={200}
            height={200}
            className="mx-auto rounded-full border-4"
          />
          <h1 className="text-4xl font-bold">Buğrahan Karamollaoğlu</h1>
          <h4 className="text-3xl">Mobile Developer</h4>
        </section>

        {/* About me Section */}

        <section id="about" className="text-center space-y-4">
          <div className="h-px my-6 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          <p className="max-w-xl mx-auto">
            I'm a self-driven mobile developer focused on building clean, fast, and scalable apps using Flutter.
            With a background in English Language & Literature, I combine logical thinking with strong communication.
          </p>
          <a href="#apps" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
            Download Resume
          </a>
        </section>

        {/* Apps Section */}

        <section id="apps" className="space-y-10">
          <h2 className="text-3xl font-bold text-center">📱 Apps</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {apps.map((app, idx) => (
              <div
                key={idx}
                className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 transition hover:scale-[1.015] hover:shadow-2xl duration-300"
              >
                {/* Top Row: Small Image + Title */}
                <div className="flex items-start gap-4">
                  {app.image && (
                    <Image
                      src={app.image}
                      alt={app.title}
                      width={80}
                      height={80}
                      className="rounded-xl object-cover"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-white">{app.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {app.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-white/20 text-white px-2 py-1 rounded-full backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-200 mt-4 text-sm">{app.description}</p>

                {/* Links */}
                <div className="flex gap-6 mt-4 text-sm">
                  {app.playStore && (
                    <a
                      href={app.playStore}
                      target="_blank"
                      className="text-blue-300 hover:text-blue-400 underline"
                    >
                      📲 Play Store
                    </a>
                  )}
                  {app.github && (
                    <a
                      href={app.github}
                      target="_blank"
                      className="text-blue-300 hover:text-blue-400 underline"
                    >
                      🛠 GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Articles Section */}
        <section id="articles" className="space-y-4">
          <h2 className="text-2xl font-semibold">✍️ Medium Articles</h2>
          <ul className="list-disc list-inside space-y-2 mx-auto">

            {articles.map((article, idx) => (
              <li key={idx}>
                <a href={article.url} target="_blank" className="text-blue-600 hover:underline">
                  {article.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="skills" className="space-y-4 text-center">
          <h2 className="text-2xl font-semibold">🛠️ Skills</h2>
          <div className="flex flex-wrap justify gap-4">
            {["Flutter", "Dart", "Firebase", "Riverpod", "REST APIs", "MongoDB", "Git"].map(skill => (
              <span key={skill} className="px-3 py-1 bg-blue-500 rounded-full shadow-sm">{skill}</span>
            ))}
          </div>
        </section>

        <section id="contact" className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">📬 Contact</h2>
          <p>Reach out for collaboration or job opportunities:</p>
          <div className="space-x-4">
            <a href="mailto:your@email.com" className="text-blue-600 hover:underline">Email</a>
            <a href="https://linkedin.com/in/yourname" className="text-blue-600 hover:underline" target="_blank">LinkedIn</a>
            <a href="https://github.com/yourusername" className="text-blue-600 hover:underline" target="_blank">GitHub</a>
          </div>
        </section>


      </div>
    </main>
  );
}
