"use client"

import { useState, useEffect } from "react"
import { Menu, Brain, Activity, TrendingUp, Wallet, X as IconX, ExternalLink, Copy, BadgeCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"
import { CoinDetailModal } from "@/components/coin-detail-modal"
import Link from "next/link"
import Image from "next/image"

export default function WHSPRAIPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedTokenForTrading, setSelectedTokenForTrading] = useState<string | null>(null)
  const [selectedCoin, setSelectedCoin] = useState<string | null>(null)
  const [isCoinModalOpen, setIsCoinModalOpen] = useState(false)

  const handleTradeClick = (tokenSymbol: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedTokenForTrading(prev => prev === tokenSymbol ? null : tokenSymbol)
  }

  const handlePlatformClick = (platformUrl: string, token: any, e: React.MouseEvent) => {
    e.stopPropagation()
    const url = `${platformUrl}?token=${token.contract}`
    window.open(url, '_blank')
  }

  const handleCoinClick = (coinSymbol: string) => {
    setSelectedCoin(coinSymbol)
    setIsCoinModalOpen(true)
  }

  // Close trading platform selection when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectedTokenForTrading) {
        setSelectedTokenForTrading(null)
      }
    }

    document.addEventListener('click', handleClickOutside)
    
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [selectedTokenForTrading])

  // Token data for the calls
  const tokenData = {
    MASK: {
      symbol: "MASK",
      name: "catwifmask",
      contract: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      image: "/images/ninja-cat.png",
      mcap: "$13.0M",
      holders: "2.9K",
      change: "+116.5%"
    },
    PEPE: {
      symbol: "PEPE", 
      name: "pepewifhat",
      contract: "5MAYDfq5yxtudAhtfyuMBuHZjgAbaS9tbEyEQYAhDS5y",
      image: "/images/space-pig.png",
      mcap: "$7.8B",
      holders: "234K",
      change: "+89.2%"
    },
    DOGE: {
      symbol: "DOGE",
      name: "dogewifcoin", 
      contract: "FYfqxqMjP66pq8nJHcvMtEqEF8pkYeB4W4UyGEzCwBf5",
      image: "/images/blue-bunny.png",
      mcap: "$15.4B",
      holders: "4.8K",
      change: "+45.8%"
    }
  }

  // Team calls token data
  const teamTokenData = {
    BEAR: {
      symbol: "BEAR",
      name: "brownbear",
      contract: "8MAYDfq5yxtudAhtfyuMBuHZjgAbaS9tbEyEQYAhDS5y",
      image: "/images/brown-bear.png",
      mcap: "$4.2M",
      holders: "3.4K",
      change: "+28.7%"
    },
    KITTY: {
      symbol: "KITTY", 
      name: "hellokitty",
      contract: "9MAYDfq5yxtudAhtfyuMBuHZjgAbaS9tbEyEQYAhDS5y",
      image: "/images/hello-kitty.png",
      mcap: "$7.6M",
      holders: "4.5K",
      change: "+19.8%"
    },
    ROBOT: {
      symbol: "ROBOT",
      name: "robotface", 
      contract: "7MAYDfq5yxtudAhtfyuMBuHZjgAbaS9tbEyEQYAhDS5y",
      image: "/images/robot-face.png",
      mcap: "$23.1M",
      holders: "6.7K",
      change: "+17.5%"
    }
  }

  type SmartWalletHolding = {
    symbol: string
    name: string
    percent: string
    icon?: string
  }

  type SmartWallet = {
    id: string
    initials: string
    name: string
    address: string
    verified?: boolean
    statusColor: 'emerald-500' | 'yellow-500' | 'red-500'
    avatar?: string
    holdings: SmartWalletHolding[]
  }

  // Smart wallets data for the Smart Wallets panel
  const smartWallets: SmartWallet[] = [
    // Keep only: groovy, profit, and the seven with new avatars
    {
      id: 'profit',
      initials: 'PR',
      name: 'Profit',
      address: 'G5nx...S7w5E',
      avatar: '/profit pp.jpg',
      verified: true,
      statusColor: 'emerald-500',
      holdings: [
        { symbol: 'VEO3', name: 'New Google A...', percent: '3.07%', icon: '/images/ninja-cat.png' },
        { symbol: 'bertcoin', name: 'bitcoin dog', percent: '1.97%', icon: '/images/blue-bunny.png' },
        { symbol: 'BITCORN', name: 'BITCORN', percent: '2.06%', icon: '/images/space-pig.png' },
        { symbol: 'MrLean', name: 'Mood Mr Beast', percent: '2.55%', icon: '/images/glasses-guy.png' },
      ],
    },
    {
      id: 'cooker',
      initials: 'CK',
      name: 'Cooker',
      address: 'C00k...er000',
      avatar: '/cooker pp.jpg',
      verified: false,
      statusColor: 'emerald-500',
      holdings: [
        { symbol: 'PIG', name: 'spacepig', percent: '1.11%', icon: '/images/space-pig.png' },
        { symbol: 'DOGS', name: 'dogsyard', percent: '0.74%', icon: '/images/dogs-yard.png' },
      ],
    },
    {
      id: 'gake',
      initials: 'GA',
      name: 'Gake',
      address: 'DNfu...yeBHm',
      avatar: '/gake pp.jpg',
      verified: false,
      statusColor: 'emerald-500',
      holdings: [
        { symbol: 'NINJA', name: 'ninjacat', percent: '0.93%', icon: '/images/ninja-cat.png' },
        { symbol: 'BUNNY', name: 'bluebunny', percent: '1.96%', icon: '/images/blue-bunny.png' },
        { symbol: 'PIG', name: 'spacepig', percent: '2.24%', icon: '/images/space-pig.png' },
        { symbol: 'DOGS', name: 'dogsyard', percent: '1.12%', icon: '/images/dogs-yard.png' },
        { symbol: 'KITTY', name: 'hellokitty', percent: '0.78%', icon: '/images/hello-kitty.png' },
        { symbol: 'ROBOT', name: 'robotface', percent: '0.65%', icon: '/images/robot-face.png' },
      ],
    },
    {
      id: 'ferb',
      initials: 'FB',
      name: 'Ferb',
      address: 'F3rb...000fb',
      avatar: '/ferb pp.jpg',
      verified: false,
      statusColor: 'emerald-500',
      holdings: [
        { symbol: 'DOGS', name: 'dogsyard', percent: '1.02%', icon: '/images/dogs-yard.png' },
        { symbol: 'GLASSES', name: 'glassesguy', percent: '0.67%', icon: '/images/glasses-guy.png' },
        { symbol: 'NINJA', name: 'ninjacat', percent: '0.55%', icon: '/images/ninja-cat.png' },
        { symbol: 'PIG', name: 'spacepig', percent: '0.49%', icon: '/images/space-pig.png' },
        { symbol: 'KITTY', name: 'hellokitty', percent: '0.44%', icon: '/images/hello-kitty.png' },
      ],
    },
    {
      id: 'it4i',
      initials: 'I4',
      name: 'it4i',
      address: 'it4i...00000',
      avatar: '/it4i pp.jpg',
      verified: false,
      statusColor: 'emerald-500',
      holdings: [
        { symbol: 'NINJA', name: 'ninjacat', percent: '1.23%', icon: '/images/ninja-cat.png' },
      ],
    },
    {
      id: 'shadow',
      initials: 'SH',
      name: 'Shadow',
      address: 'Shdw...00000',
      avatar: '/shadow pp.jpg',
      verified: false,
      statusColor: 'emerald-500',
      holdings: [
        { symbol: 'GLASSES', name: 'glassesguy', percent: '0.88%', icon: '/images/glasses-guy.png' },
        { symbol: 'ADHD', name: 'adhd', percent: '0.45%', icon: '/images/adhd-logo.png' },
      ],
    },
    {
      id: 'slingoor',
      initials: 'SL',
      name: 'Slingoor',
      address: 'Slng...0r000',
      avatar: '/slingoor pp.jpg',
      verified: false,
      statusColor: 'emerald-500',
      holdings: [
        { symbol: 'DOGE', name: 'dogewifcoin', percent: '0.77%', icon: '/images/blue-bunny.png' },
        { symbol: 'PIG', name: 'spacepig', percent: '0.52%', icon: '/images/space-pig.png' },
      ],
    },
    {
      id: 'spuno',
      initials: 'SP',
      name: 'Spuno',
      address: 'Spun...00000',
      avatar: '/spuno pp.jpg',
      verified: false,
      statusColor: 'emerald-500',
      holdings: [
        { symbol: 'NINJA', name: 'ninjacat', percent: '0.85%', icon: '/images/ninja-cat.png' },
        { symbol: 'GLASSES', name: 'glassesguy', percent: '0.41%', icon: '/images/glasses-guy.png' },
      ],
    },
    {
      id: 'kruga',
      initials: 'KG',
      name: 'Kruga',
      address: 'Krug...a0000',
      avatar: '/kruga pp.jpg',
      verified: true,
      statusColor: 'emerald-500',
      holdings: [
        { symbol: 'NINJA', name: 'ninjacat', percent: '1.44%', icon: '/images/ninja-cat.png' },
        { symbol: 'DOGS', name: 'dogsyard', percent: '0.63%', icon: '/images/dogs-yard.png' },
      ],
    },
  ]

  // Trending tokens data (sample)
  const trendingTokens = [
    {
      symbol: "NINJA",
      name: "ninjacat",
      contract: "9n1NjAcatCoNtrAct1234567890abcdef",
      image: "/images/ninja-cat.png",
      price: "$0.0123",
      change: +12.4,
      mcap: "$18.9M",
      liquidity: "$1.4M",
      volume: "$3.2M",
      txns: "12.1K",
    },
    {
      symbol: "BUNNY",
      name: "bluebunny",
      contract: "bunnyB1ueC0ntrAct1234567890abcdef",
      image: "/images/blue-bunny.png",
      price: "$0.0048",
      change: -3.1,
      mcap: "$6.4M",
      liquidity: "$420K",
      volume: "$1.1M",
      txns: "4.8K",
    },
    {
      symbol: "PIG",
      name: "spacepig",
      contract: "spaceP1gC0ntrAct1234567890abcdef",
      image: "/images/space-pig.png",
      price: "$0.00091",
      change: +7.8,
      mcap: "$21.2M",
      liquidity: "$2.2M",
      volume: "$5.6M",
      txns: "22.3K",
    },
    {
      symbol: "GLASSES",
      name: "glassesguy",
      contract: "g1assesGuyC0ntrAct1234567890abcdef",
      image: "/images/glasses-guy.png",
      price: "$0.031",
      change: +2.3,
      mcap: "$9.7M",
      liquidity: "$600K",
      volume: "$870K",
      txns: "2.1K",
    },
    {
      symbol: "DOGS",
      name: "dogsyard",
      contract: "d0gsyardC0ntrAct1234567890abcdef",
      image: "/images/dogs-yard.png",
      price: "$0.0021",
      change: +19.2,
      mcap: "$12.5M",
      liquidity: "$1.1M",
      volume: "$4.1M",
      txns: "9.4K",
    },
    {
      symbol: "ADHD",
      name: "adhd",
      contract: "adhdT0kenC0ntrAct1234567890abcdef",
      image: "/images/adhd-logo.png",
      price: "$0.00034",
      change: -1.7,
      mcap: "$3.9M",
      liquidity: "$210K",
      volume: "$640K",
      txns: "1.3K",
    },
  ] as const

  // Expand list to ensure scroll visibility (repeat to ~24 rows)
  const trendingList = Array.from({ length: 24 }, (_, index) => {
    const base = trendingTokens[index % trendingTokens.length]
    return { ...base, _rowId: `${base.symbol}-${index}` }
  })

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
          <Link href="/whspr-ai" className="text-white hover:text-purple-400 transition-colors font-medium nav-item">
            WHSPR Calls
          </Link>
          <Link href="/smart-wallets" className="text-slate-300 hover:text-emerald-400 transition-colors font-medium nav-item">
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
      <div className="p-4 main-container">
        {/* WHSPR CALLS */}
        <div className="mb-8">
                   <div className="rounded-xl p-5 h-full bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-slate-900/20 border border-blue-500/20 shadow-lg shadow-blue-500/10 backdrop-blur-md">
            <div className="mb-4">
              <div className="flex items-center gap-3">
                <Brain className="h-5 w-5 text-blue-400" />
                <h3 className="text-base font-bold text-blue-300">WHSPR CALLS</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Pick 1 - $MASK */}
              <div className="relative p-5 rounded-xl bg-gradient-to-br from-blue-600/30 via-blue-500/15 to-black/40 border-2 border-blue-400/30 hover:border-blue-300/60 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 overflow-hidden group backdrop-blur-md">
                {/* Frosted glass overlay */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl opacity-60"></div>
                
                {/* Enhanced animated background glow - only on hover */}
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-blue-400/15 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Premium neon accent lines - only on hover */}
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-indigo-400 opacity-0 group-hover:opacity-80 rounded-t-xl transition-opacity duration-500"></div>
                 <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-400 to-blue-400 opacity-0 group-hover:opacity-60 rounded-b-xl transition-opacity duration-500"></div>

                {/* Clickable area for token details */}
                <div 
                  className="absolute inset-0 cursor-pointer z-0"
                  onClick={() => handleCoinClick("MASK")}
                ></div>

                {/* Header with profile and close */}
                <div className="relative flex items-start justify-between mb-4 z-10">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-purple-400/70 shadow-xl shadow-purple-500/40 group-hover:shadow-purple-400/60 transition-all duration-500 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-sm">
                        <img src="/images/ninja-cat.png" alt="MASK" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full border-2 border-black animate-pulse shadow-xl shadow-emerald-400/60"></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-bold text-xl bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-lg">
                          $MASK
                        </span>
                        <button className="w-5 h-5 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-purple-600/50 hover:to-cyan-600/50 rounded-lg flex items-center justify-center transition-all duration-300 border border-gray-600 hover:border-purple-400/50 backdrop-blur-sm">
                          <span className="text-xs text-gray-300">⧉</span>
                        </button>
                      </div>
                      <span className="text-gray-300 text-sm font-medium">catwifmask</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-xs">
                      <div className="flex items-center gap-1">
                        <span className="text-purple-300 font-semibold">MC:</span>
                        <span className="text-white font-bold">$13.0M</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-indigo-300 font-semibold">Holders:</span>
                        <span className="text-white font-bold">2.9K</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-purple-300 font-semibold">24h:</span>
                        <span className="text-emerald-400 font-bold">+116.5%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2 mb-4 relative z-10">
                  <div className="flex gap-1">
                    {/* X (Twitter) Logo */}
                    <button className="w-8 h-8 bg-gray-800 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-blue-400/50">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </button>
                    {/* Website Logo */}
                    <button className="w-8 h-8 bg-gray-800 hover:bg-green-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-green-400/50">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-green-400">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </button>
                    {/* Telegram Logo */}
                    <button className="w-8 h-8 bg-gray-800 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-blue-400/50">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </button>
                  </div>
                  
                  {selectedTokenForTrading === "MASK" ? (
                    <div className="ml-auto flex items-center gap-2 bg-black/40 rounded-lg p-2 border border-blue-500/20">
                      {/* Axiom */}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://axiom.trade', tokenData.MASK, e)}
                              className="p-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors"
                            >
                              <svg width="16" height="16" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.1384 17.3876H11.8623L18.0001 7.00012L24.1384 17.3876Z" fill="#6366F1"/>
                                <path d="M31 29.0003L5 29.0003L9.96764 20.5933L26.0324 20.5933L31 29.0003Z" fill="#6366F1"/>
                              </svg>
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">Axiom</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      {/* Bull X */}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://bullx.io', tokenData.MASK, e)}
                              className="p-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors"
                            >
                              <Image src="/Bullx-logo.svg" alt="Bull X" width={16} height={16} />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">Bull X</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      {/* Photon */}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://photon.trade', tokenData.MASK, e)}
                              className="p-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors"
                            >
                              <Image src="/photon%20logo.svg" alt="Photon" width={16} height={16} />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">Photon</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      {/* GMGN */}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://gmgn.ai', tokenData.MASK, e)}
                              className="p-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-lg transition-colors"
                            >
                              <Image src="/gmgn-logo.svg" alt="GMGN" width={16} height={16} />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">GMGN</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      {/* Nova */}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://nova.app', tokenData.MASK, e)}
                              className="p-2 bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/30 rounded-lg transition-colors"
                            >
                              <Image src="/nova-logo.svg" alt="Nova" width={16} height={16} />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">Nova</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  ) : (
                    <button 
                      className="ml-auto -mr-1 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 flex items-center gap-2 shadow-md"
                      onClick={(e) => handleTradeClick("MASK", e)}
                    >
                      Trade
                    </button>
                  )}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-purple-400 text-xs">Called</div>
                    <div className="text-white font-bold">2d ago</div>
                  </div>
                  <div>
                    <div className="text-pink-400 text-xs">Current Gain</div>
                    <div className="text-emerald-400 font-bold text-lg">116.5x</div>
                  </div>
                  <div>
                    <div className="text-orange-400 text-xs">Highest Gain</div>
                    <div className="text-emerald-400 font-bold">177.9x</div>
                  </div>
                </div>
              </div>

              {/* Pick 2 - $PEPE */}
              <div className="relative p-5 rounded-xl bg-gradient-to-br from-blue-600/30 via-blue-500/15 to-black/40 border-2 border-blue-400/30 hover:border-blue-300/60 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 overflow-hidden group backdrop-blur-md">
                {/* Frosted glass overlay */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl opacity-60"></div>
                
                {/* Enhanced animated background glow - only on hover */}
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-blue-400/15 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Premium neon accent lines - only on hover */}
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-indigo-400 opacity-0 group-hover:opacity-80 rounded-t-xl transition-opacity duration-500"></div>
                 <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-400 to-blue-400 opacity-0 group-hover:opacity-60 rounded-b-xl transition-opacity duration-500"></div>

                {/* Clickable area for token details */}
                <div 
                  className="absolute inset-0 cursor-pointer z-0"
                  onClick={() => handleCoinClick("PEPE")}
                ></div>

                <div className="relative flex items-start justify-between mb-4 z-10">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-green-400/70 shadow-xl shadow-green-500/40 group-hover:shadow-green-400/60 transition-all duration-500 bg-gradient-to-br from-green-500/20 to-pink-500/20 backdrop-blur-sm">
                        <img src="/images/space-pig.png" alt="PEPE" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full border-2 border-black animate-pulse shadow-xl shadow-emerald-400/60"></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-bold text-xl bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-lg">
                          $PEPE
                        </span>
                        <button className="w-5 h-5 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-green-600/50 hover:to-pink-600/50 rounded-lg flex items-center justify-center transition-all duration-300 border border-gray-600 hover:border-green-400/50 backdrop-blur-sm">
                          <span className="text-xs text-gray-300">⧉</span>
                        </button>
                      </div>
                      <span className="text-gray-300 text-sm font-medium">pepewifhat</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-xs">
                      <div className="flex items-center gap-1">
                        <span className="text-purple-300 font-semibold">MC:</span>
                        <span className="text-white font-bold">$7.8B</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-indigo-300 font-semibold">Holders:</span>
                        <span className="text-white font-bold">234K</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-purple-300 font-semibold">24h:</span>
                        <span className="text-emerald-400 font-bold">+89.2%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2 mb-4 relative z-10">
                  <div className="flex gap-1">
                    {/* X (Twitter) Logo */}
                    <button className="w-8 h-8 bg-gray-800 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-blue-400/50">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </button>
                    {/* Website Logo */}
                    <button className="w-8 h-8 bg-gray-800 hover:bg-green-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-green-400/50">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-green-400">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </button>
                    {/* Telegram Logo */}
                    <button className="w-8 h-8 bg-gray-800 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-blue-400/50">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </button>
                  </div>
                  
                  {selectedTokenForTrading === "PEPE" ? (
                    <div className="ml-auto flex items-center gap-2 bg-black/40 rounded-lg p-2 border border-blue-500/20">
                      {/* Axiom */}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://axiom.trade', tokenData.PEPE, e)}
                              className="p-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-lg transition-colors"
                            >
                              <svg width="16" height="16" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.1384 17.3876H11.8623L18.0001 7.00012L24.1384 17.3876Z" fill="#6366F1"/>
                                <path d="M31 29.0003L5 29.0003L9.96764 20.5933L26.0324 20.5933L31 29.0003Z" fill="#6366F1"/>
                              </svg>
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">Axiom</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      {/* Bull X */}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://bullx.io', tokenData.PEPE, e)}
                              className="p-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors"
                            >
                              <Image src="/Bullx-logo.svg" alt="Bull X" width={16} height={16} />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">Bull X</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      {/* Photon */}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://photon.trade', tokenData.PEPE, e)}
                              className="p-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors"
                            >
                              <Image src="/photon%20logo.svg" alt="Photon" width={16} height={16} />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">Photon</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      {/* GMGN */}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://gmgn.ai', tokenData.PEPE, e)}
                              className="p-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-lg transition-colors"
                            >
                              <Image src="/gmgn-logo.svg" alt="GMGN" width={16} height={16} />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">GMGN</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      {/* Nova */}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://nova.app', tokenData.PEPE, e)}
                              className="p-2 bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/30 rounded-lg transition-colors"
                            >
                              <Image src="/nova-logo.svg" alt="Nova" width={16} height={16} />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">Nova</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  ) : (
                    <button 
                      className="ml-auto -mr-1 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 flex items-center gap-2 shadow-md"
                      onClick={(e) => handleTradeClick("PEPE", e)}
                    >
                      Trade
                    </button>
                  )}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-purple-400 text-xs">Called</div>
                    <div className="text-white font-bold">5h ago</div>
                  </div>
                  <div>
                    <div className="text-pink-400 text-xs">Current Gain</div>
                    <div className="text-emerald-400 font-bold text-lg">89.2x</div>
                  </div>
                  <div>
                    <div className="text-orange-400 text-xs">Highest Gain</div>
                    <div className="text-emerald-400 font-bold">124.7x</div>
                  </div>
                </div>
              </div>

              {/* Pick 3 - $DOGE */}
              <div className="relative p-5 rounded-xl bg-gradient-to-br from-blue-600/30 via-blue-500/15 to-black/40 border-2 border-blue-400/30 hover:border-blue-300/60 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 overflow-hidden group backdrop-blur-md">
                {/* Frosted glass overlay */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl opacity-60"></div>
                
                {/* Enhanced animated background glow - only on hover */}
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-blue-400/15 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Premium neon accent lines - only on hover */}
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-indigo-400 opacity-0 group-hover:opacity-80 rounded-t-xl transition-opacity duration-500"></div>
                 <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-400 to-blue-400 opacity-0 group-hover:opacity-60 rounded-b-xl transition-opacity duration-500"></div>

                {/* Clickable area for token details */}
                <div 
                  className="absolute inset-0 cursor-pointer z-0"
                  onClick={() => handleCoinClick("DOGE")}
                ></div>

                <div className="relative flex items-start justify-between mb-4 z-10">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-cyan-400/70 shadow-xl shadow-cyan-500/40 group-hover:shadow-cyan-400/60 transition-all duration-500 bg-gradient-to-br from-cyan-500/20 to-orange-500/20 backdrop-blur-sm">
                        <img src="/images/blue-bunny.png" alt="DOGE" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full border-2 border-black animate-pulse shadow-xl shadow-emerald-400/60"></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-bold text-xl bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-lg">
                          $DOGE
                        </span>
                        <button className="w-5 h-5 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-cyan-600/50 hover:to-orange-600/50 rounded-lg flex items-center justify-center transition-all duration-300 border border-gray-600 hover:border-cyan-400/50 backdrop-blur-sm">
                          <span className="text-xs text-gray-300">⧉</span>
                        </button>
                      </div>
                      <span className="text-gray-300 text-sm font-medium">dogewifcoin</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-xs">
                      <div className="flex items-center gap-1">
                        <span className="text-purple-300 font-semibold">MC:</span>
                        <span className="text-white font-bold">$15.4B</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-indigo-300 font-semibold">Holders:</span>
                        <span className="text-white font-bold">4.8K</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-purple-300 font-semibold">24h:</span>
                        <span className="text-emerald-400 font-bold">+45.8%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2 mb-4 relative z-10">
                  <div className="flex gap-1">
                    {/* X (Twitter) Logo */}
                    <button className="w-8 h-8 bg-gray-800 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-blue-400/50">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </button>
                    {/* Website Logo */}
                    <button className="w-8 h-8 bg-gray-800 hover:bg-green-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-green-400/50">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-green-400">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </button>
                    {/* Telegram Logo */}
                    <button className="w-8 h-8 bg-gray-800 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-blue-400/50">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </button>
                  </div>
                  
                  {selectedTokenForTrading === "DOGE" ? (
                    <div className="ml-auto flex items-center gap-2 bg-black/40 rounded-lg p-2 border border-blue-500/20">
                      {/* Axiom */}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://axiom.trade', tokenData.DOGE, e)}
                              className="p-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 rounded-lg transition-colors"
                            >
                              <svg width="16" height="16" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.1384 17.3876H11.8623L18.0001 7.00012L24.1384 17.3876Z" fill="#6366F1"/>
                                <path d="M31 29.0003L5 29.0003L9.96764 20.5933L26.0324 20.5933L31 29.0003Z" fill="#6366F1"/>
                              </svg>
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">Axiom</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      {/* Bull X */}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://bullx.io', tokenData.DOGE, e)}
                              className="p-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors"
                            >
                              <Image src="/Bullx-logo.svg" alt="Bull X" width={16} height={16} />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">Bull X</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      {/* Photon */}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://photon.trade', tokenData.DOGE, e)}
                              className="p-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors"
                            >
                              <Image src="/photon%20logo.svg" alt="Photon" width={16} height={16} />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">Photon</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      {/* GMGN */}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://gmgn.ai', tokenData.DOGE, e)}
                              className="p-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-lg transition-colors"
                            >
                              <Image src="/gmgn-logo.svg" alt="GMGN" width={16} height={16} />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">GMGN</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      {/* Nova */}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://nova.app', tokenData.DOGE, e)}
                              className="p-2 bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/30 rounded-lg transition-colors"
                            >
                              <Image src="/nova-logo.svg" alt="Nova" width={16} height={16} />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">Nova</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  ) : (
                    <button 
                      className="ml-auto -mr-1 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 flex items-center gap-2 shadow-md"
                      onClick={(e) => handleTradeClick("DOGE", e)}
                    >
                      Trade
                    </button>
                  )}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-purple-400 text-xs">Called</div>
                    <div className="text-white font-bold">1d ago</div>
                  </div>
                  <div>
                    <div className="text-pink-400 text-xs">Current Gain</div>
                    <div className="text-emerald-400 font-bold text-lg">45.8x</div>
                  </div>
                  <div>
                    <div className="text-orange-400 text-xs">Highest Gain</div>
                    <div className="text-emerald-400 font-bold">67.3x</div>
                  </div>
                </div>
              </div>

              {/* Pick 4 - $BEAR */}
              <div className="relative p-5 rounded-xl bg-gradient-to-br from-blue-600/30 via-blue-500/15 to-black/40 border-2 border-blue-400/30 hover:border-blue-300/60 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 overflow-hidden group backdrop-blur-md">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-indigo-400 opacity-0 group-hover:opacity-80 rounded-t-xl transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-400 to-purple-400 opacity-0 group-hover:opacity-60 rounded-b-xl transition-opacity duration-500"></div>
                <div 
                  className="absolute inset-0 cursor-pointer z-0"
                  onClick={() => handleCoinClick("BEAR")}
                ></div>
                <div className="relative flex items-start justify-between mb-4 z-10">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-purple-400/70 shadow-xl shadow-purple-500/40 group-hover:shadow-purple-400/60 transition-all duration-500 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-sm">
                        <img src="/images/brown-bear.png" alt="BEAR" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full border-2 border-black animate-pulse shadow-xl shadow-emerald-400/60"></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-bold text-xl bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-lg">
                          $BEAR
                        </span>
                        <button className="w-5 h-5 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-purple-600/50 hover:to-cyan-600/50 rounded-lg flex items-center justify-center transition-all duration-300 border border-gray-600 hover:border-purple-400/50 backdrop-blur-sm">
                          <span className="text-xs text-gray-300">⧉</span>
                        </button>
                      </div>
                      <span className="text-gray-300 text-sm font-medium">brownbear</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-xs">
                      <div className="flex items-center gap-1">
                        <span className="text-emerald-300 font-semibold">MC:</span>
                        <span className="text-white font-bold">$4.2M</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-green-300 font-semibold">Holders:</span>
                        <span className="text-white font-bold">3.4K</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-teal-300 font-semibold">24h:</span>
                        <span className="text-emerald-400 font-bold">+28.7%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4 relative z-10">
                  <div className="flex gap-1">
                    <button className="w-8 h-8 bg-gray-800 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-blue-400/50">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </button>
                    <button className="w-8 h-8 bg-gray-800 hover:bg-green-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-green-400/50">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-green-400">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </button>
                    <button className="w-8 h-8 bg-gray-800 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-blue-400/50">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </button>
                  </div>
                  {selectedTokenForTrading === "BEAR" ? (
                    <div className="ml-auto flex items-center gap-2 bg-black/40 rounded-lg p-2 border border-blue-500/20">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://axiom.trade', teamTokenData.BEAR, e)}
                              className="p-2 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 rounded-lg transition-colors"
                            >
                              <svg width="16" height="16" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.1384 17.3876H11.8623L18.0001 7.00012L24.1384 17.3876Z" fill="#6366F1"/>
                                <path d="M31 29.0003L5 29.0003L9.96764 20.5933L26.0324 20.5933L31 29.0003Z" fill="#6366F1"/>
                              </svg>
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">Axiom</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://bullx.io', teamTokenData.BEAR, e)}
                              className="p-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors"
                            >
                              <Image src="/Bullx-logo.svg" alt="Bull X" width={16} height={16} />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">Bull X</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://photon.trade', teamTokenData.BEAR, e)}
                              className="p-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors"
                            >
                              <Image src="/photon%20logo.svg" alt="Photon" width={16} height={16} />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">Photon</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://gmgn.ai', teamTokenData.BEAR, e)}
                              className="p-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-lg transition-colors"
                            >
                              <Image src="/gmgn-logo.svg" alt="GMGN" width={16} height={16} />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">GMGN</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://nova.app', teamTokenData.BEAR, e)}
                              className="p-2 bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/30 rounded-lg transition-colors"
                            >
                              <Image src="/nova-logo.svg" alt="Nova" width={16} height={16} />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">Nova</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  ) : (
                    <button 
                      className="ml-auto -mr-1 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 flex items-center gap-2 shadow-md"
                      onClick={(e) => handleTradeClick("BEAR", e)}
                    >
                      Trade
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-purple-400 text-xs">Called</div>
                    <div className="text-white font-bold">3h ago</div>
                  </div>
                  <div>
                    <div className="text-pink-400 text-xs">Current Gain</div>
                    <div className="text-emerald-400 font-bold text-lg">28.7x</div>
                  </div>
                  <div>
                    <div className="text-orange-400 text-xs">Highest Gain</div>
                    <div className="text-emerald-400 font-bold">45.2x</div>
                  </div>
                </div>
              </div>

              {/* Pick 5 - $KITTY */}
              <div className="relative p-5 rounded-xl bg-gradient-to-br from-blue-600/30 via-blue-500/15 to-black/40 border-2 border-blue-400/30 hover:border-blue-300/60 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 overflow-hidden group backdrop-blur-md">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-blue-400/15 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-indigo-400 opacity-0 group-hover:opacity-80 rounded-t-xl transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-400 to-blue-400 opacity-0 group-hover:opacity-60 rounded-b-xl transition-opacity duration-500"></div>
                <div 
                  className="absolute inset-0 cursor-pointer z-0"
                  onClick={() => handleCoinClick("KITTY")}
                ></div>
                <div className="relative flex items-start justify-between mb-4 z-10">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-pink-400/70 shadow-xl shadow-pink-500/40 group-hover:shadow-pink-400/60 transition-all duration-500 bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-sm">
                        <img src="/images/hello-kitty.png" alt="KITTY" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full border-2 border-black animate-pulse shadow-xl shadow-emerald-400/60"></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-bold text-xl bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-lg">
                          $KITTY
                        </span>
                        <button className="w-5 h-5 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-pink-600/50 hover:to-rose-600/50 rounded-lg flex items-center justify-center transition-all duration-300 border border-gray-600 hover:border-pink-400/50 backdrop-blur-sm">
                          <span className="text-xs text-gray-300">⧉</span>
                        </button>
                      </div>
                      <span className="text-gray-300 text-sm font-medium">hellokitty</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-xs">
                      <div className="flex items-center gap-1">
                        <span className="text-pink-300 font-semibold">MC:</span>
                        <span className="text-white font-bold">$7.6M</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-rose-300 font-semibold">Holders:</span>
                        <span className="text-white font-bold">4.5K</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-purple-300 font-semibold">24h:</span>
                        <span className="text-emerald-400 font-bold">+19.8%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4 relative z-10">
                  <div className="flex gap-1">
                    <button className="w-8 h-8 bg-gray-800 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-blue-400/50">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </button>
                    <button className="w-8 h-8 bg-gray-800 hover:bg-green-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-green-400/50">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-green-400">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </button>
                    <button className="w-8 h-8 bg-gray-800 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-blue-400/50">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </button>
                  </div>
                  {selectedTokenForTrading === "KITTY" ? (
                    <div className="ml-auto flex items-center gap-2 bg-black/40 rounded-lg p-2 border border-blue-500/20">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://axiom.trade', teamTokenData.KITTY ?? tokenData.MASK, e)}
                              className="p-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors"
                            >
                              <svg width="16" height="16" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.1384 17.3876H11.8623L18.0001 7.00012L24.1384 17.3876Z" fill="#6366F1"/>
                                <path d="M31 29.0003L5 29.0003L9.96764 20.5933L26.0324 20.5933L31 29.0003Z" fill="#6366F1"/>
                              </svg>
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">Axiom</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://bullx.io', teamTokenData.KITTY ?? tokenData.MASK, e)}
                              className="p-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors"
                            >
                              <img src="/Bullx-logo.svg" alt="Bull X" width={16} height={16} />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">Bull X</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://photon.trade', teamTokenData.KITTY ?? tokenData.MASK, e)}
                              className="p-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors"
                            >
                              <img src="/photon%20logo.svg" alt="Photon" width={16} height={16} />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">Photon</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://gmgn.ai', teamTokenData.KITTY ?? tokenData.MASK, e)}
                              className="p-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-lg transition-colors"
                            >
                              <img src="/gmgn-logo.svg" alt="GMGN" width={16} height={16} />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">GMGN</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://nova.app', teamTokenData.KITTY ?? tokenData.MASK, e)}
                              className="p-2 bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/30 rounded-lg transition-colors"
                            >
                              <img src="/nova-logo.svg" alt="Nova" width={16} height={16} />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">Nova</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  ) : (
                    <button 
                      className="ml-auto -mr-1 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 flex items-center gap-2 shadow-md"
                      onClick={(e) => handleTradeClick("KITTY", e)}
                    >
                      Trade
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-purple-400 text-xs">Called</div>
                    <div className="text-white font-bold">2h ago</div>
                  </div>
                  <div>
                    <div className="text-pink-400 text-xs">Current Gain</div>
                    <div className="text-emerald-400 font-bold text-lg">19.8x</div>
                  </div>
                  <div>
                    <div className="text-orange-400 text-xs">Highest Gain</div>
                    <div className="text-emerald-400 font-bold">32.4x</div>
                  </div>
                </div>
              </div>

              {/* Pick 6 - $ROBOT */}
              <div className="relative p-5 rounded-xl bg-gradient-to-br from-blue-600/30 via-blue-500/15 to-black/40 border-2 border-blue-400/30 hover:border-blue-300/60 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 overflow-hidden group backdrop-blur-md">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl opacity-60"></div>
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-blue-400/15 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-indigo-400 opacity-0 group-hover:opacity-80 rounded-t-xl transition-opacity duration-500"></div>
                 <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-400 to-blue-400 opacity-0 group-hover:opacity-60 rounded-b-xl transition-opacity duration-500"></div>
                <div 
                  className="absolute inset-0 cursor-pointer z-0"
                  onClick={() => handleCoinClick("ROBOT")}
                ></div>
                <div className="relative flex items-start justify-between mb-4 z-10">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-blue-400/70 shadow-xl shadow-blue-500/40 group-hover:shadow-blue-400/60 transition-all duration-500 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm">
                        <img src="/images/robot-face.png" alt="ROBOT" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full border-2 border-black animate-pulse shadow-xl shadow-emerald-400/60"></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-bold text-xl bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-lg">
                          $ROBOT
                        </span>
                        <button className="w-5 h-5 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-blue-600/50 hover:to-indigo-600/50 rounded-lg flex items-center justify-center transition-all duration-300 border border-gray-600 hover:border-blue-400/50 backdrop-blur-sm">
                          <span className="text-xs text-gray-300">⧉</span>
                        </button>
                      </div>
                      <span className="text-gray-300 text-sm font-medium">robotface</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-xs">
                      <div className="flex items-center gap-1">
                        <span className="text-blue-300 font-semibold">MC:</span>
                        <span className="text-white font-bold">$23.1M</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-indigo-300 font-semibold">Holders:</span>
                        <span className="text-white font-bold">6.7K</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-purple-300 font-semibold">24h:</span>
                        <span className="text-emerald-400 font-bold">+17.5%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4 relative z-10">
                  <div className="flex gap-1">
                    <button className="w-8 h-8 bg-gray-800 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-blue-400/50">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </button>
                    <button className="w-8 h-8 bg-gray-800 hover:bg-green-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-green-400/50">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-green-400">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </button>
                    <button className="w-8 h-8 bg-gray-800 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-blue-400/50">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </button>
                  </div>
                  {selectedTokenForTrading === "ROBOT" ? (
                    <div className="ml-auto flex items-center gap-2 bg-black/40 rounded-lg p-2 border border-blue-500/20">
                      {/* Axiom */}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://axiom.trade', tokenData.MASK, e)}
                              className="p-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors"
                            >
                              <svg width="16" height="16" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.1384 17.3876H11.8623L18.0001 7.00012L24.1384 17.3876Z" fill="#6366F1"/>
                                <path d="M31 29.0003L5 29.0003L9.96764 20.5933L26.0324 20.5933L31 29.0003Z" fill="#6366F1"/>
                              </svg>
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">Axiom</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      {/* Bull X */}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://bullx.io', tokenData.MASK, e)}
                              className="p-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors"
                            >
                              <img src="/Bullx-logo.svg" alt="Bull X" width={16} height={16} />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">Bull X</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      {/* Photon */}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://photon.trade', tokenData.MASK, e)}
                              className="p-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors"
                            >
                              <img src="/photon%20logo.svg" alt="Photon" width={16} height={16} />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">Photon</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      {/* GMGN */}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://gmgn.ai', tokenData.MASK, e)}
                              className="p-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors"
                            >
                              <img src="/gmgn-logo.svg" alt="GMGN" width={16} height={16} />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">GMGN</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      {/* Nova */}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={(e) => handlePlatformClick('https://nova.app', tokenData.MASK, e)}
                              className="p-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors"
                            >
                              <img src="/nova-logo.svg" alt="Nova" width={16} height={16} />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">Nova</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  ) : (
                    <button 
                      className="ml-auto -mr-1 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 flex items-center gap-2 shadow-md"
                      onClick={(e) => handleTradeClick("ROBOT", e)}
                    >
                      Trade
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-purple-400 text-xs">Called</div>
                    <div className="text-white font-bold">1h ago</div>
                  </div>
                  <div>
                    <div className="text-pink-400 text-xs">Current Gain</div>
                    <div className="text-emerald-400 font-bold text-lg">17.5x</div>
                  </div>
                  <div>
                    <div className="text-orange-400 text-xs">Highest Gain</div>
                    <div className="text-emerald-400 font-bold">28.9x</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        {/* Calls History */}
        <div className="mb-8">
          <div className="rounded-xl p-5 h-full bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-slate-900/20 border border-blue-500/20 shadow-lg shadow-blue-500/10 backdrop-blur-md">
            <div className="mb-4 flex items-center gap-3">
              <Activity className="h-5 w-5 text-blue-400" />
              <h3 className="text-base font-bold text-blue-300">Calls History</h3>
            </div>
            {/* Animated scrolling bar (pauses on hover) */}
            <div className="relative overflow-hidden bg-black/60 border border-blue-500/20 rounded-lg backdrop-blur-[0.5rem] shadow-lg shadow-blue-500/10 group">
              <div className="animate-scroll-left group-hover:[animation-play-state:paused] flex gap-6 py-4 px-4" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
              {/* Historical Call 1 */}
              <div className="flex items-center gap-4 min-w-[300px] bg-gradient-to-r from-blue-900/30 to-indigo-900/20 border border-blue-500/30 rounded-lg p-3 backdrop-blur-sm flex-shrink-0 history-card cursor-pointer" onClick={() => handleCoinClick('ROBOT')}>
                <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-blue-400/60 shadow-lg shadow-blue-500/30 flex-shrink-0">
                  <img src="/images/robot-face.png" alt="ROBOT" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-bold text-sm">$ROBOT</div>
                  <div className="text-white/80 text-xs">Called 3d ago</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-emerald-400 font-bold text-sm">234.7x</div>
                  <div className="text-white/80 text-xs">$8.9M MC</div>
                </div>
              </div>

              {/* Historical Call 2 */}
              <div className="flex items-center gap-4 min-w-[300px] bg-gradient-to-r from-blue-900/30 to-indigo-900/20 border border-blue-500/30 rounded-lg p-3 backdrop-blur-sm flex-shrink-0 history-card cursor-pointer" onClick={() => handleCoinClick('GLASSES')}>
                <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-blue-400/60 shadow-lg shadow-blue-500/30 flex-shrink-0">
                  <img src="/images/glasses-guy.png" alt="GLASSES" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-bold text-sm">$GLASSES</div>
                  <div className="text-white/80 text-xs">Called 4d ago</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-emerald-400 font-bold text-sm">189.3x</div>
                  <div className="text-white/80 text-xs">$12.4M MC</div>
                </div>
              </div>

              {/* Historical Call 3 */}
              <div className="flex items-center gap-4 min-w-[300px] bg-gradient-to-r from-blue-900/30 to-indigo-900/20 border border-blue-500/30 rounded-lg p-3 backdrop-blur-sm flex-shrink-0 history-card cursor-pointer" onClick={() => handleCoinClick('KITTY')}>
                <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-blue-400/60 shadow-lg shadow-blue-500/30 flex-shrink-0">
                  <img src="/images/hello-kitty.png" alt="KITTY" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-bold text-sm">$KITTY</div>
                  <div className="text-white/80 text-xs">Called 5d ago</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-emerald-400 font-bold text-sm">156.8x</div>
                  <div className="text-white/80 text-xs">$6.7M MC</div>
                </div>
              </div>

              {/* Historical Call 4 */}
              <div className="flex items-center gap-4 min-w-[300px] bg-gradient-to-r from-blue-900/30 to-indigo-900/20 border border-blue-500/30 rounded-lg p-3 backdrop-blur-sm flex-shrink-0 history-card cursor-pointer" onClick={() => handleCoinClick('BEAR')}>
                <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-blue-400/60 shadow-lg shadow-blue-500/30 flex-shrink-0">
                  <img src="/images/brown-bear.png" alt="BEAR" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-bold text-sm">$BEAR</div>
                  <div className="text-white/80 text-xs">Called 6d ago</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-emerald-400 font-bold text-sm">98.4x</div>
                  <div className="text-white/80 text-xs">$15.2M MC</div>
                </div>
              </div>

              {/* Historical Call 5 */}
              <div className="flex items-center gap-4 min-w-[300px] bg-gradient-to-r from-blue-900/30 to-indigo-900/20 border border-blue-500/30 rounded-lg p-3 backdrop-blur-sm flex-shrink-0 history-card cursor-pointer" onClick={() => handleCoinClick('DOGS')}>
                <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-blue-400/60 shadow-lg shadow-blue-500/30 flex-shrink-0">
                  <img src="/images/dogs-yard.png" alt="DOGS" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-bold text-sm">$DOGS</div>
                  <div className="text-white/80 text-xs">Called 7d ago</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-emerald-400 font-bold text-sm">67.9x</div>
                  <div className="text-white/80 text-xs">$22.1M MC</div>
                </div>
              </div>

              {/* Duplicate the items for seamless loop */}
              <div className="flex items-center gap-4 min-w-[300px] bg-gradient-to-r from-blue-900/30 to-indigo-900/20 border border-blue-500/30 rounded-lg p-3 backdrop-blur-sm flex-shrink-0 history-card cursor-pointer" onClick={() => handleCoinClick('ROBOT')}>
                <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-blue-400/60 shadow-lg shadow-blue-500/30 flex-shrink-0">
                  <img src="/images/robot-face.png" alt="ROBOT" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-bold text-sm">$ROBOT</div>
                  <div className="text-white/80 text-xs">Called 3d ago</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-emerald-400 font-bold text-sm">234.7x</div>
                  <div className="text-white/80 text-xs">$8.9M MC</div>
                </div>
              </div>

              <div className="flex items-center gap-4 min-w-[300px] bg-gradient-to-r from-blue-900/30 to-indigo-900/20 border border-blue-500/30 rounded-lg p-3 backdrop-blur-sm flex-shrink-0 history-card cursor-pointer" onClick={() => handleCoinClick('GLASSES')}>
                <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-blue-400/60 shadow-lg shadow-blue-500/30 flex-shrink-0">
                  <img src="/images/glasses-guy.png" alt="GLASSES" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-bold text-sm">$GLASSES</div>
                  <div className="text-white/80 text-xs">Called 4d ago</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-emerald-400 font-bold text-sm">189.3x</div>
                  <div className="text-white/80 text-xs">$12.4M MC</div>
                </div>
              </div>

              <div className="flex items-center gap-4 min-w-[300px] bg-gradient-to-r from-blue-900/30 to-indigo-900/20 border border-blue-500/30 rounded-lg p-3 backdrop-blur-sm flex-shrink-0 history-card cursor-pointer" onClick={() => handleCoinClick('KITTY')}>
                <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-blue-400/60 shadow-lg shadow-blue-500/30 flex-shrink-0">
                  <img src="/images/hello-kitty.png" alt="KITTY" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-bold text-sm">$KITTY</div>
                  <div className="text-white/80 text-xs">Called 5d ago</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-emerald-400 font-bold text-sm">156.8x</div>
                  <div className="text-white/80 text-xs">$6.7M MC</div>
                </div>
              </div>

              <div className="flex items-center gap-4 min-w-[300px] bg-gradient-to-r from-blue-900/30 to-indigo-900/20 border border-blue-500/30 rounded-lg p-3 backdrop-blur-sm flex-shrink-0 history-card cursor-pointer" onClick={() => handleCoinClick('BEAR')}>
                <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-blue-400/60 shadow-lg shadow-blue-500/30 flex-shrink-0">
                  <img src="/images/brown-bear.png" alt="BEAR" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-bold text-sm">$BEAR</div>
                  <div className="text-white/80 text-xs">Called 6d ago</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-emerald-400 font-bold text-sm">98.4x</div>
                  <div className="text-white/80 text-xs">$15.2M MC</div>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
        {/* Trending Tokens Section */}
        <div className="mb-8">

          <Card className="bg-black/80 border border-blue-500/20 shadow-lg shadow-blue-500/10 mb-6 backdrop-blur-[0.5rem]">
            <CardContent className="p-4 sm:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Left: Trending Tokens panel (match Statistics format) */}
                <div>
                  <div className="rounded-xl p-5 h-full bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-slate-900/20 border border-blue-500/20 shadow-lg shadow-blue-500/10 backdrop-blur-md">
                    <div className="mb-4">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="h-5 w-5 text-blue-400" />
                        <h3 className="text-base font-bold text-blue-300">Trending Tokens</h3>
                      </div>
                    </div>
                     <div className="trending-scroll max-h-[80vh] overflow-y-auto pr-2 overscroll-contain">
                      <div className="space-y-3">
                        {trendingList.map((token, index) => {
                          const isUp = token.change >= 0
                          const changeColor = isUp ? "text-blue-400" : "text-rose-400"
                          const platformBarColor = isUp ? "border-blue-500/20" : "border-rose-500/20"
                        return (
                          <div
                            key={token._rowId}
                              className={`relative rounded-lg bg-black/40 border border-blue-500/20 transition-all duration-300 overflow-hidden group backdrop-blur-md`}
                          >
                            <div
                              className="absolute inset-0 cursor-pointer z-0"
                              onClick={() => handleCoinClick(token.symbol)}
                            />

                              <div className="relative z-10 p-3 sm:p-3.5 cursor-pointer" onClick={() => handleCoinClick(token.symbol)}>
                                <div className="flex items-center gap-4" onClick={() => handleCoinClick(token.symbol)}>
                                  <div
                                    className="flex items-center gap-4 mr-auto cursor-pointer rounded-md px-1 py-1 hover:bg-white/5"
                                    onClick={() => handleCoinClick(token.symbol)}
                                  >
                                    <div className="w-6 text-right mr-1 text-slate-400 font-semibold tabular-nums">{index + 1}.</div>
                                    <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-blue-400/50 shadow-lg shadow-blue-500/30 flex-shrink-0">
                                      <img src={token.image} alt={token.symbol} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="min-w-[140px]">
                                      <div className="flex items-center gap-2">
                                        <span className="text-white font-bold text-lg">${token.symbol}</span>
                                        <span className="text-xs text-slate-400 font-medium">{token.name}</span>
                                      </div>
                                      <div className="text-slate-300 text-sm">{token.price}</div>
                                    </div>
                                  </div>

                                <div className="flex items-center gap-4 ml-auto">
                                  <div className="hidden lg:block min-w-[110px]">
                                    <div className="text-xs text-slate-400">MC</div>
                                    <div className="text-white font-semibold">{token.mcap}</div>
                                  </div>
                                  <div className="hidden md:block min-w-[110px]">
                                    <div className="text-xs text-slate-400">Liquidity</div>
                                    <div className="text-white font-semibold">{token.liquidity}</div>
                                  </div>
                                  <div className="hidden md:block min-w-[110px]">
                                    <div className="text-xs text-slate-400">Volume</div>
                                    <div className="text-white font-semibold">{token.volume}</div>
                                  </div>
                                  <div className="min-w-[90px] text-right sm:text-left">
                                    <div className="text-xs text-slate-400">Txns</div>
                                    <div className="text-white font-semibold">{token.txns}</div>
                                  </div>

                                  {selectedTokenForTrading === token._rowId ? (
                                    <div className={`-ml-12 sm:-ml-20 flex items-center gap-1 bg-black/40 rounded-md p-1 border ${platformBarColor}`} onClick={(e) => e.stopPropagation()}>
                                      <TooltipProvider>
                                        <Tooltip>
                                          <TooltipTrigger asChild>
                                            <button
                                              onClick={(e) => handlePlatformClick('https://axiom.trade', token as any, e)}
                                              className="h-6 w-6 p-1 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 rounded-md transition-colors flex items-center justify-center"
                                            >
                                              <svg width="14" height="14" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24.1384 17.3876H11.8623L18.0001 7.00012L24.1384 17.3876Z" fill="#6366F1"/>
                                                <path d="M31 29.0003L5 29.0003L9.96764 20.5933L26.0324 20.5933L31 29.0003Z" fill="#6366F1"/>
                                              </svg>
                                            </button>
                                          </TooltipTrigger>
                                          <TooltipContent side="top"><p className="text-xs">Axiom</p></TooltipContent>
                                        </Tooltip>
                                      </TooltipProvider>

                                      <TooltipProvider>
                                        <Tooltip>
                                          <TooltipTrigger asChild>
                                            <button
                                              onClick={(e) => handlePlatformClick('https://gmgn.ai', token as any, e)}
                                              className="h-6 w-6 p-1 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-md transition-colors flex items-center justify-center"
                                            >
                                              <img src="/gmgn-logo.svg" alt="GMGN" width="12" height="12" />
                                            </button>
                                          </TooltipTrigger>
                                          <TooltipContent side="top"><p className="text-xs">GMGN</p></TooltipContent>
                                        </Tooltip>
                                      </TooltipProvider>

                                      <TooltipProvider>
                                        <Tooltip>
                                          <TooltipTrigger asChild>
                                            <button
                                              onClick={(e) => handlePlatformClick('https://nova.app', token as any, e)}
                                              className="h-6 w-6 p-1 bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/30 rounded-md transition-colors flex items-center justify-center"
                                            >
                                              <img src="/nova-logo.svg" alt="Nova" width="12" height="12" />
                                            </button>
                                          </TooltipTrigger>
                                          <TooltipContent side="top"><p className="text-xs">Nova</p></TooltipContent>
                                        </Tooltip>
                                      </TooltipProvider>

                                      <TooltipProvider>
                                        <Tooltip>
                                          <TooltipTrigger asChild>
                                            <button
                                              onClick={(e) => handlePlatformClick('https://bullx.io', token as any, e)}
                                              className="h-6 w-6 p-1 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-md transition-colors flex items-center justify-center"
                                            >
                                              <img src="/Bullx-logo.svg" alt="Bull X" width="12" height="12" />
                                            </button>
                                          </TooltipTrigger>
                                          <TooltipContent side="top"><p className="text-xs">Bull X</p></TooltipContent>
                                        </Tooltip>
                                      </TooltipProvider>

                                      <TooltipProvider>
                                        <Tooltip>
                                          <TooltipTrigger asChild>
                                            <button
                                              onClick={(e) => handlePlatformClick('https://photon.trade', token as any, e)}
                                              className="h-6 w-6 p-1 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-md transition-colors flex items-center justify-center"
                                            >
                                              <img src="/photon%20logo.svg" alt="Photon" width="12" height="12" />
                                            </button>
                                          </TooltipTrigger>
                                          <TooltipContent side="top"><p className="text-xs">Photon</p></TooltipContent>
                                        </Tooltip>
                                      </TooltipProvider>
                                    </div>
                                  ) : (
                                    <button
                                      className="ml-0 sm:-ml-4 px-3 py-1.5 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-md text-gray-300 text-sm font-semibold transition-all duration-200 shadow-md"
                                      onClick={(e) => handleTradeClick(token._rowId, e)}
                                    >
                                      Trade
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Smart Wallets panel */}
                <div>
                  <div className="rounded-xl p-5 h-full bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-slate-900/20 border border-blue-500/20 shadow-lg shadow-blue-500/10 backdrop-blur-md">
                    <div className="mb-4">
                      <div className="flex items-center gap-3">
                        <Wallet className="h-5 w-5 text-blue-400" />
                        <h3 className="text-base font-bold text-blue-300">Smart Wallets</h3>
                      </div>
                    </div>

                    {/* Match Trending Tokens height and add internal vertical scroll on the right */}
                    <div className="trending-scroll max-h-[80vh] min-h-[80vh] overflow-y-auto pr-2 overscroll-contain">
                      <div className="grid grid-cols-3 grid-rows-3 auto-rows-[minmax(0,_1fr)] gap-4 h-full">
                        {smartWallets.map((wallet) => (
                          <div key={wallet.id} className="rounded-lg bg-black/60 border border-slate-600/40 hover:border-slate-500/50 transition-colors h-full flex flex-col">
                            {/* Simplified header: avatar top-left, address below, socials on the right */}
                            <div className="p-3 border-b border-slate-600/30">
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex items-start gap-3 min-w-0">
                                  <img src={wallet.avatar || '/placeholder-user.jpg'} alt={wallet.name} className="w-12 h-12 rounded-md border border-slate-600/50 object-cover" />
                                  <div className="min-w-0">
                                    <div className="text-sm font-semibold text-white truncate">{wallet.name}</div>
                                    <div className="text-[11px] text-slate-400 truncate">{wallet.address}</div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                  <button className="h-7 w-7 p-0.5 rounded-md border border-slate-600/40 bg-transparent hover:bg-slate-700/30 flex items-center justify-center">
                                    <img src="/X-Logo.svg" alt="X" className="w-4 h-4 object-contain filter invert brightness-200" />
                                  </button>
                                  <button className="h-7 w-7 p-0.5 rounded-md border border-slate-600/40 bg-transparent hover:bg-slate-700/30 flex items-center justify-center">
                                    <img src="/telegram-svgrepo-com.svg" alt="Telegram" className="w-4 h-4 object-contain filter invert brightness-200" />
                                  </button>
                                </div>
                              </div>
                            </div>

                            {/* Holdings with token, percent and Trade button */}
                            <div className="p-3 flex-1 flex flex-col">
                              <div className="text-[11px] text-slate-400 mb-2">Current Holdings</div>
                              <div className="space-y-2 overflow-hidden">
                                <div className="max-h-32 overflow-y-auto pr-1 custom-holdings-scroll">
                                {wallet.holdings.map((h, idx) => {
                                  const holdingKey = `${wallet.id}:${h.symbol}`
                                  return (
                                  <div key={idx} className="flex items-center gap-2">
                                  <img src={h.icon || '/images/ninja-cat.png'} alt={h.symbol} className="w-8 h-8 rounded-[6px] border border-slate-600/50 cursor-pointer" onClick={() => handleCoinClick(h.symbol)} />
                                    <div className="flex-1 min-w-0 cursor-pointer" onClick={() => handleCoinClick(h.symbol)}>
                                      <div className="text-sm text-white font-semibold truncate">{'$' + h.symbol.toUpperCase()}</div>
                                      <div className="text-[11px] text-slate-400 truncate">{h.name}</div>
                                    </div>
                                     <div className="text-right pr-1">
                                      <div className="text-[10px] text-slate-400">Holding</div>
                                      <div className="text-[11px] text-white font-semibold">{h.percent}</div>
                                    </div>
                                     {selectedTokenForTrading === holdingKey ? (
                                       <div className="ml-2 flex items-center gap-1 bg-black/40 rounded-md p-0.5 border border-blue-500/20" onClick={(e) => e.stopPropagation()}>
                                        <TooltipProvider>
                                          <Tooltip>
                                            <TooltipTrigger asChild>
                                              <button
                                                onClick={(e) => handlePlatformClick('https://axiom.trade', { contract: (trendingTokens.find(t=>t.symbol===h.symbol.toUpperCase())?.contract) || (tokenData as any)[h.symbol.toUpperCase()]?.contract || '' }, e)}
                                                className="h-6 w-6 p-1 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 rounded-md transition-colors flex items-center justify-center"
                                              >
                                                <svg width="14" height="14" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M24.1384 17.3876H11.8623L18.0001 7.00012L24.1384 17.3876Z" fill="#6366F1"/>
                                                  <path d="M31 29.0003L5 29.0003L9.96764 20.5933L26.0324 20.5933L31 29.0003Z" fill="#6366F1"/>
                                                </svg>
                                              </button>
                                            </TooltipTrigger>
                                            <TooltipContent side="top"><p className="text-xs">Axiom</p></TooltipContent>
                                          </Tooltip>
                                        </TooltipProvider>

                                        <TooltipProvider>
                                          <Tooltip>
                                            <TooltipTrigger asChild>
                                              <button
                                                onClick={(e) => handlePlatformClick('https://bullx.io', { contract: (trendingTokens.find(t=>t.symbol===h.symbol.toUpperCase())?.contract) || (tokenData as any)[h.symbol.toUpperCase()]?.contract || '' }, e)}
                                                className="h-6 w-6 p-1 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-md transition-colors flex items-center justify-center"
                                              >
                                                <img src="/Bullx-logo.svg" alt="Bull X" width="12" height="12" className="object-contain block" />
                                              </button>
                                            </TooltipTrigger>
                                            <TooltipContent side="top"><p className="text-xs">Bull X</p></TooltipContent>
                                          </Tooltip>
                                        </TooltipProvider>

                                        <TooltipProvider>
                                          <Tooltip>
                                            <TooltipTrigger asChild>
                                              <button
                                                onClick={(e) => handlePlatformClick('https://photon.trade', { contract: (trendingTokens.find(t=>t.symbol===h.symbol.toUpperCase())?.contract) || (tokenData as any)[h.symbol.toUpperCase()]?.contract || '' }, e)}
                                                className="h-6 w-6 p-1 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-md transition-colors flex items-center justify-center"
                                              >
                                                <img src="/photon%20logo.svg" alt="Photon" width="12" height="12" className="object-contain block" />
                                              </button>
                                            </TooltipTrigger>
                                            <TooltipContent side="top"><p className="text-xs">Photon</p></TooltipContent>
                                          </Tooltip>
                                        </TooltipProvider>

                                        <TooltipProvider>
                                          <Tooltip>
                                            <TooltipTrigger asChild>
                                              <button
                                                onClick={(e) => handlePlatformClick('https://gmgn.ai', { contract: (trendingTokens.find(t=>t.symbol===h.symbol.toUpperCase())?.contract) || (tokenData as any)[h.symbol.toUpperCase()]?.contract || '' }, e)}
                                                className="h-6 w-6 p-1 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-md transition-colors flex items-center justify-center"
                                              >
                                                <img src="/gmgn-logo.svg" alt="GMGN" width="12" height="12" className="object-contain block" />
                                              </button>
                                            </TooltipTrigger>
                                            <TooltipContent side="top"><p className="text-xs">GMGN</p></TooltipContent>
                                          </Tooltip>
                                        </TooltipProvider>

                                        <TooltipProvider>
                                          <Tooltip>
                                            <TooltipTrigger asChild>
                                              <button
                                                onClick={(e) => handlePlatformClick('https://nova.app', { contract: (trendingTokens.find(t=>t.symbol===h.symbol.toUpperCase())?.contract) || (tokenData as any)[h.symbol.toUpperCase()]?.contract || '' }, e)}
                                                className="h-6 w-6 p-1 bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/30 rounded-md transition-colors flex items-center justify-center"
                                              >
                                                <img src="/nova-logo.svg" alt="Nova" width="12" height="12" className="object-contain block" />
                                              </button>
                                            </TooltipTrigger>
                                            <TooltipContent side="top"><p className="text-xs">Nova</p></TooltipContent>
                                          </Tooltip>
                                        </TooltipProvider>
                                      </div>
                                    ) : (
                                      <Button
                                        className="h-7 px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-md text-gray-300 text-xs font-semibold transition-all duration-200 shadow-md"
                                        variant="outline"
                                        onClick={(e) => handleTradeClick(holdingKey, e)}
                                      >
                                        Trade
                                      </Button>
                                    )}
                                  </div>
                                  )
                                })}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      <CoinDetailModal
        isOpen={isCoinModalOpen}
        onClose={() => setIsCoinModalOpen(false)}
        coinSymbol={selectedCoin || ""}
      />

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

        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }

        .history-card {
          transform: translateZ(0);
          will-change: transform;
          backface-visibility: hidden;
        }

        /* Small scrollbar for wallet holdings */
        :global(.custom-holdings-scroll) {
          /* Hide in Firefox until hover */
          scrollbar-width: none;
          scrollbar-color: transparent transparent;
        }
        :global(.custom-holdings-scroll:hover) {
          scrollbar-width: thin;
          scrollbar-color: rgba(59,130,246,0.6) rgba(15,23,42,0.3);
        }
        :global(.custom-holdings-scroll::-webkit-scrollbar) {
          width: 2px; /* thinner */
          background: transparent;
        }
        :global(.custom-holdings-scroll::-webkit-scrollbar-track) {
          background: transparent;
          border-radius: 9999px;
        }
        :global(.custom-holdings-scroll::-webkit-scrollbar-thumb) {
          background: transparent;
          border-radius: 9999px;
        }
        :global(.custom-holdings-scroll:hover::-webkit-scrollbar-thumb) {
          background: rgba(59,130,246,0.7);
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0) translateZ(0);
          }
          100% {
            transform: translateX(calc(-306px * 4 - 24px * 4)) translateZ(0);
          }
        }

        /* Trending Tokens & Smart Wallets scrollbar styling (bluish) */
        :global(.trending-scroll) {
          scrollbar-width: thin; /* Firefox */
          scrollbar-color: rgba(59,130,246,0.5) rgba(30,41,59,0.35);
          scrollbar-gutter: stable;
        }
        :global(.trending-scroll::-webkit-scrollbar) {
          width: 8px;
        }
        :global(.trending-scroll::-webkit-scrollbar-track) {
          background: rgba(30,41,59,0.35);
          border-radius: 9999px;
        }
        :global(.trending-scroll::-webkit-scrollbar-thumb) {
          background: linear-gradient(180deg, rgba(59,130,246,0.6), rgba(56,189,248,0.5));
          border-radius: 9999px;
        }
        :global(.trending-scroll:hover::-webkit-scrollbar-thumb) {
          background: linear-gradient(180deg, rgba(96,165,250,0.85), rgba(56,189,248,0.75));
        }
      `}</style>
    </div>
  )
} 