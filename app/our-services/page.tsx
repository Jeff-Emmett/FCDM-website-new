import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: "Integrated Digital Marketing Strategy",
      description:
        "A robust marketing strategy should be rolled out consistently across each avenue you use to converse with your customers. Our holistic approach to your digital success consists of the following components & more:",
      features: [
        "Marketing Funnel Discovery",
        "Newsletter Automation Setup",
        "Social Content Strategy",
        "Promotion & Contest Planning",
      ],
      icon: "/images/icons/marketing-strategy-green.png",
      successStoryLink: "/success-stories/integrated-digital-marketing-strategy",
    },
    {
      title: "Digital Media Buys",
      description:
        "Integrated, consistent cross platform messaging is essential to promoting your brand or product. Our media buy tactics work together with your organic post strategy and can incorporate the following channels:",
      features: ["Facebook Advertising", "Instagram Advertising", "Youtube Advertising", "Search Advertising"],
      icon: "/images/icons/media-buys-green.png",
      successStoryLink: "/success-stories/digital-media-buys",
    },
    {
      title: "Integrations, Analytics & Tracking",
      description:
        "An essential part of bringing your digital strategy full circle lies in tracking campaign progress, ensuring targets are being met, and iterating on the ideas that work. Cost per result varies across different industries, which is why we utilize a data based iteration model that suits the needs of any business, utilizing the platforms below and more:",
      features: ["Google Analytics", "Tag Manager & Tracking Pixels", "Ad Campaign Reporting"],
      icon: "/images/icons/integrations.jpg",
      successStoryLink: "/success-stories/integrations-analytics-tracking",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header with New Mountain Background */}
      <section className="relative py-20 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-background-new.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/90 to-blue-900/90" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl mb-4 text-white font-bold" style={{ fontFamily: "var(--font-permanent-marker)" }}>
            Our Services
          </h1>
        </div>
      </section>

      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <Image
                    src={service.icon || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={245}
                    className="mx-auto"
                  />
                </div>
                <div className={`${index % 2 === 1 ? "md:col-start-1" : ""}`}>
                  <h2
                    className="text-3xl mb-4 text-gray-900 font-bold"
                    style={{ fontFamily: "var(--font-permanent-marker)" }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="list-none text-gray-700 mb-6 space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-teal-600 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white">
                      <Link href={service.successStoryLink}>See our Success Story</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
