import { Link } from "react-router-dom"

interface HeroProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  backgroundImage: string
}

const Hero = ({ title, subtitle, ctaText, ctaLink, backgroundImage }: HeroProps) => {
  return (
    <div
      className="relative bg-cover bg-center py-24 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">{subtitle}</p>
        <Link
          to={ctaLink}
          className="inline-block bg-orange-600 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-700 transition-colors"
        >
          {ctaText}
        </Link>
      </div>
    </div>
  )
}

export default Hero
