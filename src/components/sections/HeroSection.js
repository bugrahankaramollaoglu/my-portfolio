import Image from "next/image";
import { Typewriter } from "@/components/ui/typewriter";


export default function HeroSection({ oswald, inter }) {
	return (

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

	);
}
