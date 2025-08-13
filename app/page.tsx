"use client"

import { useState, useEffect } from "react"
import { Menu, User, TrendingUp, Activity, Brain, Wallet, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useGSAPAnimations } from "@/hooks/use-gsap-animations"
import Link from "next/link"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const {
    animatePageEntrance,
    addHoverAnimation,
    addMorphingGlow,
    addFloatingAnimation,
    animateTextReveal
  } = useGSAPAnimations()

  useEffect(() => {
    // Page entrance animation sequence
    const pageElements = [
      '.header-nav',
      '.hero-logo',
      '.hero-subtitle',
      '.hero-description',
      '.hero-buttons',
      '.features-grid'
    ]
    
    setTimeout(() => {
      animatePageEntrance(pageElements)
    }, 100)

    // Text reveal animation for hero title
    setTimeout(() => {
      animateTextReveal('.hero-subtitle')
    }, 800)

    // Add hover animations to interactive elements
    setTimeout(() => {
      addHoverAnimation('.nav-glow', { scale: 1.02, duration: 0.4 })
      addHoverAnimation('.logo-container', { scale: 1.05, rotation: 2 })
      addHoverAnimation('.hero-logo img', { scale: 1.05, rotation: 1 })
      addHoverAnimation('.cta-button', { scale: 1.05, y: -2 })
      addHoverAnimation('.feature-card', { scale: 1.02, y: -5 })
    }, 1000)

    // Enhanced glow effect for navigation and CTA buttons
    setTimeout(() => {
      addMorphingGlow('.nav-glow')
      addMorphingGlow('.cta-button')
    }, 1200)

    // Floating animation for background particles
    setTimeout(() => {
      addFloatingAnimation('.particle', { 
        duration: 5, 
        y: 40, 
        rotation: 20,
        stagger: 0.3 
      })
    }, 1500)

  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="grid-background"></div>
        </div>
      </div>

      {/* Animated Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Original particles */}
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
        <div className="particle particle-7"></div>
        <div className="particle particle-8"></div>
        
        {/* Logo area particles - more concentrated around the center */}
        <div className="logo-particle logo-particle-1"></div>
        <div className="logo-particle logo-particle-2"></div>
        <div className="logo-particle logo-particle-3"></div>
        <div className="logo-particle logo-particle-4"></div>
        <div className="logo-particle logo-particle-5"></div>
        <div className="logo-particle logo-particle-6"></div>
        <div className="logo-particle logo-particle-7"></div>
        <div className="logo-particle logo-particle-8"></div>
        <div className="logo-particle logo-particle-9"></div>
        <div className="logo-particle logo-particle-10"></div>
        <div className="logo-particle logo-particle-11"></div>
        <div className="logo-particle logo-particle-12"></div>
        
        {/* Floating sparkles */}
        <div className="sparkle sparkle-1"></div>
        <div className="sparkle sparkle-2"></div>
        <div className="sparkle sparkle-3"></div>
        <div className="sparkle sparkle-4"></div>
        <div className="sparkle sparkle-5"></div>
        <div className="sparkle sparkle-6"></div>
      </div>

      {/* Scanning Lines */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="scan-line"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 flex items-center justify-between p-4 border-b border-slate-500/30 bg-gradient-to-r from-black via-gray-900/20 to-black shadow-lg shadow-slate-500/10 header-nav">
        {/* Left spacer for centering */}
        <div className="w-20"></div>

        {/* Center - Navigation in rounded container */}
        <nav className="hidden md:flex items-center space-x-8 bg-black/40 border border-slate-500/30 rounded-2xl px-8 py-3 backdrop-blur-sm relative overflow-hidden nav-glow">
          <Link href="/monitors" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium nav-item">
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

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-slate-500/10 hover:shadow-lg hover:shadow-slate-500/20 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-5 w-5 text-slate-400" />
        </Button>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
        mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop overlay */}
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        {/* Sliding sidebar */}
        <div className={`fixed top-0 left-0 h-full w-80 bg-black/95 border-r border-cyan-500/30 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
              <img 
                src="/whspr-neon-logo.png" 
                alt="WHSPR" 
                className="h-8 w-auto"
              />
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-cyan-500/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-cyan-400 text-xl">✕</span>
              </Button>
            </div>
            
            {/* Navigation */}
            <nav className="flex flex-col p-6 space-y-6 flex-1">
              <Link 
                href="/monitors" 
                className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-medium hover:bg-cyan-500/10 rounded-lg p-3 -mx-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                <TrendingUp className="h-5 w-5" />
              Trench Monitors
            </Link>
              <Link 
                href="/whspr-ai" 
                className="flex items-center gap-3 text-purple-400 hover:text-purple-300 transition-colors text-lg font-medium hover:bg-purple-500/10 rounded-lg p-3 -mx-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Brain className="h-5 w-5" />
              WHSPR AI
            </Link>
              <Link 
                href="/smart-wallets" 
                className="flex items-center gap-3 text-green-400 hover:text-green-300 transition-colors text-lg font-medium hover:bg-green-500/10 rounded-lg p-3 -mx-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Wallet className="h-5 w-5" />
              Smart Wallets
            </Link>
              <Link 
                href="/about" 
                className="flex items-center gap-3 text-orange-400 hover:text-orange-300 transition-colors text-lg font-medium hover:bg-orange-500/10 rounded-lg p-3 -mx-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Info className="h-5 w-5" />
              About
            </Link>
            </nav>
            
            {/* Footer */}
            <div className="p-6 border-t border-cyan-500/20">
              <div className="text-center text-gray-400 text-sm">
                Advanced Memecoin Intelligence
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center hero-logo">
            <img 
              src="/whspr-neon-logo.png" 
              alt="WHSPR" 
              className="h-72 md:h-96 w-auto neon-logo-hero"
            />
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 hero-subtitle">
            Advanced Memecoin Intelligence Platform
          </p>
          


          {/* CTA Button */}
          <div className="flex justify-center hero-buttons">
            <Link href="/monitors">
              <Button className="bg-gray-800 text-gray-200 hover:bg-gray-700 px-8 py-3 text-lg font-semibold transition-all duration-300 rounded-xl cta-button">
                Start Monitoring
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 max-w-6xl mx-auto features-grid">
          <div className="bg-black/60 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-[0.5rem] shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-300 feature-card">
            <TrendingUp className="h-8 w-8 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Trench Monitors</h3>
            <p className="text-gray-300 text-sm">
              Real-time tracking of top gainers, volume spikes, and market momentum across multiple timeframes.
            </p>
          </div>

          <div className="bg-black/60 border border-purple-500/20 rounded-lg p-6 backdrop-blur-[0.5rem] shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 feature-card">
            <Brain className="h-8 w-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-purple-400 mb-2">WHSPR Calls</h3>
            <p className="text-gray-300 text-sm">
              AI-powered analysis identifying high-potential opportunities through market trends and social sentiment.
            </p>
          </div>

          <div className="bg-black/60 border border-green-500/20 rounded-lg p-6 backdrop-blur-[0.5rem] shadow-lg shadow-green-500/10 hover:shadow-green-500/20 transition-all duration-300 feature-card">
            <Wallet className="h-8 w-8 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-green-400 mb-2">Smart Wallets</h3>
            <p className="text-gray-300 text-sm">
              Track and analyze the most successful traders and their strategies in real-time.
            </p>
          </div>

          <div className="bg-black/60 border border-orange-500/20 rounded-lg p-6 backdrop-blur-[0.5rem] shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-300 feature-card">
            <Activity className="h-8 w-8 text-orange-400 mb-4" />
            <h3 className="text-xl font-semibold text-orange-400 mb-2">Live Analytics</h3>
            <p className="text-gray-300 text-sm">
              Comprehensive market data with advanced filtering and alert systems for optimal timing.
            </p>
          </div>
        </div>
      </main>

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
          background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%);
        }

        .particle-3 {
          top: 60%;
          left: 20%;
          animation-delay: -4s;
          animation-duration: 14s;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, transparent 70%);
        }

        .particle-4 {
          top: 80%;
          left: 70%;
          animation-delay: -6s;
          animation-duration: 16s;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%);
        }

        .particle-5 {
          top: 30%;
          left: 50%;
          animation-delay: -8s;
          animation-duration: 20s;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, transparent 70%);
        }

        .particle-6 {
          top: 70%;
          left: 90%;
          animation-delay: -10s;
          animation-duration: 13s;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%);
        }

        .particle-7 {
          top: 40%;
          left: 5%;
          animation-delay: -12s;
          animation-duration: 17s;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, transparent 70%);
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

        .hero-logo {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
        }

        .hero-subtitle {
          opacity: 0;
          transform: translateY(30px);
        }

        .hero-description {
          opacity: 0;
          transform: translateY(30px);
        }

        .hero-buttons {
          opacity: 0;
          transform: translateY(30px);
        }

        .features-grid {
          opacity: 0;
          transform: translateY(40px);
        }

        .feature-card {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
        }

        /* Neon Glow Effects */
.neon-logo {
  filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.6)) 
          drop-shadow(0 0 20px rgba(139, 92, 246, 0.5))
          drop-shadow(0 0 30px rgba(6, 182, 212, 0.4));
  animation: neonPulse 3s ease-in-out infinite;
}

.neon-logo:hover {
  filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.8)) 
          drop-shadow(0 0 30px rgba(139, 92, 246, 0.7))
          drop-shadow(0 0 45px rgba(6, 182, 212, 0.6));
  transform: scale(1.05);
}

.neon-logo-hero {
  filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.7)) 
          drop-shadow(0 0 40px rgba(139, 92, 246, 0.6))
          drop-shadow(0 0 60px rgba(6, 182, 212, 0.5));
  animation: neonPulseHero 4s ease-in-out infinite;
}

@keyframes neonPulse {
  0% {
    filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.6)) 
            drop-shadow(0 0 20px rgba(139, 92, 246, 0.5))
            drop-shadow(0 0 30px rgba(6, 182, 212, 0.4));
  }
  50% {
    filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.8)) 
            drop-shadow(0 0 25px rgba(139, 92, 246, 0.7))
            drop-shadow(0 0 35px rgba(6, 182, 212, 0.6));
  }
  100% {
    filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.6)) 
            drop-shadow(0 0 20px rgba(139, 92, 246, 0.5))
            drop-shadow(0 0 30px rgba(6, 182, 212, 0.4));
  }
}

@keyframes neonPulseHero {
  0% {
    filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.7)) 
            drop-shadow(0 0 40px rgba(139, 92, 246, 0.6))
            drop-shadow(0 0 60px rgba(6, 182, 212, 0.5));
  }
  50% {
    filter: drop-shadow(0 0 30px rgba(59, 130, 246, 0.9)) 
            drop-shadow(0 0 50px rgba(139, 92, 246, 0.8))
            drop-shadow(0 0 70px rgba(6, 182, 212, 0.7));
  }
  100% {
    filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.7)) 
            drop-shadow(0 0 40px rgba(139, 92, 246, 0.6))
            drop-shadow(0 0 60px rgba(6, 182, 212, 0.5));
  }
}

/* Text Neon Glow Effects */
.hero-subtitle {
  text-shadow: 0 0 5px rgba(6, 182, 212, 0.8),
               0 0 10px rgba(6, 182, 212, 0.6),
               0 0 15px rgba(6, 182, 212, 0.4);
  animation: textGlow 2.5s ease-in-out infinite alternate;
}

@keyframes textGlow {
  0% {
    text-shadow: 0 0 5px rgba(6, 182, 212, 0.8),
                 0 0 10px rgba(6, 182, 212, 0.6),
                 0 0 15px rgba(6, 182, 212, 0.4);
  }
  100% {
    text-shadow: 0 0 8px rgba(6, 182, 212, 1),
                 0 0 15px rgba(6, 182, 212, 0.8),
                 0 0 20px rgba(6, 182, 212, 0.6);
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

.cta-button {
  transform-origin: center;
}

/* Logo area particles - concentrated around the center */
.logo-particle {
  position: fixed;
  border-radius: 50%;
  animation: logoFloat 8s infinite linear;
  opacity: 1;
  z-index: 5;
  pointer-events: none;
}

.logo-particle-1 {
  width: 8px;
  height: 8px;
  top: 40vh;
  left: 45vw;
  background: radial-gradient(circle, rgba(6, 182, 212, 1) 0%, transparent 70%);
  animation-delay: 0s;
  animation-duration: 6s;
}

.logo-particle-2 {
  width: 6px;
  height: 6px;
  top: 45vh;
  left: 55vw;
  background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, transparent 70%);
  animation-delay: -1s;
  animation-duration: 7s;
}

.logo-particle-3 {
  width: 10px;
  height: 10px;
  top: 50vh;
  left: 35vw;
  background: radial-gradient(circle, rgba(6, 182, 212, 1) 0%, transparent 70%);
  animation-delay: -2s;
  animation-duration: 8s;
}

.logo-particle-4 {
  width: 7px;
  height: 7px;
  top: 55vh;
  left: 65vw;
  background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, transparent 70%);
  animation-delay: -3s;
  animation-duration: 9s;
}

.logo-particle-5 {
  width: 8px;
  height: 8px;
  top: 60vh;
  left: 45vw;
  background: radial-gradient(circle, rgba(6, 182, 212, 1) 0%, transparent 70%);
  animation-delay: -4s;
  animation-duration: 7s;
}

.logo-particle-6 {
  width: 6px;
  height: 6px;
  top: 35vh;
  left: 55vw;
  background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, transparent 70%);
  animation-delay: -5s;
  animation-duration: 6s;
}

.logo-particle-7 {
  width: 9px;
  height: 9px;
  top: 65vh;
  left: 35vw;
  background: radial-gradient(circle, rgba(6, 182, 212, 1) 0%, transparent 70%);
  animation-delay: -6s;
  animation-duration: 8s;
}

.logo-particle-8 {
  width: 7px;
  height: 7px;
  top: 70vh;
  left: 50vw;
  background: radial-gradient(circle, rgba(6, 182, 212, 1) 0%, transparent 70%);
  animation-delay: -7s;
  animation-duration: 7s;
}

.logo-particle-9 {
  width: 8px;
  height: 8px;
  top: 30vh;
  left: 50vw;
  background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, transparent 70%);
  animation-delay: -8s;
  animation-duration: 9s;
}

.logo-particle-10 {
  width: 6px;
  height: 6px;
  top: 75vh;
  left: 40vw;
  background: radial-gradient(circle, rgba(6, 182, 212, 1) 0%, transparent 70%);
  animation-delay: -9s;
  animation-duration: 6s;
}

.logo-particle-11 {
  width: 10px;
  height: 10px;
  top: 25vh;
  left: 40vw;
  background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, transparent 70%);
  animation-delay: -10s;
  animation-duration: 8s;
}

.logo-particle-12 {
  width: 7px;
  height: 7px;
  top: 80vh;
  left: 60vw;
  background: radial-gradient(circle, rgba(6, 182, 212, 1) 0%, transparent 70%);
  animation-delay: -11s;
  animation-duration: 7s;
}

/* Floating sparkles */
.sparkle {
  position: fixed;
  width: 3px;
  height: 3px;
  background: white;
  border-radius: 50%;
  animation: sparkleFloat 12s infinite linear;
  opacity: 1;
  z-index: 5;
  pointer-events: none;
  box-shadow: 0 0 4px rgba(255, 255, 255, 0.8);
}

.sparkle-1 {
  top: 30vh;
  left: 30vw;
  animation-delay: 0s;
  animation-duration: 10s;
}

.sparkle-2 {
  top: 70vh;
  left: 70vw;
  animation-delay: -2s;
  animation-duration: 12s;
}

.sparkle-3 {
  top: 20vh;
  left: 80vw;
  animation-delay: -4s;
  animation-duration: 11s;
}

.sparkle-4 {
  top: 80vh;
  left: 20vw;
  animation-delay: -6s;
  animation-duration: 13s;
}

.sparkle-5 {
  top: 40vh;
  left: 70vw;
  animation-delay: -8s;
  animation-duration: 9s;
}

.sparkle-6 {
  top: 60vh;
  left: 30vw;
  animation-delay: -10s;
  animation-duration: 14s;
}

@keyframes logoFloat {
  0% {
    transform: translateY(20vh) translateX(-20px) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
    transform: translateY(15vh) translateX(-10px) scale(1);
  }
  50% {
    opacity: 1;
    transform: translateY(0vh) translateX(0px) scale(1.5);
  }
  90% {
    opacity: 1;
    transform: translateY(-15vh) translateX(10px) scale(1);
  }
  100% {
    transform: translateY(-20vh) translateX(20px) scale(0);
    opacity: 0;
  }
}

@keyframes sparkleFloat {
  0% {
    transform: translateY(25vh) translateX(-25px) scale(0) rotate(0deg);
    opacity: 0;
  }
  15% {
    opacity: 1;
    transform: translateY(20vh) translateX(-15px) scale(1) rotate(90deg);
  }
  50% {
    opacity: 1;
    transform: translateY(0vh) translateX(0px) scale(2) rotate(180deg);
  }
  85% {
    opacity: 1;
    transform: translateY(-20vh) translateX(15px) scale(1) rotate(270deg);
  }
  100% {
    transform: translateY(-25vh) translateX(25px) scale(0) rotate(360deg);
    opacity: 0;
  }
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
      `}</style>
    </div>
  )
}
