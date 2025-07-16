import Image from "next/image";
import apps from "../data/apps";
import articles from "../data/articles";
import { Inter, Lato, Lora, Oswald, Roboto, Ubuntu } from "next/font/google";
import { Typewriter } from "@/components/ui/typewriter";
import { SparklesCore } from "@/components/ui/sparkles"


const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "700"], // weight rat3s
});

const inter = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // weight rat3s
});

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SparklesCore particleColor="#ffffffff" className="absolute inset-0 z-0" />

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
          <h1 className={`text-5xl font-bold ${oswald.className}`}>
            <Typewriter delay={0.5} baseText="Buğrahan Karamollaoğlu." />
          </h1>
          <h4 className={`text-4xl ${oswald.className}`}>Fullstack Mobile Developer</h4>
          <h4 className={`text-3xl flex justify-center items-center gap-2 ${oswald.className}`}>
            Native Android
            <img src="/android.png" alt="Android" className="h-6 w-6" />
            •
            Flutter
            <img src="/flutter.png" alt="Flutter" className="h-6 w-6" />
            •
            Django
            <img src="/django.png" alt="Django" className="h-6 w-6" />
            •
            Nodejs
            <img src="/nodejs.png" alt="Nodejs" className="h-6 w-6" />
          </h4>
        </section>

        <section id="contact" className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">📬 Contact me on</h2>
          <p>Reach out for collaboration or job opportunities:</p>
          <div className="flex justify-center gap-6 text-blue-600">
            <a href="mailto:your@email.com" className="hover:text-blue-400" aria-label="Email">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/yourname" target="_blank" className="hover:text-blue-400" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" className="hover:text-blue-400" aria-label="GitHub">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="text-center space-y-4">
          <div className="relative w-full my-10 h-0.5">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-70"></div>
          </div>

          <p className={`max-w-2xl mx-auto mt-8 ${inter.className} text-lg text-slate-300 leading-relaxed`}>
            I am a <span className="text-white font-semibold">Boğaziçi University</span> graduate programmer developing
            <span className="text-blue-400 font-semibold"> Native Android</span> /
            <span className="text-blue-400 font-semibold"> Flutter</span> apps using a wide span of mobile technologies.
            Currently learning Data Science and Machine Learning to implement Artificial Intelligence Agents in my apps.
          </p>

          {/* Download Button */}
          <a
            href="#apps"
            className="inline-block bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-100 transition-all shadow-sm hover:shadow-md"
          >
            Download Resume
          </a>

          {/* GIF */}
          <button
            className="mx-auto block focus:outline-none mt-2"
            aria-label="Scroll to projects"
          >
            <img
              src="https://i0.wp.com/rambutgelap.com/wp-content/uploads/2022/07/scroll-down-mouse.gif?ssl=1"
              alt="Scroll down mouse GIF"
              width={50}
              height={50}
              className="mx-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </button>
        </section>


        {/* Apps Section */}



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



      </div>
    </main>
  );
}
