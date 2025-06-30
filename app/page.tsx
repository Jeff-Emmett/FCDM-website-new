import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FontLoader } from "@/components/font-loader"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <FontLoader />
      <Header />

      {/* Hero Section with New Mountain Background */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-background-new.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/90 to-blue-900/90" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="hero-title text-5xl md:text-6xl mb-6 leading-tight font-loading">
            Bring your digital marketing strategy full circle
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-loading">
            We are a boutique digital marketing team committed to helping you succeed at what <em>you</em> do best.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-teal-600 font-loading"
          >
            <Link href="/our-services">See our Services</Link>
          </Button>
        </div>
      </section>

      {/* Services Section - FIXED TEXT VISIBILITY */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-permanent-marker)" }}
            >
              Digital Marketing Solutions for Your Business
            </h2>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Integrated Digital Marketing Strategy */}
            <Card className="text-center p-6 border-none shadow-lg h-full">
              <CardContent className="pt-6">
                <div className="mb-6 h-32 flex items-center justify-center">
                  <Image
                    src="/images/icons/marketing-strategy-green.png"
                    alt="Integrated Digital Marketing Strategy"
                    width={120}
                    height={120}
                    className="mx-auto"
                  />
                </div>
                <h3
                  className="text-xl mb-4 font-bold text-gray-900"
                  style={{ fontFamily: "var(--font-permanent-marker)" }}
                >
                  Integrated Digital Marketing Strategy
                </h3>
                <p className="text-gray-600 mb-4 text-base leading-relaxed">
                  A robust marketing strategy should be rolled out consistently across each avenue you use to converse
                  with your customers. Our holistic approach to your digital success consists of the following
                  components & more:
                </p>
                <ul className="text-left text-gray-600 mb-6 space-y-2 text-sm">
                  <li>• Marketing Funnel Discovery</li>
                  <li>• Newsletter Automation Setup</li>
                  <li>• Social Content Strategy</li>
                  <li>• Promotion & Contest Planning</li>
                </ul>
                <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white">
                  <Link href="/success-stories/integrated-digital-marketing-strategy">See our Success Story</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Digital Media Buys */}
            <Card className="text-center p-6 border-none shadow-lg h-full">
              <CardContent className="pt-6">
                <div className="mb-6 h-32 flex items-center justify-center">
                  <Image
                    src="/images/icons/media-buys-green.png"
                    alt="Digital Media Buys"
                    width={120}
                    height={120}
                    className="mx-auto"
                  />
                </div>
                <h3
                  className="text-xl mb-4 font-bold text-gray-900"
                  style={{ fontFamily: "var(--font-permanent-marker)" }}
                >
                  Digital Media Buys
                </h3>
                <p className="text-gray-600 mb-4 text-base leading-relaxed">
                  Integrated, consistent cross platform messaging is essential to promoting your brand or product. Our
                  media buy tactics work together with your organic post strategy and can incorporate the following
                  channels:
                </p>
                <ul className="text-left text-gray-600 mb-6 space-y-2 text-sm">
                  <li>• Facebook Advertising</li>
                  <li>• Instagram Advertising</li>
                  <li>• Youtube Advertising</li>
                  <li>• Search Advertising</li>
                </ul>
                <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white">
                  <Link href="/success-stories/digital-media-buys">See our Success Story</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Integrations, Analytics & Tracking */}
            <Card className="text-center p-6 border-none shadow-lg h-full">
              <CardContent className="pt-6">
                <div className="mb-6 h-32 flex items-center justify-center">
                  <Image
                    src="/images/icons/integrations.jpg"
                    alt="Integrations, Analytics & Tracking"
                    width={120}
                    height={120}
                    className="mx-auto"
                  />
                </div>
                <h3
                  className="text-xl mb-4 font-bold text-gray-900"
                  style={{ fontFamily: "var(--font-permanent-marker)" }}
                >
                  Integrations, Analytics & Tracking
                </h3>
                <p className="text-gray-600 mb-4 text-base leading-relaxed">
                  An essential part of bringing your digital strategy full circle lies in tracking campaign progress,
                  ensuring targets are being met, and iterating on the ideas that work. Cost per result varies across
                  different industries, which is why we utilize a data based iteration model that suits the needs of any
                  business, utilizing the platforms below and more:
                </p>
                <ul className="text-left text-gray-600 mb-6 space-y-2 text-sm">
                  <li>• Google Analytics</li>
                  <li>• Tag Manager & Tracking Pixels</li>
                  <li>• Ad Campaign Reporting</li>
                </ul>
                <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white">
                  <Link href="/success-stories/integrations-analytics-tracking">See our Success Story</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-background-new.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/90 to-blue-900/90" />
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="section-title text-4xl text-center mb-12 font-loading">Testimonials about Our Work</h2>
          <TestimonialSlider />
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Image
              src="/images/clients-header-hd.png"
              alt="Some of Our Clients"
              width={600}
              height={60}
              className="mx-auto mb-8 h-auto max-w-2xl"
            />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 max-w-6xl mx-auto">
            <Link
              href="https://freeandeasytraveler.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
            >
              <Image
                src="/images/free-and-easy-traveler.jpg"
                alt="Free & Easy Traveler"
                width={210}
                height={210}
                className="max-h-30 w-auto object-contain group-hover:scale-105 transition-transform"
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
                width={210}
                height={210}
                className="max-h-30 w-auto object-contain group-hover:scale-105 transition-transform"
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
                width={210}
                height={210}
                className="max-h-30 w-auto object-contain group-hover:scale-105 transition-transform"
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
                width={210}
                height={210}
                className="max-h-30 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title text-4xl text-gray-900 mb-8 font-loading">Who We Are</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed font-loading">
              Full Circle Digital Marketing came together to amplify messages that we believe in. Although clicks and
              channel growth are a necessary component of any digital marketing strategy, we believe there is a more
              essential, real world impact when a good idea whose time has come hits the mainstream. We aren't your
              typical marketing types - we're not in this for the sake of mindless engagement, but for the
              people-oriented results we see when a good message spreads.
            </p>
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 font-loading">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-background-new.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/90 to-blue-900/90" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="section-title text-4xl mb-6 font-loading">Ready to get noticed online?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-loading">
            Great! If you'd like to learn more about how we can help you get noticed online, click the button below to
            schedule an initial consultation phone call.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-teal-600 font-loading"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
