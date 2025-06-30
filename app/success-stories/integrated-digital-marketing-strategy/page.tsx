import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function IntegratedStrategyPage() {
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
            Success Story #1: Integrated Digital Marketing Strategy
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
                    Our client had very little experience with digital strategy and cohesion of brand message and
                    campaigns, and no known key performance indicators (KPIs) to track and measure results, or determine
                    their direction moving forward. Our client was in need of a holistic digital marketing strategy.
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
                    Construct a custom made digital funnel strategy, integrating various platforms to synthesize a
                    consistent brand message across all channels, ads and campaigns. The system will continuously
                    generate new leads from a cold audience, warm them up through automated email and advertising
                    processes, and offer lower funnel incentives through evergreen remarketing campaigns to encourage
                    conversion. The system will essentially offer funnel-appropriate messaging for the entire customer
                    life cycle on all appropriate customer channels. Our aim is to provide timely, relevant and helpful
                    information to customers as they progress through the cycle of discovering, learning about, trusting
                    and converting with the client's brand.
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
                    Our integration of client platforms included Facebook, Instagram, MailChimp, Google Ads, Analytics,
                    MsgHero, Basecamp, Olark, and a custom database, most of which occurred through Zapier. We rolled
                    out campaigns by funnel level, with Reach and Page Like ads via Facebook and Instagram to reach high
                    funnel level cold leads and encourage engagement with inspiring content. We focused webclick ads to
                    retarget the middle funnel (i.e. the people engaging with our high level content, such as website
                    visitors), delivering targeted messaging towards people who may be deciding between various brands.
                    For our lower level audience who were closest to conversion (i.e. audiences who have spent the most
                    time on our site), we put out conversion oriented content such as promotions, messenger ads, FAQs to
                    answer last minute questions, and so on. We created stats reporting dashboards and a procedure for
                    monthly updates on budget and KPIs for each funnel level.
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
                    The client was very happy with the continuous growth seen on all channels. Newsletter growth was
                    +200 subscribers/week, Facebook and Instagram channels were growing on the order of 1500 - 6000
                    followers per month, and conversions were coming in within our target ROI of $150 per customer. Our
                    return on ad spend (ROAS) was consistently sitting around 2000%. Some of our lower level specific
                    content was bringing in conversions for as little as $5 to small, targeted audiences. Mission
                    accomplished!
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
