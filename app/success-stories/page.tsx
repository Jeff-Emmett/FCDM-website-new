import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function SuccessStoriesPage() {
  const successStories = [
    {
      title: "Success Story #1: Integrated Digital Marketing Strategy",
      description:
        "See how our holistic digital strategy helped a business like yours to achieve remarkable growth. Increase your brand awareness, maintain a steady stream of new, interested customers, and communicate consistently to convert and deliver value to your customer base with a plan that takes your strategy Full Circle.",
      icon: "/images/icons/marketing-strategy-green.png",
      link: "/success-stories/integrated-digital-marketing-strategy",
    },
    {
      title: "Success Story #2: Digital Media Buys",
      description:
        "Find out how our iterative, data-based approach to setting and reaching targets with social media ads produces results you can understand and be confident in. Read more to see how we helped build a sustainable and consistent online audience for a client's content.",
      icon: "/images/icons/media-buys-green.png",
      link: "/success-stories/digital-media-buys",
    },
    {
      title: "Success Story #3: Integrations, Analytics & Tracking",
      description:
        "The world of online marketing can be confusing. Read more about our team's experience sifting through all the myriad data from your platforms and breaking it down into actionable insights to grow & improve your strategy every step of the way.",
      icon: "/images/icons/integrations.jpg",
      link: "/success-stories/integrations-analytics-tracking",
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
            Success Stories
          </h1>
        </div>
      </section>

      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {successStories.map((story, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <Image
                    src={story.icon || "/placeholder.svg"}
                    alt={story.title}
                    width={400}
                    height={245}
                    className="mx-auto"
                  />
                </div>
                <div className={`${index % 2 === 1 ? "md:col-start-1" : ""}`}>
                  <h3
                    className="text-2xl mb-4 text-gray-900 font-bold"
                    style={{ fontFamily: "var(--font-permanent-marker)" }}
                  >
                    {story.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">{story.description}</p>
                  <div className="text-center">
                    <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white">
                      <Link href={story.link}>Read More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Client Logos Section */}
          <div className="mt-20 pt-16 border-t border-gray-300">
            <div className="text-center mb-12">
              <Image
                src="/images/clients-header-hd.png"
                alt="Some of Our Clients"
                width={600}
                height={60}
                className="mx-auto mb-8 h-auto max-w-2xl"
              />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 max-w-4xl mx-auto">
              <Link
                href="https://freeandeasytraveler.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
              >
                <Image
                  src="/images/free-and-easy-traveler.jpg"
                  alt="Free & Easy Traveler"
                  width={180}
                  height={180}
                  className="max-h-24 w-auto object-contain group-hover:scale-105 transition-transform"
                />
              </Link>
              <Link
                href="https://breatheinlife.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
              >
                <Image
                  src="/images/breathe-in-life.jpg"
                  alt="Breathe in Life"
                  width={180}
                  height={180}
                  className="max-h-24 w-auto object-contain group-hover:scale-105 transition-transform"
                />
              </Link>
              <Link
                href="https://seekers-media.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
              >
                <Image
                  src="/images/seekers-media.jpg"
                  alt="Seekers Media"
                  width={180}
                  height={180}
                  className="max-h-24 w-auto object-contain group-hover:scale-105 transition-transform"
                />
              </Link>
              <Link
                href="https://pilateswithfadia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
              >
                <Image
                  src="/images/pilates-with-fadia-logo.png"
                  alt="Pilates with Fadia"
                  width={180}
                  height={180}
                  className="max-h-24 w-auto object-contain group-hover:scale-105 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
