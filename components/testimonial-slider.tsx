"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Jacques Aucamp",
    company: "Erika Wessels Jewellery",
    image: "/images/jacques-aucamp.jpg",
    quote:
      "Full Circle has provided us with a comprehensive, fast and well planned digital marketing strategy that has yielded great results for us. Our ad campaigns and newsletters are performing exceptionally well in terms of cost per conversion which can only be attributed to Full Circle's attention to detail with the ad designs, copy-editing and carving up of the budgets for targeted ad groups. I highly recommend leveraging the Full Circle team to any business with a need for comprehensive digital marketing strategy!",
  },
  {
    id: 2,
    name: "Melissa Jol",
    company: "Breathe In Life",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/melissa-croatia-e1533490318497-150x150-VCAO7rAsiHngO8bolJQdBxXnJzVTp1.jpeg",
    quote:
      "Full Circle is an amazing team to work with. Since we started with them, we have seen increases in sales, activity on social media, and overall inquiries about what we do and provide. That is due to their fantastic custom digital marketing strategy they created for our company and their personable approach to working with us. I highly recommend Full Circle not only for their brilliance in the marketing world but also because they are down to earth, kind, and very enjoyable to collaborate with.",
  },
  {
    id: 3,
    name: "Rob Campbell",
    company: "Free & Easy Traveler",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rob-Testimonial-pic-150x150.jpg-F9lYvo4gEHUI13t1Sl218LtCYgDX0H.jpeg",
    quote:
      "The team at Full Circle Digital Marketing are fantastic to work with. They were committed to fine tuning our strategy and with their skills and resources and were able to deliver on our tactical plans. They have the experience and knowledge that elevated our small business digital marketing strategy, increasing our brand awareness and our annual sales through their creative ideas and focused implementation.",
  },
  {
    id: 4,
    name: "Jonny Bierman",
    company: "Eco Escape Travel",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jonny-b-e1535658646997-150x150.jpg-LrFXzlyPhj42YmEsuUjPPu4Jp85K6K.jpeg",
    quote:
      "Working with Full Circle marries professionalism with real people. These are fantastic folks who are world travelers and also amazing humans. They take the time to understand their clients, identify the challenges, turn those challenges into opportunities, and make magic happen. You'll likely have new friends out of this relationship as they're such genuine and honest people, with great intentions.",
  },
  {
    id: 5,
    name: "Sarah Harrill",
    company: "Canadian Artist",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1928-e1535559779952-150x150.jpg-MW3VgDI67w6qK0Xb7NlM3NYMA0v0pY.jpeg",
    quote:
      "Social media marketing is a necessity in growing my community, from projecting a consistent brand voice, to putting out relevant content, and understanding my audience for optimal advertising. Without help from the Full Circle team, I could not fathom doing this on my own. I am an artist, so my business is very personal and it can be difficult for me to promote my work online in an engaging way, so I am lucky to work with such well versed people in this field.",
  },
  {
    id: 6,
    name: "Jim Barr",
    company: "Seekers Media",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jim-Seekers-Media-150x150-qfQrHZDBqNyXKRSYfymt5FyXh5OzgF.png",
    quote:
      "Professional and able to get sh*t done, not in a months time, but today! The team at Full Circle care about their partners, they take the time required to understand your business and it shows. Our results in working with Full Circle have not only reduced our marketing costs, but have allowed Seekers Media to stretch our marketing dollars further then expected.",
  },
]

export function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Create slide groups - 2 testimonials per slide on desktop, 1 on mobile
  const itemsPerSlide = isDesktop ? 2 : 1
  const slideGroups = []

  for (let i = 0; i < testimonials.length; i += itemsPerSlide) {
    slideGroups.push(testimonials.slice(i, i + itemsPerSlide))
  }

  const totalSlides = slideGroups.length

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [totalSlides])

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slideGroups.map((group, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0 flex gap-4 px-4">
              {group.map((testimonial) => (
                <div key={testimonial.id} className={`${isDesktop ? "w-1/2" : "w-full"}`}>
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full mr-4 object-cover"
                        />
                        <div>
                          <h4 className="testimonial-name font-normal">{testimonial.name}</h4>
                          <p className="text-sm text-white/80 font-roboto">{testimonial.company}</p>
                        </div>
                      </div>
                      <blockquote className="text-sm leading-relaxed">"{testimonial.quote}"</blockquote>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {slideGroups.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/40"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
