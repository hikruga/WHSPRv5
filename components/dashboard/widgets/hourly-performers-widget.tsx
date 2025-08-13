"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

interface HourlyPerformersWidgetProps {
  onCoinClick: (symbol: string) => void
  gridLayout?: { w: number; h: number }
}

const tokensData = [
  {
    symbol: "$HOUR",
    name: "HourCoin",
    price: "$0.0234",
    change: "+89.7%",
    mcap: "$5.6M",
    volume: "$3.2M",
    holders: "1.2K",
    image: "/images/ninja-cat.png",
    contract: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
  },
  {
    symbol: "$MINUTE",
    name: "MinuteToken",
    price: "$0.0456",
    change: "+124.3%",
    mcap: "$8.9M",
    volume: "$5.7M",
    holders: "2.8K",
    image: "/images/dogs-yard.png",
    contract: "5MAYDfq5yxtudAhtfyuMBuHZjgAbaS9tbEyEQYAhDS5y"
  },
  {
    symbol: "$SECOND",
    name: "SecondCoin",
    price: "$0.0178",
    change: "+67.8%",
    mcap: "$3.2M",
    volume: "$1.8M",
    holders: "890",
    image: "/images/adhd-logo.png",
    contract: "FYfqxqMjP66pq8nJHcvMtEqEF8pkYeB4W4UyGEzCwBf5"
  },
  {
    symbol: "$CLOCK",
    name: "ClockToken",
    price: "$0.0345",
    change: "+156.2%",
    mcap: "$12.4M",
    volume: "$8.9M",
    holders: "4.5K",
    image: "/images/robot-face.png",
    contract: "A8C3xuqscfmyLrte3VmTqrAq8kgMASius9AFNANwpump"
  },
  {
    symbol: "$TIME",
    name: "TimeCoin",
    price: "$0.0567",
    change: "+98.1%",
    mcap: "$18.7M",
    volume: "$11.2M",
    holders: "6.7K",
    image: "/images/brown-bear.png",
    contract: "DCUrdakyDFCx1ago2X8UH5qhG8gf8EAxr1iNNm1bDf2K"
  },
  {
    symbol: "$TICK",
    name: "TickToken",
    price: "$0.0289",
    change: "+203.4%",
    mcap: "$7.8M",
    volume: "$6.1M",
    holders: "3.2K",
    image: "/images/hello-kitty.png",
    contract: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"
  },
  {
    symbol: "$PULSE",
    name: "PulseCoin",
    price: "$0.0398",
    change: "+178.9%",
    mcap: "$11.2M",
    volume: "$7.8M",
    holders: "5.1K",
    image: "/images/blue-bunny.png",
    contract: "3YcGVhLRJ4QxRFwgm9J8c8Zd8A6x8QqfJ4qJ8c8Zd8A6"
  },
  {
    symbol: "$BEAT",
    name: "BeatToken",
    price: "$0.0512",
    change: "+134.6%",
    mcap: "$15.8M",
    volume: "$9.4M",
    holders: "7.8K",
    image: "/images/glasses-guy.png",
    contract: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"
  },
  {
    symbol: "$RHYTHM",
    name: "RhythmCoin",
    price: "$0.0267",
    change: "+189.3%",
    mcap: "$6.4M",
    volume: "$4.8M",
    holders: "2.3K",
    image: "/images/space-pig.png",
    contract: "9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM"
  },
  {
    symbol: "$TEMPO",
    name: "TempoToken",
    price: "$0.0423",
    change: "+145.7%",
    mcap: "$13.5M",
    volume: "$8.1M",
    holders: "8.9K",
    image: "/images/ninja-cat.png",
    contract: "7YvJ8c8Zd8A6x8QqfJ4qJ8c8Zd8A6x8QqfJ4qJ8c8Zd"
  }
]

export function HourlyPerformersWidget({ onCoinClick, gridLayout }: HourlyPerformersWidgetProps) {
  const [visibleTokens, setVisibleTokens] = useState(4)
  const [columns, setColumns] = useState(2)
  const [selectedTokenForTrading, setSelectedTokenForTrading] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const updateTimeoutRef = useRef<NodeJS.Timeout>()

  const updateLayout = useCallback(() => {
    if (!containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const containerWidth = rect.width
    
    // Skip if container has no dimensions yet
    if (containerWidth === 0) {
      return
    }
    
    // Account for container padding (p-1 = 4px on each side = 8px total)
    const containerPadding = 8
    const availableWidth = containerWidth - containerPadding
    
    // Calculate columns based on container width with better responsive breakpoints
    let minColumnWidth = 280 // Reduced minimum width for better fit
    let calculatedColumns = 1
    
    if (availableWidth >= 640) { // sm breakpoint
      minColumnWidth = 240
      calculatedColumns = Math.max(1, Math.floor(availableWidth / minColumnWidth))
    } else if (availableWidth >= 480) { // xs breakpoint
      minColumnWidth = 200
      calculatedColumns = Math.max(1, Math.floor(availableWidth / minColumnWidth))
    } else {
      // Very small screens - single column
      calculatedColumns = 1
    }
    
    // Calculate rows based on grid layout height
    const itemHeight = 56 // Reduced height for better fit
    const gapSize = 4
    const containerPaddingVertical = 8
    
    let availableGridHeight = 240
    if (gridLayout?.h) {
      availableGridHeight = gridLayout.h * 60
    }
    
    const availableHeight = availableGridHeight - containerPaddingVertical
    
    // Calculate how many rows can fit
    let calculatedRows = 1
    if (availableHeight >= itemHeight) {
      calculatedRows = Math.floor((availableHeight + gapSize) / (itemHeight + gapSize))
      calculatedRows = Math.max(1, calculatedRows)
    }
    
    // Calculate total visible tokens
    const maxTokens = calculatedColumns * calculatedRows
    const totalVisible = Math.max(4, Math.min(maxTokens, tokensData.length))
    
    // Only update if values actually changed
    setColumns(prev => prev !== calculatedColumns ? calculatedColumns : prev)
    setVisibleTokens(prev => prev !== totalVisible ? totalVisible : prev)
  }, [gridLayout])

  // Debounced update function
  const debouncedUpdate = useCallback(() => {
    if (updateTimeoutRef.current) {
      clearTimeout(updateTimeoutRef.current)
    }
    updateTimeoutRef.current = setTimeout(updateLayout, 50)
  }, [updateLayout])

  useEffect(() => {
    // Initial layout calculation
    const initialUpdate = () => {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        requestAnimationFrame(updateLayout)
      })
    }
    
    initialUpdate()
    
    let resizeObserver: ResizeObserver | null = null
    let mutationObserver: MutationObserver | null = null
    
    if (containerRef.current) {
      // Set up ResizeObserver for size changes
      resizeObserver = new ResizeObserver((entries) => {
        if (entries.length > 0) {
          debouncedUpdate()
        }
      })
      resizeObserver.observe(containerRef.current)
      
      // Set up MutationObserver for style changes (react-grid-layout uses transforms)
      mutationObserver = new MutationObserver((mutations) => {
        const hasStyleChange = mutations.some(mutation => 
          mutation.type === 'attributes' && 
          mutation.attributeName === 'style'
        )
        if (hasStyleChange) {
          debouncedUpdate()
        }
      })
      
      // Observe the parent grid item for style changes
      const gridItem = containerRef.current.closest('.react-grid-item')
      if (gridItem) {
        mutationObserver.observe(gridItem, {
          attributes: true,
          attributeFilter: ['style']
        })
      }
    }
    
    // Also listen for window resize as backup
    const handleResize = () => debouncedUpdate()
    window.addEventListener('resize', handleResize)
    
    // Cleanup
    return () => {
      if (updateTimeoutRef.current) {
        clearTimeout(updateTimeoutRef.current)
      }
      if (resizeObserver) {
        resizeObserver.disconnect()
      }
      if (mutationObserver) {
        mutationObserver.disconnect()
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [debouncedUpdate, updateLayout])

  // Close SVG list when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectedTokenForTrading && containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setSelectedTokenForTrading(null)
      }
    }

    document.addEventListener('click', handleClickOutside)
    
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [selectedTokenForTrading])

  const handleTradeClick = (tokenSymbol: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedTokenForTrading(prev => prev === tokenSymbol ? null : tokenSymbol)
  }

  const handlePlatformClick = (platformUrl: string, token: any, e: React.MouseEvent) => {
    e.stopPropagation()
    const url = `${platformUrl}?token=${token.contract}`
    window.open(url, '_blank')
  }

  const handleCopySymbol = (symbol: string, e: React.MouseEvent) => {
    e.stopPropagation()
    navigator.clipboard.writeText(symbol)
    // You could add a toast notification here if you want
  }

  return (
    <div 
      ref={containerRef} 
      className="h-full p-1 overflow-hidden"
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '100%',
        boxSizing: 'border-box'
      }}
    >
      <div 
        className="flex-1 overflow-auto"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: '4px',
          alignContent: 'start',
          minHeight: 0
        }}
      >
        {tokensData.slice(0, visibleTokens).map((token) => (
          <div
            key={token.symbol}
            className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-rose-500/10 to-transparent border border-rose-500/20 cursor-pointer hover:bg-rose-500/20 transition-all duration-200"
            onClick={() => onCoinClick(token.symbol)}
          >
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-rose-400 shadow-lg shadow-rose-500/30 flex-shrink-0">
                <img
                  src={token.image}
                  alt={token.symbol}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = '/images/placeholder-token.png'
                  }}
                />
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center gap-1">
                  <span className="text-xs text-white font-semibold truncate">{token.symbol}</span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={(e) => handleCopySymbol(token.symbol, e)}
                        className="p-1 hover:bg-white/10 rounded transition-colors flex-shrink-0"
                      >
                        <img src="/copy-svgrepo-com.svg" alt="Copy" width={12} height={12} className="opacity-80 hover:opacity-100 filter invert brightness-0" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p className="text-xs">Copy symbol</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <span className="text-xs text-gray-400 truncate">{token.name}</span>
              </div>
            </div>
            
            {selectedTokenForTrading === token.symbol ? (
              <div className="flex flex-col items-end gap-2 flex-shrink-0">
                {/* SVG Buttons Container */}
                <div className="flex items-center gap-2 bg-black/40 rounded-lg p-2 border border-rose-500/20">
                  {/* Axiom */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={(e) => handlePlatformClick('https://axiom.trade', token, e)}
                        className="p-2 bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/30 rounded-lg transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24.1384 17.3876H11.8623L18.0001 7.00012L24.1384 17.3876Z" fill="#F43F5E"/>
                          <path d="M31 29.0003L5 29.0003L9.96764 20.5933L26.0324 20.5933L31 29.0003Z" fill="#F43F5E"/>
                        </svg>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p className="text-xs">Axiom</p>
                    </TooltipContent>
                  </Tooltip>

                  {/* Bull X */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={(e) => handlePlatformClick('https://bullx.io', token, e)}
                        className="p-2 bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/30 rounded-lg transition-colors"
                      >
                        <img src="/Bullx-logo.svg" alt="Bull X" width={16} height={16} />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p className="text-xs">Bull X</p>
                    </TooltipContent>
                  </Tooltip>

                  {/* Photon */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={(e) => handlePlatformClick('https://photon.trade', token, e)}
                        className="p-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors"
                      >
                        <img src="/photon logo.svg" alt="Photon" width={16} height={16} />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p className="text-xs">Photon</p>
                    </TooltipContent>
                  </Tooltip>

                  {/* GMGN */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={(e) => handlePlatformClick('https://gmgn.ai', token, e)}
                        className="p-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-lg transition-colors"
                      >
                        <img src="/gmgn-logo.svg" alt="GMGN" width={16} height={16} />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p className="text-xs">GMGN</p>
                    </TooltipContent>
                  </Tooltip>

                  {/* Nova */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={(e) => handlePlatformClick('https://nova.app', token, e)}
                        className="p-2 bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/30 rounded-lg transition-colors"
                      >
                        <img src="/nova-logo.svg" alt="Nova" width={16} height={16} />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p className="text-xs">Nova</p>
                    </TooltipContent>
                  </Tooltip>

                  {/* DexScreener */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={(e) => handlePlatformClick('https://dexscreener.com', token, e)}
                        className="p-2 bg-yellow-500/20 hover:bg-yellow-500/30 border border-yellow-500/30 rounded-lg transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 252 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M151.818 106.866c9.177-4.576 20.854-11.312 32.545-20.541 2.465 5.119 2.735 9.586 1.465 13.193-.9 2.542-2.596 4.753-4.826 6.512-2.415 1.901-5.431 3.285-8.765 4.033-6.326 1.425-13.712.593-20.419-3.197m1.591 46.886l12.148 7.017c-24.804 13.902-31.547 39.716-39.557 64.859-8.009-25.143-14.753-50.957-39.556-64.859l12.148-7.017a5.95 5.95 0 003.84-5.845c-1.113-23.547 5.245-33.96 13.821-40.498 3.076-2.342 6.434-3.518 9.747-3.518s6.671 1.176 9.748 3.518c8.576 6.538 14.934 16.951 13.821 40.498a5.95 5.95 0 003.84 5.845zM126 0c14.042.377 28.119 3.103 40.336 8.406 8.46 3.677 16.354 8.534 23.502 14.342 3.228 2.622 5.886 5.155 8.814 8.071 7.897.273 19.438-8.5 24.796-16.709-9.221 30.23-51.299 65.929-80.43 79.589-.012-.005-.02-.012-.029-.018-5.228-3.992-11.108-5.988-16.989-5.988s-11.76 1.996-16.988 5.988c-.009.005-.017.014-.029.018-29.132-13.66-71.209-49.359-80.43-79.589 5.357 8.209 16.898 16.982 24.795 16.709 2.929-2.915 5.587-5.449 8.814-8.071C69.31 16.94 77.204 12.083 85.664 8.406 97.882 3.103 111.959.377 126 0m-25.818 106.866c-9.176-4.576-20.854-11.312-32.544-20.541-2.465 5.119-2.735 9.586-1.466 13.193.901 2.542 2.597 4.753 4.826 6.512 2.416 1.901 5.432 3.285 8.766 4.033 6.326 1.425 13.711.593 20.418-3.197" fill="#F59E0B"/>
                          <path d="M197.167 75.016c6.436-6.495 12.107-13.684 16.667-20.099l2.316 4.359c7.456 14.917 11.33 29.774 11.33 46.494l-.016 26.532.14 13.754c.54 33.766 7.846 67.929 24.396 99.193l-34.627-27.922-24.501 39.759-25.74-24.231L126 299.604l-41.132-66.748-25.739 24.231-24.501-39.759L0 245.25c16.55-31.264 23.856-65.427 24.397-99.193l.14-13.754-.016-26.532c0-16.721 3.873-31.578 11.331-46.494l2.315-4.359c4.56 6.415 10.23 13.603 16.667 20.099l-2.01 4.175c-3.905 8.109-5.198 17.176-2.156 25.799 1.961 5.554 5.54 10.317 10.154 13.953 4.48 3.531 9.782 5.911 15.333 7.161 3.616.814 7.3 1.149 10.96 1.035-.854 4.841-1.227 9.862-1.251 14.978L53.2 160.984l25.206 14.129a41.926 41.926 0 715.734 3.869c20.781 18.658 33.275 73.855 41.861 100.816 8.587-26.961 21.08-82.158 41.862-100.816a41.865 41.865 0 715.734-3.869l25.206-14.129-32.665-18.866c-.024-5.116-.397-10.137-1.251-14.978 3.66.114 7.344-.221 10.96-1.035 5.551-1.25 10.854-3.63 15.333-7.161 4.613-3.636 8.193-8.399 10.153-13.953 3.043-8.623 1.749-17.689-2.155-25.799l-2.01-4.175z" fill="#F59E0B"/>
                        </svg>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p className="text-xs">DexScreener</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                
                {/* Trade Button */}
                <Button
                  size="sm"
                  variant="outline"
                  className="h-6 px-2 text-xs bg-rose-500/10 border-rose-500/30 text-rose-400 hover:bg-rose-500/20 cursor-pointer"
                  onClick={(e) => handleTradeClick(token.symbol, e)}
                  onMouseDown={(e) => handleTradeClick(token.symbol, e)}
                >
                  Trade
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2 flex-shrink-0">
                <div className="text-right">
                  <div className="text-xs text-rose-300">Volume</div>
                  <div className="text-xs text-rose-400 font-semibold">{token.volume}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-rose-300">MC</div>
                  <div className="text-xs text-rose-400 font-semibold">{token.mcap}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-rose-300">{token.change}</div>
                  <div className="text-xs text-rose-400 font-semibold">{token.price}</div>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-6 px-2 text-xs bg-rose-500/10 border-rose-500/30 text-rose-400 hover:bg-rose-500/20 cursor-pointer"
                  onClick={(e) => handleTradeClick(token.symbol, e)}
                  onMouseDown={(e) => handleTradeClick(token.symbol, e)}
                >
                  Trade
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

<style jsx>{`
  @keyframes pulse-subtle {
    0%, 100% {
      box-shadow: 0 0 5px rgba(244, 63, 94, 0.2);
    }
    50% {
      box-shadow: 0 0 20px rgba(244, 63, 94, 0.4);
    }
  }
  
  .animate-pulse-subtle {
    animation: pulse-subtle 3s ease-in-out infinite;
  }
`}</style>