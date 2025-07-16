import Image from "next/image";
import apps from "../data/apps";
import articles from "../data/articles";
import { Inter, Lato, Lora, Oswald, Roboto, Ubuntu } from "next/font/google";
import { Typewriter } from "@/components/ui/typewriter";
import { SparklesCore } from "@/components/ui/sparkles"
import { Mail, Github, Linkedin } from "lucide-react";
import { FaMedium, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


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
      {/* <SparklesCore particleColor="#ffffffff" className="absolute inset-0 z-0" /> */}
      <SparklesCore particleColor="#ffffffff" className="absolute inset-0 z-0 pointer-events-none" />

      <div className="space-y-16">

        {/* Hero Section */}

        <section className="space-y-4 text-center">
          <Image
            src="/avatar.png"
            alt="Buğrahan Karamollaoğlu"
            width={200}
            height={200}
            className="mx-auto rounded-full border-4"
          />
          <h1 className={`text-5xl font-bold ${oswald.className}`}>
            Buğrahan Karamollaoğlu
          </h1>
          <h4 className={`text-3xl mb-15 text-blue-500 font-bold ${inter.className}`}>
            <Typewriter delay={0.5} baseText="Fullstack Mobile Developer." />
          </h4>
          <h4 className={`text-3xl flex justify-center items-center gap-2 ${oswald.className}`}>
            Native Android
            <img src="/icons/android.png" alt="Android" className="h-6 w-6" />
            •
            Flutter
            <img src="/icons/flutter.png" alt="Flutter" className="h-6 w-6" />
            •
            Django
            <img src="/icons/django.png" alt="Django" className="h-6 w-6" />
            •
            Nodejs
            <img src="/icons/nodejs.png" alt="Nodejs" className="h-6 w-6" />
          </h4>
        </section>

        {/* contact section */}

        <section id="contact" className="text-center">

          <h2 className={`text-lg font-semibold flex justify-center items-center gap-3 ${inter.className}`}>

            Contact me on

            <a
              href="https://linkedin.com/in/bugrahankaramollaoglu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaLinkedin className="w-6 h-6 cursor-pointer" />
            </a>

            <a href="mailto:bugrahankaramollaolgu@gxample.com" aria-label="Email" className="text-blue-600 hover:text-blue-800">
              <FaEnvelope className="w-6 h-6 cursor-pointer" />
            </a>

            <a
              href="https://github.com/bugrahankaramollaoglu"
              target="_blank"
              aria-label="Github"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaGithub className="w-6 h-6 cursor-pointer" />
            </a>
            <a
              href="https://medium.com/@bugrahankaramollaoglu"
              target="_blank"
              aria-label="Medium"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaMedium className="w-6 h-6 cursor-pointer" />
            </a> •
            {/* Download Button */}
            <a
              href="#apps"
              className={`inline-block font-semibold bg-white text-black px-3 py-1 text-sm rounded-xl hover:bg-gray-100 transition-all shadow-sm hover:shadow-md ${inter.className}`}
            >
              Download Resume
            </a>
          </h2>


        </section>



        {/* About Me Section */}
        <section id="about" className="text-center space-y-4">
          {/* Flex container for paragraph + image */}
          <div className="flex items-center justify-center gap-6">

            {/* About Me paragraph */}
            <p className={`${inter.className} text-lg text-slate-300 leading-relaxed flex-1 text-left`}>
              I am a <span className="text-white font-semibold">Boğaziçi University</span> graduate programmer developing
              <span className="text-blue-400 font-semibold"> Native Android</span> /
              <span className="text-blue-400 font-semibold"> Flutter</span> apps using a wide span of mobile technologies.
              I write & publish apps along with writing Medium articles on Medium.
              Currently learning Data Science and Machine Learning to implement Artificial Intelligence Agents in my apps.
            </p>

            {/* Scroll down mouse GIF */}
            <button
              className="focus:outline-none"
              aria-label="Scroll to projects"
            >
              <img
                src="https://i0.wp.com/rambutgelap.com/wp-content/uploads/2022/07/scroll-down-mouse.gif?ssl=1"
                alt="Scroll down mouse GIF"
                width={50}
                height={50}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </button>
          </div>
        </section>


        {/* Apps Section */}

        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

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


        {/* Articles Section */}

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



      </div>
    </main>
  );
}
