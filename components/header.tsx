"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/our-services" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <header className="relative sticky top-0 z-50">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-background.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-teal-400/60 via-teal-500/50 to-teal-500/55" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex items-center justify-between h-32">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/full-circle-logo-black.png"
              alt="Full Circle Digital Marketing"
              width={400}
              height={120}
              className="h-24 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-teal-200 font-normal transition-colors tracking-wide text-xl"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-gray-700 hover:text-teal-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
