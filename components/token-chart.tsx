"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, TrendingUp, TrendingDown, Minus } from "lucide-react"

interface TokenChartProps {
  tokenSymbol: string
  tokenContract?: string
  priceChange?: string
  className?: string
}

export function TokenChart({ tokenSymbol, tokenContract, priceChange = "+0.00%", className = "" }: TokenChartProps) {
  const [chartData, setChartData] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Generate mock chart data for demonstration
    const generateMockData = () => {
      const data = []
      let value = 100
      
      for (let i = 0; i < 50; i++) {
        // Add some randomness to create a realistic chart
        const change = (Math.random() - 0.5) * 20
        value = Math.max(50, value + change)
        data.push(value)
      }
      
      setChartData(data)
      setIsLoading(false)
    }

    generateMockData()
  }, [tokenSymbol])

  const getPriceChangeColor = (change: string) => {
    if (change.startsWith('+')) return 'text-emerald-400'
    if (change.startsWith('-')) return 'text-red-400'
    return 'text-gray-400'
  }

  const getPriceChangeIcon = (change: string) => {
    if (change.startsWith('+')) return <TrendingUp className="h-4 w-4" />
    if (change.startsWith('-')) return <TrendingDown className="h-4 w-4" />
    return <Minus className="h-4 w-4" />
  }

  const handleOpenDexScreener = () => {
    const cleanSymbol = tokenSymbol.replace('$', '')
    const url = `https://dexscreener.com/solana?q=${encodeURIComponent(cleanSymbol)}`
    window.open(url, '_blank')
  }

  const renderChart = () => {
    if (chartData.length === 0) return null

    const maxValue = Math.max(...chartData)
    const minValue = Math.min(...chartData)
    const range = maxValue - minValue

    return (
      <svg
        width="100%"
        height="200"
        viewBox={`0 0 400 200`}
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0.8)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0.1)" />
          </linearGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 1)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0.6)" />
          </linearGradient>
        </defs>

        {/* Background grid */}
        <g className="text-gray-600">
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={`grid-${i}`}
              x1="0"
              y1={40 + i * 40}
              x2="400"
              y2={40 + i * 40}
              stroke="rgba(6, 182, 212, 0.1)"
              strokeWidth="1"
            />
          ))}
        </g>

        {/* Chart area fill */}
        <path
          d={chartData.map((value, index) => {
            const x = (index / (chartData.length - 1)) * 400
            const y = 200 - ((value - minValue) / range) * 160 - 20
            return `${index === 0 ? 'M' : 'L'} ${x} ${y}`
          }).join(' ') + ' L 400 200 L 0 200 Z'}
          fill="url(#chartGradient)"
          opacity="0.3"
        />

        {/* Chart line */}
        <path
          d={chartData.map((value, index) => {
            const x = (index / (chartData.length - 1)) * 400
            const y = 200 - ((value - minValue) / range) * 160 - 20
            return `${index === 0 ? 'M' : 'L'} ${x} ${y}`
          }).join(' ')}
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Data points */}
        {chartData.map((value, index) => {
          const x = (index / (chartData.length - 1)) * 400
          const y = 200 - ((value - minValue) / range) * 160 - 20
          
          // Only show some points to avoid clutter
          if (index % 8 === 0) {
            return (
              <circle
                key={`point-${index}`}
                cx={x}
                cy={y}
                r="3"
                fill="rgba(6, 182, 212, 1)"
                className="drop-shadow-lg"
              />
            )
          }
          return null
        })}
      </svg>
    )
  }

  return (
    <Card className={`bg-black/80 border border-cyan-500/20 ${className}`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-cyan-400 text-sm font-semibold flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>Price Chart</span>
            <Badge 
              variant="outline" 
              className={`text-xs ${getPriceChangeColor(priceChange)} border-cyan-500/30 bg-cyan-500/10`}
            >
              {getPriceChangeIcon(priceChange)}
              <span className="ml-1">{priceChange}</span>
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 px-2 text-xs bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-400"
            onClick={handleOpenDexScreener}
          >
            <ExternalLink className="h-3 w-3 mr-1" />
            DexScreener
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative w-full h-64 bg-black/40 border-t border-cyan-500/10">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400 mx-auto mb-2"></div>
                <p className="text-cyan-300 text-sm">Loading chart...</p>
              </div>
            </div>
          ) : (
            <div className="w-full h-full p-4">
              {renderChart()}
            </div>
          )}
        </div>
        
        {/* Chart Info */}
        <div className="p-3 bg-black/20 border-t border-cyan-500/10">
          <div className="flex items-center justify-between text-xs text-cyan-300">
            <span>Interactive chart available on DexScreener</span>
            <span className="text-cyan-400">Click to view full data</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 