import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const useGSAPAnimations = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  // Page entrance animation
  const animatePageEntrance = (elements: string[]) => {
    const tl = gsap.timeline()
    
    elements.forEach((selector, index) => {
      tl.fromTo(
        selector,
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        index * 0.15
      )
    })
    
    return tl
  }

  // Hover animations for interactive elements
  const addHoverAnimation = (element: string, options?: any) => {
    const el = document.querySelector(element)
    if (!el) return

    const defaultOptions = {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
      ...options
    }

    el.addEventListener('mouseenter', () => {
      gsap.to(el, {
        scale: defaultOptions.scale,
        duration: defaultOptions.duration,
        ease: defaultOptions.ease,
      })
    })

    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        scale: 1,
        duration: defaultOptions.duration,
        ease: defaultOptions.ease,
      })
    })
  }

  // Stagger animation for widget grids - Clean pop-up effect
  const animateWidgetGrid = (widgetSelector: string) => {
    const widgets = document.querySelectorAll(widgetSelector)
    
    // First, add initial state class and set initial values
    widgets.forEach((widget) => {
      widget.classList.add('gsap-initial')
      gsap.set(widget, {
        opacity: 0,
        scale: 0.95,
        transformOrigin: "center center"
      })
    })

    // Then animate from initial state
    gsap.to(widgets, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      stagger: 0.08,
      ease: "back.out(1.2)",
      transformOrigin: "center center",
      onComplete: () => {
        // Remove initial class and clear all GSAP properties
        widgets.forEach((widget) => {
          widget.classList.remove('gsap-initial')
          gsap.set(widget, { 
            clearProps: "all" 
          })
        })
      }
    })
  }

  // Floating animation for particles/background elements
  const addFloatingAnimation = (selector: string, options?: any) => {
    const defaultOptions = {
      duration: 3,
      y: 20,
      rotation: 10,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      ...options
    }

    gsap.to(selector, {
      y: `+=${defaultOptions.y}`,
      rotation: `+=${defaultOptions.rotation}`,
      duration: defaultOptions.duration,
      ease: defaultOptions.ease,
      repeat: defaultOptions.repeat,
      yoyo: defaultOptions.yoyo,
    })
  }

  // Pulse animation for active elements
  const addPulseAnimation = (selector: string, options?: any) => {
    const defaultOptions = {
      scale: 1.02,
      duration: 2,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      ...options
    }

    gsap.to(selector, {
      scale: defaultOptions.scale,
      duration: defaultOptions.duration,
      ease: defaultOptions.ease,
      repeat: defaultOptions.repeat,
      yoyo: defaultOptions.yoyo,
    })
  }

  // Text reveal animation
  const animateTextReveal = (selector: string) => {
    const elements = document.querySelectorAll(selector)
    
    elements.forEach((el) => {
      const text = el.textContent
      if (!text) return
      
      el.innerHTML = text
        .split('')
        .map(char => `<span style="display: inline-block;">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('')
      
      gsap.fromTo(
        `${selector} span`,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.05,
          stagger: 0.02,
          ease: "power3.out",
        }
      )
    })
  }

  // Morphing glow animation
  const addMorphingGlow = (selector: string) => {
    const tl = gsap.timeline({ repeat: -1 })
    
    tl.to(selector, {
      boxShadow: "0 0 30px rgba(6, 182, 212, 0.6), 0 0 60px rgba(168, 85, 247, 0.4)",
      duration: 2,
      ease: "power2.inOut",
    })
    .to(selector, {
      boxShadow: "0 0 40px rgba(168, 85, 247, 0.6), 0 0 80px rgba(34, 197, 94, 0.4)",
      duration: 2,
      ease: "power2.inOut",
    })
    .to(selector, {
      boxShadow: "0 0 35px rgba(34, 197, 94, 0.6), 0 0 70px rgba(236, 72, 153, 0.4)",
      duration: 2,
      ease: "power2.inOut",
    })
    .to(selector, {
      boxShadow: "0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(168, 85, 247, 0.2)",
      duration: 2,
      ease: "power2.inOut",
    })
    
    return tl
  }

  // ScrollTrigger animations
  const addScrollTriggerAnimation = (selector: string, animation: any) => {
    if (typeof window === 'undefined') return

    ScrollTrigger.create({
      trigger: selector,
      start: "top 80%",
      end: "bottom 20%",
      animation: animation,
      toggleActions: "play none none reverse",
    })
  }

  return {
    containerRef,
    animatePageEntrance,
    addHoverAnimation,
    animateWidgetGrid,
    addFloatingAnimation,
    addPulseAnimation,
    animateTextReveal,
    addMorphingGlow,
    addScrollTriggerAnimation,
  }
} 