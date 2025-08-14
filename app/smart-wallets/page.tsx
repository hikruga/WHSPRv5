"use client"

import { useState } from "react"
import { Menu, User, Wallet, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"

export default function SmartWalletsPage() {
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
          <Link href="/smart-wallets" className="text-white hover:text-emerald-400 transition-colors font-medium nav-item">
            Smart Wallets
          </Link>
          <span className="text-slate-500/60 cursor-not-allowed font-medium nav-item">
            Trench Monitors
          </span>
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

      {/* Main Content */}
      <div className="p-4 main-container trending-scroll max-h-[80vh] overflow-y-auto pr-2">
        {/* Smart Wallets Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4 pl-4">
            <Wallet className="h-6 w-6 text-green-400" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Smart Wallets
            </h1>
          </div>
          <div className="bg-black/60 border border-green-500/20 rounded-lg p-4 backdrop-blur-[0.5rem] shadow-lg shadow-green-500/10">
            <p className="text-gray-300 text-sm leading-relaxed">
              Track and analyze the most successful traders and their strategies in real-time. Learn from the best performers and follow their moves to maximize your trading potential.
            </p>
          </div>
        </div>

        {/* Smart Traders */}
        <Card className="bg-black/80 border border-green-500/20 shadow-lg shadow-green-500/10 backdrop-blur-[0.5rem]">
          <CardHeader className="border-b border-green-500/20">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-green-400 font-bold">Smart Traders</CardTitle>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-black border-green-500/50 text-green-400 hover:bg-green-500/10 hover:shadow-lg hover:shadow-green-500/20"
                >
                  Top Performers
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-black border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  Recent Activity
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-black border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  High Volume
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-black border-pink-500/50 text-pink-400 hover:bg-pink-500/10 hover:shadow-lg hover:shadow-pink-500/20"
                >
                  All Traders
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Trader 1 */}
              <div className="p-4 rounded-lg bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-black border border-gray-700/50 hover:border-gray-600/70 hover:shadow-lg hover:shadow-gray-500/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12 border-2 border-gray-600 shadow-lg shadow-gray-700/30">
                    <AvatarFallback className="bg-gradient-to-br from-gray-700 to-gray-800 text-white font-bold">
                      CW
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-white font-semibold">CryptoWhale47</h3>
                    <p className="text-xs text-gray-400">Elite Trader</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50 animate-pulse"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Win Rate</span>
                    <span className="text-sm text-emerald-400 font-bold">94.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Total Profit</span>
                    <span className="text-sm text-gray-200 font-bold">+$2.4M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Followers</span>
                    <span className="text-sm text-white font-semibold">12.3K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Last Trade</span>
                    <span className="text-xs text-emerald-400">BTC +15.2% • 2h ago</span>
                  </div>
                </div>
              </div>

              {/* Trader 2 */}
              <div className="p-4 rounded-lg bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-black border border-gray-700/50 hover:border-gray-600/70 hover:shadow-lg hover:shadow-gray-500/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12 border-2 border-gray-600 shadow-lg shadow-gray-700/30">
                    <AvatarFallback className="bg-gradient-to-br from-gray-700 to-gray-800 text-white font-bold">
                      DM
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-white font-semibold">DefiMaster</h3>
                    <p className="text-xs text-gray-400">Pro Trader</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50 animate-pulse"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Win Rate</span>
                    <span className="text-sm text-emerald-400 font-bold">87.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Total Profit</span>
                    <span className="text-sm text-gray-200 font-bold">+$1.8M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Followers</span>
                    <span className="text-sm text-white font-semibold">8.7K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Last Trade</span>
                    <span className="text-xs text-emerald-400">ETH +8.4% • 1h ago</span>
                  </div>
                </div>
              </div>

              {/* Trader 3 */}
              <div className="p-4 rounded-lg bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-black border border-gray-700/50 hover:border-gray-600/70 hover:shadow-lg hover:shadow-gray-500/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12 border-2 border-gray-600 shadow-lg shadow-gray-700/30">
                    <AvatarFallback className="bg-gradient-to-br from-gray-700 to-gray-800 text-white font-bold">
                      AS
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-white font-semibold">AltcoinSniper</h3>
                    <p className="text-xs text-gray-400">Rising Star</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50 animate-pulse"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Win Rate</span>
                    <span className="text-sm text-emerald-400 font-bold">91.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Total Profit</span>
                    <span className="text-sm text-gray-200 font-bold">+$890K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Followers</span>
                    <span className="text-sm text-white font-semibold">5.2K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Last Trade</span>
                    <span className="text-xs text-emerald-400">SOL +22.1% • 30m ago</span>
                  </div>
                </div>
              </div>

              {/* Trader 4 */}
              <div className="p-4 rounded-lg bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-black border border-gray-700/50 hover:border-gray-600/70 hover:shadow-lg hover:shadow-gray-500/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12 border-2 border-gray-600 shadow-lg shadow-gray-700/30">
                    <AvatarFallback className="bg-gradient-to-br from-gray-700 to-gray-800 text-white font-bold">
                      BH
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-white font-semibold">BlockchainHunter</h3>
                    <p className="text-xs text-gray-400">Veteran</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50 animate-pulse"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Win Rate</span>
                    <span className="text-sm text-emerald-400 font-bold">89.3%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Total Profit</span>
                    <span className="text-sm text-gray-200 font-bold">+$1.2M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Followers</span>
                    <span className="text-sm text-white font-semibold">9.8K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Last Trade</span>
                    <span className="text-xs text-emerald-400">AVAX +12.7% • 45m ago</span>
                  </div>
                </div>
              </div>

              {/* Trader 5 */}
              <div className="p-4 rounded-lg bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-black border border-gray-700/50 hover:border-gray-600/70 hover:shadow-lg hover:shadow-gray-500/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12 border-2 border-gray-600 shadow-lg shadow-gray-700/30">
                    <AvatarFallback className="bg-gradient-to-br from-gray-700 to-gray-800 text-white font-bold">
                      NF
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-white font-semibold">NFTFlipKing</h3>
                    <p className="text-xs text-gray-400">Specialist</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Win Rate</span>
                    <span className="text-sm text-emerald-400 font-bold">85.6%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Total Profit</span>
                    <span className="text-sm text-gray-200 font-bold">+$650K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Followers</span>
                    <span className="text-sm text-white font-semibold">4.1K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Last Trade</span>
                    <span className="text-xs text-red-400">MATIC -2.1% • 3h ago</span>
                  </div>
                </div>
              </div>

              {/* Trader 6 */}
              <div className="p-4 rounded-lg bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-black border border-gray-700/50 hover:border-gray-600/70 hover:shadow-lg hover:shadow-gray-500/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12 border-2 border-gray-600 shadow-lg shadow-gray-700/30">
                    <AvatarFallback className="bg-gradient-to-br from-gray-700 to-gray-800 text-white font-bold">
                      QT
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-white font-semibold">QuantumTrader</h3>
                    <p className="text-xs text-gray-400">Algorithm Expert</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50 animate-pulse"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Win Rate</span>
                    <span className="text-sm text-emerald-400 font-bold">92.7%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Total Profit</span>
                    <span className="text-sm text-gray-200 font-bold">+$1.5M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Followers</span>
                    <span className="text-sm text-white font-semibold">7.9K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Last Trade</span>
                    <span className="text-xs text-emerald-400">ADA +18.9% • 1h ago</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Stats Row */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                <div className="text-2xl font-bold text-gray-200">247</div>
                <div className="text-sm text-gray-400">Active Traders</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                <div className="text-2xl font-bold text-emerald-400">$12.8M</div>
                <div className="text-sm text-gray-400">Total Volume Today</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                <div className="text-2xl font-bold text-gray-200">89.2%</div>
                <div className="text-sm text-gray-400">Avg Win Rate</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                <div className="text-2xl font-bold text-gray-200">1,847</div>
                <div className="text-sm text-gray-400">Trades Today</div>
              </div>
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