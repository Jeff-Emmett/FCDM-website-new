import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function MediaBuysPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="relative py-20 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-background-new.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/90 to-blue-900/90" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-5xl mb-4 text-white font-bold"
            style={{ fontFamily: "var(--font-permanent-marker)" }}
          >
            Success Story #2: Digital Media Buys
          </h1>
        </div>
      </section>

      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {/* Client Problem */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src="/images/icons/client-problem-icon.png"
                    alt="Client Problem"
                    width={300}
                    height={300}
                    className="mx-auto"
                  />
                </div>
                <div>
                  <h2
                    className="text-3xl mb-6 text-gray-900 font-bold"
                    style={{ fontFamily: "var(--font-permanent-marker)" }}
                  >
                    Client Problem:
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our client was interested in increasing reach and click throughs for their content on Facebook. They
                    had clear targets for desired cost per click, but were having trouble achieving consistent results
                    through Facebook advertising.
                  </p>
                </div>
              </div>

              {/* Our Plan */}
              <div className="grid md:grid-cols-2 gap-8 items-center md:grid-flow-col-dense">
                <div className="md:col-start-2">
                  <Image
                    src="/images/icons/our-plan-icon.png"
                    alt="Our Plan"
                    width={300}
                    height={300}
                    className="mx-auto"
                  />
                </div>
                <div className="md:col-start-1">
                  <h2
                    className="text-3xl mb-6 text-gray-900 font-bold"
                    style={{ fontFamily: "var(--font-permanent-marker)" }}
                  >
                    Our Plan:
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Given the hard & fast targets our client would be measuring ad campaign success by, we planned to
                    experiment with different media such as static images, slideshows, and short & long form video to
                    determine which media formats provided better results. We would take an iterative, data-based
                    approach to replicate content that performed better throughout our experimentation phase. We would
                    re-vamp the audiences targeted by the advertised content to ensure a close demographic fit. Our
                    campaign structure would be modeled to closely follow the naming convention of the client's
                    expeditions for consistency, and links to all active ads would be included in the client's campaign
                    spreadsheet to allow them a first-person perspective on ad performance.
                  </p>
                </div>
              </div>

              {/* Implementation */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src="/images/icons/implementation-icon.png"
                    alt="Implementation"
                    width={300}
                    height={300}
                    className="mx-auto"
                  />
                </div>
                <div>
                  <h2
                    className="text-3xl mb-6 text-gray-900 font-bold"
                    style={{ fontFamily: "var(--font-permanent-marker)" }}
                  >
                    Implementation:
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our first steps involved looking at the client's past campaigns, to determine what strategies had
                    worked and which had underperformed. We decided to move away from short-term giveaway based posts &
                    ads, as they garnered very little engagement and incurred large costs. We suggested the client move
                    towards a 'slow and steady' ad approach, that had reasonable daily budgets to avoid high display
                    frequency, and cut down on cost per click at the same time. This had the added benefit of widening
                    our campaign planning window, which allowed us to be more prepared for ad campaigns that were coming
                    down the pipe. There were many lessons learned through our first experimental rounds of advertising,
                    and within two or three iterations of tweaking ad sets and applying what worked from across the
                    account, we were seeing consistent cost per click (CPC) that was well within the client's targeted
                    range.
                  </p>
                </div>
              </div>

              {/* Results */}
              <div className="grid md:grid-cols-2 gap-8 items-center md:grid-flow-col-dense">
                <div className="md:col-start-2">
                  <Image
                    src="/images/icons/results-icon.png"
                    alt="Results"
                    width={300}
                    height={300}
                    className="mx-auto"
                  />
                </div>
                <div className="md:col-start-1">
                  <h2
                    className="text-3xl mb-6 text-gray-900 font-bold"
                    style={{ fontFamily: "var(--font-permanent-marker)" }}
                  >
                    Results:
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We have successfully run dozens of ad campaigns for our client, consistently providing 125%+ of
                    their expected click throughs on each campaign. Not only are we exceeding the expected readership on
                    the client's content, but we are providing these results at up to 50% under the client's expected
                    budget.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
          </div>
        </div>
      </main>

      {/* CTA Section - Full Width */}
      <section className="relative py-20 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/cta-hero.jpg')",
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
