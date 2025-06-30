"use client"

import { useEffect } from "react"

export function FontLoader() {
  useEffect(() => {
    // Check if fonts are loaded and add class to body
    const checkFontsLoaded = () => {
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
          document.body.classList.add("fonts-loaded")
        })
      } else {
        // Fallback for browsers without Font Loading API
        setTimeout(() => {
          document.body.classList.add("fonts-loaded")
        }, 100)
      }
    }

    checkFontsLoaded()
  }, [])

  return null
}
