"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, ExternalLink, RefreshCw } from "lucide-react"

interface DexScreenerChartProps {
  tokenSymbol: string
  tokenContract?: string
  className?: string
}

export function DexScreenerChart({ tokenSymbol, tokenContract, className = "" }: DexScreenerChartProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [chartUrl, setChartUrl] = useState<string>("")

  useEffect(() => {
    const generateChartUrl = () => {
      // Remove $ symbol if present
      const cleanSymbol = tokenSymbol.replace('$', '')
      
      // Try to find the token on DexScreener
      // For Solana tokens, we'll use the symbol to search
      const searchUrl = `https://dexscreener.com/solana?q=${encodeURIComponent(cleanSymbol)}`
      
      // For now, we'll use an iframe approach to embed the chart
      // Note: DexScreener doesn't provide direct chart embedding, so we'll show their page
      setChartUrl(searchUrl)
      setIsLoading(false)
    }

    generateChartUrl()
  }, [tokenSymbol, tokenContract])

  const handleRefresh = () => {
    setIsLoading(true)
    setError(null)
    const cleanSymbol = tokenSymbol.replace('$', '')
    const searchUrl = `https://dexscreener.com/solana?q=${encodeURIComponent(cleanSymbol)}`
    setChartUrl(searchUrl)
    setIsLoading(false)
  }

  const handleOpenExternal = () => {
    window.open(chartUrl, '_blank')
  }

  if (error) {
    return (
      <Card className={`bg-black/80 border border-red-500/20 ${className}`}>
        <CardHeader className="pb-3">
          <CardTitle className="text-red-400 text-sm font-semibold flex items-center gap-2">
            <span>Chart Error</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="text-center text-red-300 text-sm">
            <p>Unable to load chart for {tokenSymbol}</p>
            <Button 
              variant="outline" 
              size="sm" 
              className="mt-2 bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-500/20"
              onClick={handleRefresh}
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Retry
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={`bg-black/80 border border-blue-500/20 ${className}`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-blue-400 text-sm font-semibold flex items-center justify-between">
          <span>Price Chart - {tokenSymbol}</span>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30"
              onClick={handleRefresh}
              disabled={isLoading}
            >
              <RefreshCw className={`h-3 w-3 ${isLoading ? 'animate-spin' : ''}`} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30"
              onClick={handleOpenExternal}
            >
              <ExternalLink className="h-3 w-3" />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative w-full h-64 bg-black/40 border-t border-blue-500/10">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
            </div>
          ) : (
            <div className="w-full h-full">
              {/* DexScreener Chart Embed */}
              <div className="w-full h-full bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/10 rounded-b-lg overflow-hidden">
                <iframe
                  src={chartUrl}
                  className="w-full h-full border-0"
                  title={`${tokenSymbol} Chart`}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-forms"
                />
              </div>
              
              {/* Fallback if iframe doesn't load */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                <div className="text-center text-blue-300 text-sm">
                  <p className="mb-2">Chart loading...</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-blue-500/10 border-blue-500/30 text-blue-400 hover:bg-blue-500/20"
                    onClick={handleOpenExternal}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View on DexScreener
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Chart Info */}
        <div className="p-3 bg-black/20 border-t border-blue-500/10">
          <div className="flex items-center justify-between text-xs text-blue-300">
            <span>Data provided by DexScreener</span>
            <span className="text-blue-400">Real-time</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 