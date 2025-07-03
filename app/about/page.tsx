import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Header Section with Palm Trees Background */}
      <section className="relative py-32 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/full-circle-digital-marketing-img-2.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/90 to-blue-900/90" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* About Us Title in Permanent Marker */}
          <h1 className="section-title text-6xl mb-8 text-white">About Us</h1>
          {/* Intro Text in Oswald */}
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            We're here to amplify messages we believe in. If your product or service provides an unmistakable benefit to
            your customers and the world around them, we want to see you succeed. Get to know us below, and get in
            touch!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* MEET THE TEAM SECTION */}
          <div className="max-w-6xl mx-auto">
            <h3 className="section-title text-4xl text-center mb-16 text-gray-900">Meet the Team</h3>

            {/* TWO-COLUMN TEAM LAYOUT */}
            <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
              {/* JEFF EMMETT - Left column */}
              <div className="text-center bg-white">
                {/* SQUARE PHOTO */}
                <div className="mb-8">
                  <Image
                    src="/images/jeff-emmett.jpg"
                    alt="Jeff Emmett"
                    width={320}
                    height={320}
                    className="mx-auto rounded-lg object-cover w-80 h-80 shadow-lg border-4 border-gray-100"
                  />
                </div>
                {/* NAME in Permanent Marker */}
                <h3 className="service-title text-3xl mb-3 text-gray-900">Jeff Emmett</h3>
                {/* FOUNDER TITLE in italics */}
                <p className="text-gray-600 italic mb-6 text-lg">Lead Marketer</p>
                {/* BIO TEXT */}
                <p className="text-gray-700 leading-relaxed text-base px-4">
                  With over 10 years of Social Media & Digital Marketing Strategy experience, Jeff is a self-professed
                  "idea guy", and knows how to implement them. Having planned & built out widely varying campaigns
                  across multiple platforms and industry verticals, he's learned the importance of trial and error in
                  making digital strategies succeed.
                </p>
              </div>

              {/* MARCO BENINATO - Right column */}
              <div className="text-center bg-white">
                {/* SQUARE PHOTO */}
                <div className="mb-8">
                  <Image
                    src="/images/marco-beninato.jpg"
                    alt="Marco Beninato"
                    width={320}
                    height={320}
                    className="mx-auto rounded-lg object-cover w-80 h-80 shadow-lg border-4 border-gray-100"
                  />
                </div>
                {/* NAME in Permanent Marker */}
                <h3 className="service-title text-3xl mb-3 text-gray-900">Marco Beninato</h3>
                {/* LOGISTICS COORDINATOR TITLE in italics */}
                <p className="text-gray-600 italic mb-6 text-lg">Logistics Coordinator</p>
                {/* BIO TEXT */}
                <p className="text-gray-700 leading-relaxed text-base px-4">With strong skills in logistics and operations, Marco is a master of digital organization.  His attention to detail and incredible memory make him an indispensible member of the Full Circle team.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* CTA Section - Ready to get noticed online? */}
      <section className="relative py-20 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-background.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/90 to-blue-900/90" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="section-title text-4xl mb-6">Ready to get noticed online?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Great! If you'd like to learn more about how we can help you get noticed online, click the button below to
            schedule an initial consultation phone call.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-teal-600"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
