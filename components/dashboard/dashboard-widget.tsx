"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Eye, Maximize2 } from "lucide-react"
import { WidgetConfig } from "@/components/dashboard/widget-library"
import { TopGainersWidget } from "@/components/dashboard/widgets/top-gainers-widget"
import { HourlyPerformersWidget } from "@/components/dashboard/widgets/hourly-performers-widget"
import { VolumeSpikeWidget } from "@/components/dashboard/widgets/volume-spike-widget"
import { StrongSurvivorsWidget } from "@/components/dashboard/widgets/strong-survivors-widget"
import { MomentumGainersWidget } from "@/components/dashboard/widgets/momentum-gainers-widget"
import { HolderGainerWidget } from "@/components/dashboard/widgets/holder-gainer-widget"
import { BigDipsWidget } from "@/components/dashboard/widgets/big-dips-widget"
import { WorstPerformersWidget } from "@/components/dashboard/widgets/worst-performers-widget"
interface DashboardWidgetProps {
  widget: WidgetConfig
  onCoinClick: (symbol: string) => void
  onRemove?: () => void
  isCustomMode: boolean
  gridLayout?: { w: number; h: number }
}

export function DashboardWidget({ widget, onCoinClick, onRemove, isCustomMode, gridLayout }: DashboardWidgetProps) {
  const IconComponent = widget.icon

  const renderWidgetContent = () => {
    const commonProps = {
      onCoinClick,
      gridLayout
    }

    switch (widget.type) {
      case 'top-gainers':
        return <TopGainersWidget {...commonProps} />
      case 'hourly-performers':
        return <HourlyPerformersWidget {...commonProps} />
      case 'volume-spike':
        return <VolumeSpikeWidget {...commonProps} />
      case 'strong-survivors':
        return <StrongSurvivorsWidget {...commonProps} />
      case 'momentum-gainers':
        return <MomentumGainersWidget {...commonProps} />
      case 'holder-gainer':
        return <HolderGainerWidget {...commonProps} />
      case 'big-dips':
        return <BigDipsWidget {...commonProps} />
      case 'worst-performers':
        return <WorstPerformersWidget {...commonProps} />
      default:
        return null
    }
  }

  return (
    <Card className={`h-full bg-black/80 border transition-all duration-300 backdrop-blur-[0.5rem] group ${widget.borderColor} ${widget.shadowColor} hover:shadow-lg hover:shadow-opacity-20 ${isCustomMode ? 'cursor-move' : ''} ${widget.type === 'top-gainers' || widget.type === 'hourly-performers' ? 'z-[99999]' : ''}`}>
      <CardHeader className="pb-3 relative">
        <CardTitle className={`text-sm font-semibold flex items-center justify-between ${widget.color}`}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-2 cursor-default">
                <IconComponent className="h-4 w-4" />
                <span>{widget.title}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent
              side="top"
              className={`max-w-xs bg-black border ${widget.borderColor.replace('border-', 'border-')} shadow-lg ${widget.shadowColor} ${widget.color}`}
              style={{ zIndex: 999999 }}
            >
              <p className="text-sm text-gray-300">
                {widget.description}
              </p>
            </TooltipContent>
          </Tooltip>
        </CardTitle>
        
        {/* Custom Mode Controls */}
        {isCustomMode && (
          <div className="absolute top-1 right-1 flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity z-10">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-8 w-8 hover:bg-opacity-30 border border-transparent bg-black/50 backdrop-blur-sm ${
                    widget.color.includes('slate') ? 'hover:bg-slate-500/30 hover:border-slate-500/50' :
                    widget.color.includes('emerald') ? 'hover:bg-emerald-500/30 hover:border-emerald-500/50' :
                    widget.color.includes('purple') ? 'hover:bg-purple-500/30 hover:border-purple-500/50' :
                    widget.color.includes('orange') ? 'hover:bg-orange-500/30 hover:border-orange-500/50' :
                    widget.color.includes('amber') ? 'hover:bg-amber-500/30 hover:border-amber-500/50' :
                    widget.color.includes('red') ? 'hover:bg-red-500/30 hover:border-red-500/50' :
                    widget.color.includes('indigo') ? 'hover:bg-indigo-500/30 hover:border-indigo-500/50' :
                    widget.color.includes('rose') ? 'hover:bg-rose-500/30 hover:border-rose-500/50' :
                    widget.color.includes('cyan') ? 'hover:bg-slate-500/30 hover:border-slate-500/50' :
                    widget.color.includes('green') ? 'hover:bg-emerald-500/30 hover:border-emerald-500/50' :
                    widget.color.includes('blue') ? 'hover:bg-indigo-500/30 hover:border-indigo-500/50' :
                    widget.color.includes('yellow') ? 'hover:bg-amber-500/30 hover:border-amber-500/50' :
                    widget.color.includes('pink') ? 'hover:bg-rose-500/30 hover:border-rose-500/50' :
                    'hover:bg-gray-500/30 hover:border-gray-500/50'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    onRemove?.()
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                >
                  <Eye className={`h-4 w-4 ${widget.color}`} />
                </Button>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                className={`max-w-xs bg-black border ${widget.borderColor.replace('border-', 'border-')} shadow-lg ${widget.shadowColor}`}
              >
                <p className={`text-sm ${widget.color.replace('text-', 'text-').replace('-400', '-300')}`}>
                  Hide Widget
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
        )}
      </CardHeader>
      
      <CardContent className="p-0 px-3 pb-3 flex-1 overflow-hidden">
        <div className="h-full">
          {renderWidgetContent()}
        </div>
      </CardContent>
      
      {/* Resize indicator for custom mode */}
      {isCustomMode && (
        <div className="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Maximize2 className="h-3 w-3 text-slate-400/50" />
        </div>
      )}
    </Card>
  )
} 