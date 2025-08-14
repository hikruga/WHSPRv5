"use client"

import { useState } from "react"
import { Menu, User, Info, Activity, Brain, Wallet, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
              className="h-16 w-auto cursor-pointer neon-logo transition-all duration-300"
            />
          </Link>
          <Link href="/whspr-ai" className="text-slate-300 hover:text-purple-400 transition-colors font-medium nav-item">
            WHSPR Calls
          </Link>
          <Link href="/smart-wallets" className="text-slate-300 hover:text-emerald-400 transition-colors font-medium nav-item">
            Smart Wallets
          </Link>
          <span className="text-slate-500/60 cursor-not-allowed font-medium nav-item">
            Trench Monitors
          </span>
          <Link href="/about" className="text-white hover:text-orange-400 transition-colors font-medium nav-item">
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

      {/* Main Content */}
      <div className="p-4 main-container max-w-6xl mx-auto">
        {/* About Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4 pl-4">
            <Info className="h-6 w-6 text-orange-400" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              About WHSPR
            </h1>
          </div>
          <div className="bg-black/60 border border-orange-500/20 rounded-lg p-6 backdrop-blur-[0.5rem] shadow-lg shadow-orange-500/10">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              WHSPR is the next-generation memecoin intelligence platform designed to give traders the edge they need in the fast-moving cryptocurrency market. Our advanced AI-powered system monitors, analyzes, and identifies high-potential opportunities across multiple blockchains.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Built by traders, for traders, WHSPR combines cutting-edge technology with real-time market data to help you never miss a runner again.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-black/80 border border-cyan-500/20 shadow-lg shadow-cyan-500/10 backdrop-blur-[0.5rem]">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-cyan-400">
                <TrendingUp className="h-6 w-6" />
                Trench Monitors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Real-time tracking of market movements across multiple timeframes and categories:
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Top Gainers - Highest performing tokens by percentage increase</li>
                <li>• Hourly Performers - Short-term momentum tracking</li>
                <li>• Volume Spikes - Sudden increases in trading activity</li>
                <li>• Strong Survivors - Tokens with sustained performance</li>
                <li>• Big Dips - Recovery opportunities identification</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-black/80 border border-purple-500/20 shadow-lg shadow-purple-500/10 backdrop-blur-[0.5rem]">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-purple-400">
                <Brain className="h-6 w-6" />
                WHSPR AI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Advanced artificial intelligence that analyzes market patterns and social sentiment:
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Pattern Recognition - Identifies recurring market behaviors</li>
                <li>• Social Sentiment Analysis - Tracks community buzz and engagement</li>
                <li>• Risk Assessment - Evaluates potential opportunities and threats</li>
                <li>• Predictive Modeling - Forecasts potential price movements</li>
                <li>• Smart Alerts - Notifies you of high-probability opportunities</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-black/80 border border-green-500/20 shadow-lg shadow-green-500/10 backdrop-blur-[0.5rem]">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-green-400">
                <Wallet className="h-6 w-6" />
                Smart Wallets
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Track and learn from the most successful traders in the ecosystem:
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Elite Trader Tracking - Monitor top performers' strategies</li>
                <li>• Win Rate Analysis - Detailed performance metrics</li>
                <li>• Copy Trading Insights - Learn from successful patterns</li>
                <li>• Portfolio Analysis - Understand allocation strategies</li>
                <li>• Real-time Notifications - Get alerts on major moves</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-black/80 border border-orange-500/20 shadow-lg shadow-orange-500/10 backdrop-blur-[0.5rem]">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-orange-400">
                <Activity className="h-6 w-6" />
                Live Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Comprehensive market data with advanced filtering and analysis:
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Multi-chain Support - Solana, Ethereum, and more</li>
                <li>• Custom Filters - Tailor data to your preferences</li>
                <li>• Historical Data - Access to extensive market history</li>
                <li>• API Integration - Connect with your favorite tools</li>
                <li>• Mobile Responsive - Trade on any device</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Mission Statement */}
        <Card className="bg-black/80 border border-pink-500/20 shadow-lg shadow-pink-500/10 backdrop-blur-[0.5rem] mb-8">
          <CardHeader>
            <CardTitle className="text-pink-400 text-center text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
              To democratize access to professional-grade trading intelligence and empower every trader with the tools and insights needed to succeed in the dynamic world of cryptocurrency trading. We believe that with the right information and technology, anyone can become a successful trader.
            </p>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="text-center p-6 rounded-lg bg-gradient-to-r from-cyan-900/20 to-cyan-800/20 border border-cyan-500/20">
            <div className="text-3xl font-bold text-cyan-400 mb-2">10,000+</div>
            <div className="text-sm text-gray-400">Active Users</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-gradient-to-r from-purple-900/20 to-purple-800/20 border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">$50M+</div>
            <div className="text-sm text-gray-400">Volume Tracked Daily</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-500/20">
            <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
            <div className="text-sm text-gray-400">Tokens Monitored</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-gradient-to-r from-orange-900/20 to-orange-800/20 border border-orange-500/20">
            <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
            <div className="text-sm text-gray-400">Uptime</div>
          </div>
        </div>

        {/* Contact */}
        <Card className="bg-black/80 border border-gray-500/20 shadow-lg shadow-gray-500/10 backdrop-blur-[0.5rem]">
          <CardHeader>
            <CardTitle className="text-gray-300 text-center">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-400 mb-6">
              Have questions or feedback? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                Join Discord
              </Button>
              <Button variant="outline" className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10">
                Follow Twitter
              </Button>
              <Button variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10">
                Contact Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

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
      `}</style>
    </div>
  )
} 