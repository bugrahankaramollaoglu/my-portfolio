import { Inter, Lato, Lora, Oswald, Roboto, Ubuntu } from "next/font/google";

export const oswald = Oswald({
	subsets: ["latin"],
	weight: ["300", "700"],
});

export const inter = Lato({
	subsets: ["latin"],
	weight: ["400", "700"],
});

// You can export others too if you’ll need them later:
export const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
export const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "700"] });
