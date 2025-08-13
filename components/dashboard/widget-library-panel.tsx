"use client"

import { X, Plus, Grid3X3, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AVAILABLE_WIDGETS, WIDGET_CATEGORIES, WidgetConfig } from "./widget-library"

interface WidgetLibraryPanelProps {
  isOpen: boolean
  onClose: () => void
  onAddWidget: (widgetId: string) => void
  activeWidgets: string[]
  hiddenWidgets?: string[]
  onShowWidget?: (widgetId: string) => void
}

export function WidgetLibraryPanel({ isOpen, onClose, onAddWidget, activeWidgets, hiddenWidgets = [], onShowWidget }: WidgetLibraryPanelProps) {
  if (!isOpen) return null

  const categorizedWidgets = AVAILABLE_WIDGETS.reduce((acc, widget) => {
    if (!acc[widget.category]) {
      acc[widget.category] = []
    }
    acc[widget.category].push(widget)
    return acc
  }, {} as Record<string, WidgetConfig[]>)

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      
      {/* Panel */}
      <div className="fixed right-0 top-0 h-full w-96 bg-black/95 border-l border-slate-500/30 backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-500/20">
            <div className="flex items-center gap-2">
              <Grid3X3 className="h-5 w-5 text-slate-400" />
              <span className="font-bold text-lg text-white">Widget Library</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-slate-500/10"
              onClick={onClose}
            >
              <X className="h-4 w-4 text-slate-400" />
            </Button>
          </div>
          
          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Hidden Widgets Section */}
            {hiddenWidgets.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold mb-3 text-slate-300 flex items-center gap-2">
                  <Eye className="h-4 w-4 opacity-60" />
                  Hidden Widgets
                </h3>
                <div className="space-y-3">
                  {hiddenWidgets.map(widgetId => {
                    const widget = AVAILABLE_WIDGETS.find(w => w.id === widgetId)
                    if (!widget) return null
                    
                    const IconComponent = widget.icon
                    
                    return (
                      <Card
                        key={widget.id}
                        className={`bg-black/50 border transition-all duration-200 cursor-pointer hover:scale-[1.02] ${widget.borderColor.replace('/20', '/50')} hover:${widget.shadowColor.replace('/10', '/30')} hover:shadow-lg ring-1 ring-white/10 hover:ring-white/20`}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <IconComponent className={`h-4 w-4 ${widget.color}`} />
                              <span className="font-semibold text-sm text-white">{widget.title}</span>
                            </div>
                            <Badge variant="outline" className={`text-xs ${widget.borderColor.replace('/20', '/50')} text-white bg-white/10 font-medium`}>
                              Hidden
                            </Badge>
                          </div>
                          
                          <p className="text-xs text-gray-300 mb-3 leading-relaxed">
                            {widget.description}
                          </p>
                          
                          <Button
                            size="sm"
                            variant="outline"
                            className={`w-full ${widget.borderColor.replace('/20', '/50')} ${widget.color} hover:text-white hover:bg-white/10 font-medium transition-all border-2`}
                            onClick={() => onShowWidget?.(widget.id)}
                          >
                            <Eye className="h-3 w-3 mr-2" />
                            Show Widget
                          </Button>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Available Widgets Section - Flat List */}
            <div>
              <div className="space-y-3">
                {AVAILABLE_WIDGETS.map(widget => {
                  const isActive = activeWidgets.includes(widget.id)
                  const isHidden = hiddenWidgets.includes(widget.id)
                  const IconComponent = widget.icon
                  
                  // Don't show widgets that are hidden in the main library
                  if (isHidden) return null
                  
                  return (
                    <Card
                      key={widget.id}
                      className={`bg-black/60 border transition-all duration-200 cursor-pointer hover:scale-[1.02] ${
                        isActive 
                          ? 'border-gray-500/40 opacity-50' 
                          : `${widget.borderColor} hover:${widget.shadowColor} hover:shadow-lg`
                      }`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <IconComponent className={`h-4 w-4 ${widget.color}`} />
                            <span className="font-semibold text-white text-sm">{widget.title}</span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {widget.defaultSize.w}x{widget.defaultSize.h}
                          </Badge>
                        </div>
                        
                        <p className="text-xs text-gray-400 mb-3 leading-relaxed">
                          {widget.description}
                        </p>
                        
                        <Button
                          size="sm"
                          variant="outline"
                          className={
                            isActive
                              ? "w-full opacity-50 cursor-not-allowed border-gray-500/40 text-gray-500"
                              : `w-full ${widget.borderColor.replace('border-', 'border-')} ${widget.color} hover:bg-opacity-10`
                          }
                          onClick={() => !isActive && onAddWidget(widget.id)}
                          disabled={isActive}
                        >
                          {isActive ? (
                            <>
                              <Grid3X3 className="h-3 w-3 mr-2" />
                              Already Added
                            </>
                          ) : (
                            <>
                              <Plus className="h-3 w-3 mr-2" />
                              Add Widget
                            </>
                          )}
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="p-4 border-t border-slate-500/20">
            <div className="text-center text-gray-400 text-xs">
              <p>Drag widgets to reposition • Resize from bottom-right corner</p>
              <p className="mt-1">Save your layout to persist changes</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 