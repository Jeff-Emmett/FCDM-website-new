import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function IntegrationsPage() {
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
            Success Story #3: Integrations, Analytics & Tracking
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
                    Our client was overwhelmed with data flowing from various ad managers, analytics platforms, and
                    their own reports. They were having a hard time determining which metrics needed their attention,
                    and what could be done to improve on those results in future campaigns.
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
                    As part of our discovery process, we planned to meet with the client to better understand the
                    customer journey experienced by users of our client's service. We then planned to map each stage of
                    customer acquisition onto a marketing funnel consisting of awareness (high level), consideration
                    (mid level) and conversion (low level), breaking each step down into multiple micro-goals that could
                    be used to identify problems in achieving the client's major targets.
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
                    Organizing large amounts of information requires some creativity to present the data in a clear &
                    relevant way. In our reporting dashboard, we colour-coded each data stream to coordinate with its
                    level in the marketing funnel. With this system, the client's management team could easily pick out
                    key performance indicators, while department managers were able to focus on micro-goals more
                    relevant to their departments. We also included the client's budgeting and optimal targets on the
                    reporting dashboard, so that they could understand their financial investment and success at
                    reaching their targets at a glance. We provided the client with bi-weekly updates on all performance
                    indicators to allow for regular improvements to their digital marketing efforts.
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
                    The client was extremely satisfied with the analytics & tracking dashboard that we provided them.
                    Their ability to understand the effect of their online campaigns immediately after they concluded
                    allowed them to determine which tactics and campaigns were more effective in helping them reach
                    their goals. We were able to feed back the knowledge gained from our tracking dashboard into newly
                    launched campaigns to improve the client's return on investment.
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
