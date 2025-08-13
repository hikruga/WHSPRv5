"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { AxiomLogo } from "@/components/icons/axiom-logo"

interface PlatformSelectionModalProps {
  isOpen: boolean
  onClose: () => void
  tokenSymbol?: string
  tokenContract?: string
}

interface Platform {
  name: string
  url: string
  logo: React.ReactNode
  description: string
  color: string
  hoverColor: string
}

export function PlatformSelectionModal({ isOpen, onClose, tokenSymbol = "TOKEN", tokenContract }: PlatformSelectionModalProps) {
  
  const platforms: Platform[] = [
    {
      name: "Jupiter",
      url: `https://jup.ag/swap/SOL-${tokenContract || 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'}`,
      description: "Leading Solana DEX aggregator",
      color: "from-green-400 to-emerald-500",
      hoverColor: "hover:shadow-green-500/20",
      logo: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="url(#jupiter-gradient)" />
          <path d="M8 12L16 8L24 12L16 16L8 12Z" fill="white" />
          <path d="M8 20L16 16L24 20L16 24L8 20Z" fill="white" fillOpacity="0.7" />
          <defs>
            <linearGradient id="jupiter-gradient" x1="0" y1="0" x2="32" y2="32">
              <stop stopColor="#10B981" />
              <stop offset="1" stopColor="#059669" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      name: "Photon",
      url: `https://photon-sol.tinyastro.io/en/lp/${tokenContract || 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'}`,
      description: "Fast Solana trading bot",
      color: "from-blue-400 to-cyan-500",
      hoverColor: "hover:shadow-blue-500/20",
      logo: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="url(#photon-gradient)" />
          <circle cx="16" cy="12" r="3" fill="white" />
          <path d="M16 16L12 22H20L16 16Z" fill="white" fillOpacity="0.8" />
          <path d="M16 16L10 10L22 10L16 16Z" fill="white" fillOpacity="0.6" />
          <defs>
            <linearGradient id="photon-gradient" x1="0" y1="0" x2="32" y2="32">
              <stop stopColor="#3B82F6" />
              <stop offset="1" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      name: "Trojan",
      url: `https://trojan.so/swap?from=SOL&to=${tokenContract || 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'}`,
      description: "Advanced Solana trading terminal",
      color: "from-red-400 to-rose-500",
      hoverColor: "hover:shadow-red-500/20",
      logo: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="url(#trojan-gradient)" />
          <rect x="10" y="8" width="12" height="16" rx="2" fill="white" />
          <rect x="12" y="10" width="8" height="2" fill="#EF4444" />
          <rect x="12" y="14" width="6" height="1" fill="#EF4444" />
          <rect x="12" y="17" width="8" height="1" fill="#EF4444" />
          <rect x="12" y="20" width="4" height="1" fill="#EF4444" />
          <defs>
            <linearGradient id="trojan-gradient" x1="0" y1="0" x2="32" y2="32">
              <stop stopColor="#EF4444" />
              <stop offset="1" stopColor="#F43F5E" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      name: "Maestro",
      url: `https://app.maestrobots.com/trade?token=${tokenContract || 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'}`,
      description: "Telegram trading bot",
      color: "from-purple-400 to-violet-500",
      hoverColor: "hover:shadow-purple-500/20",
      logo: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="url(#maestro-gradient)" />
          <path d="M8 16C8 11.5817 11.5817 8 16 8C20.4183 8 24 11.5817 24 16" stroke="white" strokeWidth="2" fill="none" />
          <circle cx="16" cy="16" r="4" fill="white" />
          <path d="M12 20L20 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <defs>
            <linearGradient id="maestro-gradient" x1="0" y1="0" x2="32" y2="32">
              <stop stopColor="#A855F7" />
              <stop offset="1" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      name: "Bonk Bot",
      url: `https://t.me/bonkbot_bot?start=ref_${tokenContract || 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'}`,
      description: "Popular Solana trading bot",
      color: "from-orange-400 to-amber-500",
      hoverColor: "hover:shadow-orange-500/20",
      logo: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="url(#bonk-gradient)" />
          <circle cx="12" cy="12" r="2" fill="white" />
          <circle cx="20" cy="12" r="2" fill="white" />
          <path d="M10 20C10 18 12.5 16 16 16C19.5 16 22 18 22 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 8L12 12M24 8L20 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <defs>
            <linearGradient id="bonk-gradient" x1="0" y1="0" x2="32" y2="32">
              <stop stopColor="#FB923C" />
              <stop offset="1" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      name: "Banana Gun",
      url: `https://t.me/BananaGun_bot?start=${tokenContract || 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'}`,
      description: "Ethereum sniper bot",
      color: "from-yellow-400 to-yellow-500",
      hoverColor: "hover:shadow-yellow-500/20",
      logo: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="url(#banana-gradient)" />
          <path d="M12 8C12 8 8 12 8 16C8 20 12 24 16 24C20 24 24 20 24 16C24 12 20 8 16 8" fill="white" />
          <circle cx="18" cy="14" r="2" fill="#EAB308" />
          <path d="M12 18L20 18" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" />
          <defs>
            <linearGradient id="banana-gradient" x1="0" y1="0" x2="32" y2="32">
              <stop stopColor="#FACC15" />
              <stop offset="1" stopColor="#EAB308" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      name: "GMGN",
      url: `https://gmgn.ai/sol/token/${tokenContract || 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'}`,
      description: "Token analytics & trading",
      color: "from-pink-400 to-rose-500",
      hoverColor: "hover:shadow-pink-500/20",
      logo: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="url(#gmgn-gradient)" />
          <rect x="8" y="12" width="16" height="8" rx="4" fill="white" />
          <circle cx="12" cy="16" r="1.5" fill="#EC4899" />
          <circle cx="20" cy="16" r="1.5" fill="#EC4899" />
          <path d="M14 18L18 18" stroke="#EC4899" strokeWidth="1.5" strokeLinecap="round" />
          <defs>
            <linearGradient id="gmgn-gradient" x1="0" y1="0" x2="32" y2="32">
              <stop stopColor="#F472B6" />
              <stop offset="1" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      name: "Axiom",
      url: `https://axiom.trade/swap?from=SOL&to=${tokenContract || 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'}`,
      description: "Fast Solana trading platform",
      color: "from-slate-400 to-gray-600",
      hoverColor: "hover:shadow-slate-500/20",
      logo: <AxiomLogo size={32} />
    },
    {
      name: "DexScreener",
      url: `https://dexscreener.com/solana/${tokenContract || 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'}`,
      description: "DEX analytics & charts",
      color: "from-indigo-400 to-purple-500",
      hoverColor: "hover:shadow-indigo-500/20",
      logo: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="url(#dex-gradient)" />
          <rect x="6" y="10" width="20" height="12" rx="2" fill="white" />
          <path d="M10 14L14 18L18 16L22 20" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="14" cy="18" r="1" fill="#6366F1" />
          <circle cx="18" cy="16" r="1" fill="#6366F1" />
          <circle cx="22" cy="20" r="1" fill="#6366F1" />
          <defs>
            <linearGradient id="dex-gradient" x1="0" y1="0" x2="32" y2="32">
              <stop stopColor="#6366F1" />
              <stop offset="1" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      )
    }
  ]

  const handlePlatformClick = (platform: Platform) => {
    window.open(platform.url, '_blank', 'noopener,noreferrer')
    onClose()
  }

  if (!isOpen) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-zinc-950 border border-zinc-800 max-w-3xl p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-xl font-bold text-white mb-2">
            Select Trading Platform
          </DialogTitle>
          <p className="text-zinc-400 text-sm">
            Choose your preferred platform to trade {tokenSymbol}
          </p>
        </DialogHeader>
        
        <div className="p-6 pt-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {platforms.map((platform, index) => (
              <Button
                key={index}
                variant="outline"
                className={`
                  h-auto p-4 flex flex-col items-center gap-3 
                  bg-zinc-900/50 border-zinc-700 hover:border-zinc-600 
                  transition-all duration-300 group relative overflow-hidden
                  ${platform.hoverColor}
                `}
                onClick={() => handlePlatformClick(platform)}
              >
                {/* Background gradient on hover */}
                <div className={`
                  absolute inset-0 opacity-0 group-hover:opacity-10 
                  transition-opacity duration-300 bg-gradient-to-br ${platform.color}
                `} />
                
                {/* Logo */}
                <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {platform.logo}
                </div>
                
                {/* Platform name */}
                <div className="relative z-10 text-center">
                  <div className="font-semibold text-white text-sm mb-1">
                    {platform.name}
                  </div>
                  <div className="text-zinc-400 text-xs leading-tight">
                    {platform.description}
                  </div>
                </div>
                
                {/* External link icon */}
                <ExternalLink className="w-3 h-3 text-zinc-500 absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
            <p className="text-xs text-zinc-400 text-center">
              ⚠️ Always verify contract addresses and do your own research before trading. 
              These platforms are external services not affiliated with WHSPR.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 