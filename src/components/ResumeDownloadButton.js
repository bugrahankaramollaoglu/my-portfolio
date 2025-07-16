// components/ResumeDownloadButton.js
"use client";

import { useState } from 'react';
import ContactSection from "@/components/sections/ContactSection";
import { inter, oswald } from "@/components/utilities/fonts";

export default function ResumeDownloadButton({ oswald, inter }) {
	const handleResumeDownload = () => {
		// Create a temporary link element
		const link = document.createElement('a');
		link.href = '/resume.pdf';
		link.download = 'Bugrahan_Karamollaoglu_Resume.pdf';

		// Trigger the download
		document.body.appendChild(link);
		link.click();

		// Clean up
		document.body.removeChild(link);

		// Optional: Add analytics tracking
		if (window.gtag) {
			window.gtag('event', 'download_resume', {
				'event_category': 'engagement',
				'event_label': 'Resume Download'
			});
		}
	};

	return (
		<button
			onClick={handleResumeDownload}
			className={`
                flex items-center justify-center
                space-x-2
                bg-white
                text-black
                px-4 py-2  // Reduced padding for smaller height
                rounded-full
                transition-all
                duration-300
                hover:bg-gray-100
                hover:scale-105
                shadow-md  // Slightly reduced shadow
                hover:shadow-lg
                ${inter.className}
                text-sm  // Smaller text size
                font-medium
            `}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-4 w-4"  // Smaller icon
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
				/>
			</svg>
			<span>Download Resume</span>
		</button>
	);
}
