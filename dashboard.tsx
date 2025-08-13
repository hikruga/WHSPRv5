"use client"

import { useState, useEffect } from "react"
import { Menu, User, TrendingUp, Activity, Brain, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { CoinDetailModal } from "./components/coin-detail-modal"
import { TooltipProvider } from "@/components/ui/tooltip"
import { CustomizableDashboard } from "@/components/dashboard/customizable-dashboard"
import { useGSAPAnimations } from "@/hooks/use-gsap-animations"
import Link from "next/link"
import gsap from "gsap"

export default function Component() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCoin, setSelectedCoin] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const {
    animatePageEntrance,
    addHoverAnimation,
    animateWidgetGrid,
    addMorphingGlow,
    addFloatingAnimation
  } = useGSAPAnimations()

  useEffect(() => {
    // Page entrance animation sequence
    const pageElements = [
      '.header-nav',
      '.monitors-section',
      '.dashboard-container'
    ]
    
    setTimeout(() => {
      animatePageEntrance(pageElements)
    }, 100)

    // Add hover animations to interactive elements
    setTimeout(() => {
      addHoverAnimation('.nav-glow', { scale: 1.02, duration: 0.4 })
      addHoverAnimation('.logo-container', { scale: 1.05, rotation: 2 })
    }, 500)

    // Enhanced glow effect for navigation
    setTimeout(() => {
      addMorphingGlow('.nav-glow')
    }, 1000)

    // Floating animation for background particles
    setTimeout(() => {
      addFloatingAnimation('.particle', { 
        duration: 4, 
        y: 30, 
        rotation: 15,
        stagger: 0.2 
      })
    }, 1500)

    // Fast sequential widget animations from top gainers to worst performers
    setTimeout(() => {
      // Define the exact order of widgets
      const widgetOrder = [
        'top-gainers',
        'hourly-performers', 
        'volume-spike',
        'strong-survivors',
        'momentum-gainers',
        'holder-gainer',
        'big-dips',
        'worst-performers'
      ]
      
             widgetOrder.forEach((widgetId, index) => {
         const widget = document.querySelector(`[data-grid*='"i":"${widgetId}"']`)
         if (widget) {
           setTimeout(() => {
             widget.classList.add('widget-animate-in')
           }, index * 150) // Flowing timing - 150ms between each
         }
       })
    }, 300)
  }, [])

  const handleCoinClick = (symbol: string) => {
    setSelectedCoin(symbol)
    setModalOpen(true)
  }

  return (
    <TooltipProvider delayDuration={100}>
      <div className="min-h-screen bg-black text-white">
        {/* Animated Grid Background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="grid-background"></div>
          </div>
        </div>

        {/* Animated Particles */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
          <div className="particle particle-6"></div>
          <div className="particle particle-7"></div>
          <div className="particle particle-8"></div>
        </div>

        {/* Scanning Lines */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="scan-line"></div>
        </div>

        {/* Header */}
        <header className="relative z-50 flex items-center justify-between p-4 border-b border-slate-500/30 bg-gradient-to-r from-black via-gray-900/20 to-black shadow-lg shadow-slate-500/10 header-nav">
          {/* Left spacer for centering */}
          <div className="w-20"></div>

          {/* Center - Logo and Navigation in same rounded container */}
          <nav className="hidden md:flex items-center space-x-8 bg-black/40 border border-slate-500/30 rounded-2xl px-8 py-3 backdrop-blur-sm relative overflow-hidden nav-glow">
            <Link href="/" className="mr-4 logo-container">
              <img 
                src="/whspr-neon-logo.png" 
                alt="WHSPR" 
                className="h-20 w-auto cursor-pointer neon-logo transition-all duration-300"
              />
            </Link>
            <Link href="/monitors" className="text-white hover:text-cyan-400 transition-colors font-medium nav-item">
              Trench Monitors
            </Link>
            <Link href="/whspr-ai" className="text-slate-300 hover:text-purple-400 transition-colors font-medium nav-item">
              WHSPR Calls
            </Link>
            <Link href="/smart-wallets" className="text-slate-300 hover:text-emerald-400 transition-colors font-medium nav-item">
              Smart Wallets
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-orange-400 transition-colors font-medium nav-item">
              About
            </Link>
          </nav>

          {/* Right spacer for centering */}
          <div className="w-20"></div>
        </header>

        {/* Main Content */}
        <div className="p-4 main-container">
          {/* Monitors Section */}
          <div className="mb-8 monitors-section">
            <div className="flex items-center gap-3 mb-4 pl-4">
              <h1 className="text-2xl font-bold text-white section-title">
                Trench Monitors
              </h1>
            </div>
            <div className="bg-black/60 border border-cyan-500/20 rounded-lg p-4 backdrop-blur-[0.5rem] shadow-lg shadow-cyan-500/10 description-box">
              <p className="text-white text-sm leading-relaxed">
                WHSPR utilizes both AI and Algorithmic analysis to cut through memecoin market noise. Our intelligent monitoring systems process thousands of data points in real-time to identify genuine opportunities across all market phases.
              </p>
            </div>
          </div>

          {/* Customizable Dashboard */}
          <div className="dashboard-container">
            <CustomizableDashboard onCoinClick={handleCoinClick} />
          </div>
        </div>

        {/* Coin Detail Modal */}
        <CoinDetailModal isOpen={modalOpen} onClose={() => setModalOpen(false)} coinSymbol={selectedCoin} />

        {/* Add the CSS styles */}
        <style jsx>{`
.grid-background {
  background-image: 
    linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  width: 100%;
  height: 100%;
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, transparent 70%);
  border-radius: 50%;
  animation: float 15s infinite linear;
}

.particle-1 {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
  animation-duration: 12s;
}

.particle-2 {
  top: 20%;
  left: 80%;
  animation-delay: -2s;
  animation-duration: 18s;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, transparent 70%);
}

.particle-3 {
  top: 60%;
  left: 20%;
  animation-delay: -4s;
  animation-duration: 14s;
  background: radial-gradient(circle, rgba(34, 197, 94, 0.8) 0%, transparent 70%);
}

.particle-4 {
  top: 80%;
  left: 70%;
  animation-delay: -6s;
  animation-duration: 16s;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.8) 0%, transparent 70%);
}

.particle-5 {
  top: 30%;
  left: 50%;
  animation-delay: -8s;
  animation-duration: 20s;
  background: radial-gradient(circle, rgba(251, 191, 36, 0.8) 0%, transparent 70%);
}

.particle-6 {
  top: 70%;
  left: 90%;
  animation-delay: -10s;
  animation-duration: 13s;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, transparent 70%);
}

.particle-7 {
  top: 40%;
  left: 5%;
  animation-delay: -12s;
  animation-duration: 17s;
  background: radial-gradient(circle, rgba(239, 68, 68, 0.8) 0%, transparent 70%);
}

.particle-8 {
  top: 90%;
  left: 40%;
  animation-delay: -14s;
  animation-duration: 19s;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, transparent 70%);
}

@keyframes float {
  0% {
    transform: translateY(100vh) translateX(0px) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
    transform: translateY(90vh) translateX(10px) scale(1);
  }
  90% {
    opacity: 1;
    transform: translateY(-10vh) translateX(-10px) scale(1);
  }
  100% {
    transform: translateY(-20vh) translateX(0px) scale(0);
    opacity: 0;
  }
}

.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(6, 182, 212, 0.6) 50%, 
    transparent 100%);
  animation: scan 8s ease-in-out infinite;
  box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
}

@keyframes scan {
  0%, 100% {
    transform: translateY(0vh);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(100vh);
    opacity: 0;
  }
}

.main-container {
  position: relative;
  z-index: 1;
}

.card:hover {
  transform: translateY(-2px);
  transition: all 0.3s ease;
}

@keyframes gradient-x {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 8s ease infinite;
}

/* GSAP Animation Initial States */
.header-nav {
  opacity: 0;
  transform: translateY(-20px);
}

.monitors-section {
  opacity: 0;
  transform: translateY(30px);
}

.dashboard-container {
  opacity: 0;
  transform: translateY(40px);
}

/* Smooth flowing widget animations */
.react-grid-item {
  opacity: 0;
  transform: scale(0.92) translateY(15px);
  transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
              transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.react-grid-item.widget-animate-in {
  opacity: 1;
  transform: scale(1) translateY(0);
}

/* Neon Glow Effects */
.neon-logo {
  filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.8)) 
          drop-shadow(0 0 20px rgba(139, 92, 246, 0.6))
          drop-shadow(0 0 30px rgba(196, 131, 253, 0.4));
  animation: neonPulse 3s ease-in-out infinite;
}

.neon-logo:hover {
  filter: drop-shadow(0 0 15px rgba(168, 85, 247, 1)) 
          drop-shadow(0 0 30px rgba(139, 92, 246, 0.8))
          drop-shadow(0 0 45px rgba(196, 131, 253, 0.6));
  transform: scale(1.05);
}

@keyframes neonPulse {
  0% {
    filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.8)) 
            drop-shadow(0 0 20px rgba(139, 92, 246, 0.6))
            drop-shadow(0 0 30px rgba(196, 131, 253, 0.4));
  }
  50% {
    filter: drop-shadow(0 0 15px rgba(168, 85, 247, 1)) 
            drop-shadow(0 0 25px rgba(139, 92, 246, 0.8))
            drop-shadow(0 0 35px rgba(196, 131, 253, 0.6));
  }
  100% {
    filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.8)) 
            drop-shadow(0 0 20px rgba(139, 92, 246, 0.6))
            drop-shadow(0 0 30px rgba(196, 131, 253, 0.4));
  }
}

/* Text Neon Glow Effects */
.section-title {
  text-shadow: 0 0 5px rgba(6, 182, 212, 0.8),
               0 0 10px rgba(6, 182, 212, 0.6),
               0 0 15px rgba(6, 182, 212, 0.4);
  animation: textGlow 2s ease-in-out infinite;
}

@keyframes textGlow {
  0% {
    text-shadow: 0 0 5px rgba(6, 182, 212, 0.8),
                 0 0 10px rgba(6, 182, 212, 0.6),
                 0 0 15px rgba(6, 182, 212, 0.4);
  }
  50% {
    text-shadow: 0 0 8px rgba(6, 182, 212, 1),
                 0 0 15px rgba(6, 182, 212, 0.8),
                 0 0 20px rgba(6, 182, 212, 0.6);
  }
  100% {
    text-shadow: 0 0 5px rgba(6, 182, 212, 0.8),
                 0 0 10px rgba(6, 182, 212, 0.6),
                 0 0 15px rgba(6, 182, 212, 0.4);
  }
}

/* Enhanced hover states for GSAP */
.logo-container {
  transform-origin: center;
}

.nav-item {
  position: relative;
  overflow: hidden;
  text-shadow: 0 0 3px rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.nav-item:hover {
  text-shadow: 0 0 5px rgba(6, 182, 212, 0.8),
               0 0 10px rgba(6, 182, 212, 0.6);
}

.nav-item::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.8), transparent);
  box-shadow: 0 0 5px rgba(6, 182, 212, 0.6);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-item:hover::before {
  width: 100%;
}
      `}</style>
      </div>
    </TooltipProvider>
  )
}
