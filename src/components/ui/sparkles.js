"use client"

import { useEffect, useRef, useState } from "react"

export const SparklesCore = ({
	id = "tsparticles",
	background = "transparent",
	minSize = 0.6,
	maxSize = 1.4,
	particleDensity = 100,
	className = "h-full w-full",
	particleColor = "#ffffffff",
}) => {
	const canvasRef = useRef(null)
	const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })

	useEffect(() => {
		if (typeof window === "undefined") return

		setDimensions({
			width: window.innerWidth,
			height: window.innerHeight,
		})

		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext("2d")
		if (!ctx) return

		let particles = []
		let animationFrameId

		canvas.width = window.innerWidth
		canvas.height = window.innerHeight

		function Particle() {
			this.x = Math.random() * canvas.width
			this.y = Math.random() * canvas.height
			this.size = Math.random() * (maxSize - minSize) + minSize
			this.speedX = Math.random() * 0.5 - 0.25
			this.speedY = Math.random() * 0.5 - 0.25

			this.update = () => {
				this.x += this.speedX
				this.y += this.speedY

				if (this.x > canvas.width) this.x = 0
				if (this.x < 0) this.x = canvas.width
				if (this.y > canvas.height) this.y = 0
				if (this.y < 0) this.y = canvas.height
			}

			this.draw = () => {
				if (!ctx) return
				ctx.fillStyle = particleColor
				ctx.beginPath()
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
				ctx.fill()
			}
		}

		const init = () => {
			particles = []
			for (let i = 0; i < particleDensity; i++) {
				particles.push(new Particle())
			}
		}

		const animate = () => {
			if (!ctx) return
			ctx.clearRect(0, 0, canvas.width, canvas.height)

			particles.forEach((particle) => {
				particle.update()
				particle.draw()
			})

			animationFrameId = requestAnimationFrame(animate)
		}

		init()
		animate()

		const handleResize = () => {
			if (typeof window === "undefined") return

			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			})
			init()
		}

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
			cancelAnimationFrame(animationFrameId)
		}
	}, [maxSize, minSize, particleColor, particleDensity])

	return (
		<canvas
			ref={canvasRef}
			id={id}
			className={className}
			style={{
				background,
				width: dimensions.width,
				height: dimensions.height,
			}}
		/>
	)
}
