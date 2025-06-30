import Link from "next/link"
import { Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
            <Link
              href="https://www.linkedin.com/company/full-circle-digital-marketing-services/"
              target="_blank"
              className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Full Circle Digital Marketing</h3>
            <p className="text-gray-300">
              We are a boutique digital marketing team committed to helping you succeed at what <em>you</em> do best.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Learn More</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/our-services" className="block text-gray-300 hover:text-white transition-colors">
                Our Services
              </Link>
              <Link href="/success-stories" className="block text-gray-300 hover:text-white transition-colors">
                Success Stories
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Search */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Looking for something in particular?</h3>
            <form className="flex">
              <input
                type="search"
                placeholder="Search this website..."
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-white placeholder-gray-400 focus:outline-none focus:border-teal-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-teal-600 text-white rounded-r-md hover:bg-teal-700 transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            Full Circle Digital Marketing © 2024 · Site Crafted By{" "}
            <Link href="https://kaitschmidek.com/" target="_blank" className="text-teal-400 hover:text-teal-300">
              Kait Schmidek
            </Link>{" "}
            · Theme by{" "}
            <Link href="https://seothemes.com/" target="_blank" className="text-teal-400 hover:text-teal-300">
              SEO Themes
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
