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
              I write & publish apps along with writing Medium articles on Medium, mostly on Android.
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
