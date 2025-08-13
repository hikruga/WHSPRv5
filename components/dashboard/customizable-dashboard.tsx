"use client"

import { useState, useCallback, useEffect } from "react"
import { Responsive, WidthProvider, Layout } from "react-grid-layout"
import { Settings, Plus, RotateCcw, Save, Grid3X3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AVAILABLE_WIDGETS, WidgetConfig } from "./widget-library"
import { WidgetLibraryPanel } from "./widget-library-panel"
import { DashboardWidget } from "./dashboard-widget"

import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"
import "@/app/dashboard-grid.css"

const ResponsiveGridLayout = WidthProvider(Responsive)

export interface DashboardLayout {
  i: string
  x: number
  y: number
  w: number
  h: number
  minW?: number
  minH?: number
}

export interface CustomizableDashboardProps {
  onCoinClick: (symbol: string) => void
}

export function CustomizableDashboard({ onCoinClick }: CustomizableDashboardProps) {
  const [isCustomMode, setIsCustomMode] = useState(false)
  const [showWidgetPanel, setShowWidgetPanel] = useState(false)
  const [layouts, setLayouts] = useState<{ [key: string]: Layout[] }>({})
  const [activeWidgets, setActiveWidgets] = useState<string[]>([])
  const [hiddenWidgets, setHiddenWidgets] = useState<string[]>([])


  // Default layout for initial widgets
  const getDefaultLayout = useCallback((): Layout[] => {
    return [
      { i: 'volume-spike', x: 0, y: 0, w: 3, h: 4, minW: 2, minH: 3 },
      { i: 'strong-survivors', x: 3, y: 0, w: 3, h: 4, minW: 2, minH: 3 },
      { i: 'momentum-gainers', x: 6, y: 0, w: 3, h: 4, minW: 2, minH: 3 },
      { i: 'holder-gainer', x: 9, y: 0, w: 3, h: 4, minW: 2, minH: 3 },
      { i: 'big-dips', x: 0, y: 4, w: 3, h: 4, minW: 2, minH: 3 },
      { i: 'hourly-performers', x: 3, y: 4, w: 3, h: 4, minW: 2, minH: 3 },
      { i: 'top-gainers', x: 6, y: 4, w: 3, h: 4, minW: 2, minH: 3 },
      { i: 'worst-performers', x: 9, y: 4, w: 3, h: 4, minW: 2, minH: 3 }
    ]
  }, [])

  // Load saved layout from localStorage
  useEffect(() => {
    const savedLayout = localStorage.getItem('whspr-dashboard-layout')
    const savedWidgets = localStorage.getItem('whspr-dashboard-widgets')
    const savedHiddenWidgets = localStorage.getItem('whspr-dashboard-hidden-widgets')
    
    if (savedLayout && savedWidgets) {
      setLayouts(JSON.parse(savedLayout))
      setActiveWidgets(JSON.parse(savedWidgets))
      setHiddenWidgets(savedHiddenWidgets ? JSON.parse(savedHiddenWidgets) : [])
    } else {
      // Set default widgets and layout
      const defaultWidgets = AVAILABLE_WIDGETS.map(w => w.id)
      setActiveWidgets(defaultWidgets)
      setHiddenWidgets([])
      setLayouts({
        lg: getDefaultLayout(),
        md: getDefaultLayout(),
        sm: getDefaultLayout(),
        xs: getDefaultLayout(),
        xxs: getDefaultLayout()
      })
    }
  }, [getDefaultLayout])

  const handleLayoutChange = useCallback((layout: Layout[], layouts: { [key: string]: Layout[] }) => {
    setLayouts(layouts)
  }, [])

  const addWidget = useCallback((widgetId: string) => {
    if (activeWidgets.includes(widgetId)) return

    const widget = AVAILABLE_WIDGETS.find(w => w.id === widgetId)
    if (!widget) return

    // Find available position
    const currentLayout = layouts.lg || []
    const maxY = Math.max(...currentLayout.map(item => item.y + item.h), 0)
    
    const newLayoutItem: Layout = {
      i: widgetId,
      x: 0,
      y: maxY,
      w: widget.defaultSize.w,
      h: widget.defaultSize.h,
      minW: widget.minSize.w,
      minH: widget.minSize.h
    }

    const newLayouts = {
      ...layouts,
      lg: [...(layouts.lg || []), newLayoutItem],
      md: [...(layouts.md || []), newLayoutItem],
      sm: [...(layouts.sm || []), newLayoutItem],
      xs: [...(layouts.xs || []), newLayoutItem],
      xxs: [...(layouts.xxs || []), newLayoutItem]
    }

    setLayouts(newLayouts)
    setActiveWidgets([...activeWidgets, widgetId])
    setShowWidgetPanel(false)
  }, [activeWidgets, layouts])

  const hideWidget = useCallback((widgetId: string) => {
    setHiddenWidgets([...hiddenWidgets, widgetId])
  }, [hiddenWidgets])

  const showWidget = useCallback((widgetId: string) => {
    setHiddenWidgets(hiddenWidgets.filter(id => id !== widgetId))
  }, [hiddenWidgets])

  const removeWidget = useCallback((widgetId: string) => {
    const newLayouts = Object.keys(layouts).reduce((acc, breakpoint) => {
      acc[breakpoint] = layouts[breakpoint].filter(item => item.i !== widgetId)
      return acc
    }, {} as { [key: string]: Layout[] })

    setLayouts(newLayouts)
    setActiveWidgets(activeWidgets.filter(id => id !== widgetId))
    setHiddenWidgets(hiddenWidgets.filter(id => id !== widgetId))
  }, [layouts, activeWidgets, hiddenWidgets])

  const resetLayout = useCallback(() => {
    const defaultWidgets = AVAILABLE_WIDGETS.map(w => w.id)
    const defaultLayouts = {
      lg: getDefaultLayout(),
      md: getDefaultLayout(),
      sm: getDefaultLayout(),
      xs: getDefaultLayout(),
      xxs: getDefaultLayout()
    }
    
    setActiveWidgets(defaultWidgets)
    setHiddenWidgets([])
    setLayouts(defaultLayouts)
  }, [getDefaultLayout])

  const saveLayout = useCallback(() => {
    localStorage.setItem('whspr-dashboard-layout', JSON.stringify(layouts))
    localStorage.setItem('whspr-dashboard-widgets', JSON.stringify(activeWidgets))
    localStorage.setItem('whspr-dashboard-hidden-widgets', JSON.stringify(hiddenWidgets))
    // Show success message and exit custom mode
    alert('Dashboard layout saved!')
    setIsCustomMode(false)
  }, [layouts, activeWidgets, hiddenWidgets])



  const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }
  const cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }

  return (
    <div className="relative">
      {/* Control Panel */}
      <div className="flex items-center justify-end mb-6">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCustomMode(!isCustomMode)}
            className={isCustomMode 
              ? "bg-black/60 hover:bg-black/80 text-white border border-white/20 backdrop-blur-sm shadow-lg" 
              : "bg-black/40 hover:bg-black/60 text-slate-300 hover:text-white border border-slate-600/30 hover:border-slate-500/50 backdrop-blur-sm transition-all duration-200"
            }
          >
            <Settings className="h-4 w-4 mr-2" />
            {isCustomMode ? 'Exit Custom Mode' : 'Customize'}
          </Button>
          
          {isCustomMode && (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowWidgetPanel(true)}
                className="bg-black/40 hover:bg-black/60 text-emerald-300 hover:text-emerald-200 border border-emerald-600/30 hover:border-emerald-500/50 backdrop-blur-sm transition-all duration-200"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Widget
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={resetLayout}
                className="bg-black/40 hover:bg-black/60 text-orange-300 hover:text-orange-200 border border-orange-600/30 hover:border-orange-500/50 backdrop-blur-sm transition-all duration-200"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={saveLayout}
                className="bg-black/40 hover:bg-black/60 text-purple-300 hover:text-purple-200 border border-purple-600/30 hover:border-purple-500/50 backdrop-blur-sm transition-all duration-200"
              >
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="widgets-scroll">
        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          onLayoutChange={handleLayoutChange}
          breakpoints={breakpoints}
          cols={cols}
          rowHeight={60}
          isDraggable={isCustomMode}
          isResizable={false}
          margin={[16, 16]}
          containerPadding={[0, 0]}
          useCSSTransforms={true}
          measureBeforeMount={false}
        >
          {activeWidgets.filter(widgetId => !hiddenWidgets.includes(widgetId)).map(widgetId => {
            const widget = AVAILABLE_WIDGETS.find(w => w.id === widgetId)
            if (!widget) return null

            // Find the current layout for this widget
            const currentLayout = layouts.lg?.find(item => item.i === widgetId)
            const gridLayout = currentLayout ? { w: currentLayout.w, h: currentLayout.h } : undefined

            return (
              <div key={widgetId} className="widget-container">
                <DashboardWidget
                  widget={widget}
                  onCoinClick={onCoinClick}
                  onRemove={isCustomMode ? () => hideWidget(widgetId) : undefined}
                  isCustomMode={isCustomMode}
                  gridLayout={gridLayout}
                />
              </div>
            )
          })}
        </ResponsiveGridLayout>
      </div>

      {/* Widget Library Panel */}
      <WidgetLibraryPanel
        isOpen={showWidgetPanel}
        onClose={() => setShowWidgetPanel(false)}
        onAddWidget={addWidget}
        activeWidgets={activeWidgets}
        hiddenWidgets={hiddenWidgets}
        onShowWidget={showWidget}
      />



      {/* Custom Styles */}
      <style jsx global>{`
        .react-grid-layout {
          position: relative;
        }
        
        .react-grid-item {
          transition: all 200ms ease;
          transition-property: left, top;
        }
        
        .react-grid-item:not(.react-grid-placeholder) {
          background: transparent;
          border: none;
        }
        
        .react-grid-item.cssTransforms {
          transition-property: transform;
        }
        
        .react-grid-item > .react-resizable-handle {
          position: absolute;
          width: 20px;
          height: 20px;
          bottom: 0;
          right: 0;
          background: linear-gradient(45deg, transparent 40%, rgba(6, 182, 212, 0.5) 50%, transparent 60%);
          cursor: se-resize;
          border-radius: 4px 0 0 0;
        }
        
        .react-grid-item > .react-resizable-handle::after {
          content: '';
          position: absolute;
          right: 3px;
          bottom: 3px;
          width: 5px;
          height: 5px;
          background: rgba(6, 182, 212, 0.8);
          border-radius: 1px;
        }
        
        .react-grid-placeholder {
          background: rgba(6, 182, 212, 0.2) !important;
          opacity: 0.2;
          transition-duration: 100ms;
          z-index: 2;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          -o-user-select: none;
          user-select: none;
          border-radius: 8px;
          border: 2px dashed rgba(6, 182, 212, 0.5);
        }
        
        .widget-container {
          height: 100%;
          width: 100%;
        }
        
        /* Invisible scroll container for widgets */
        .widgets-scroll {
          max-height: calc(100vh - 280px);
          overflow-y: auto;
          overscroll-behavior: contain;
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .widgets-scroll::-webkit-scrollbar {
          display: none; /* Chrome, Safari */
        }
        
        .react-grid-item.react-grid-placeholder {
          background: rgba(6, 182, 212, 0.1) !important;
          border: 2px dashed rgba(6, 182, 212, 0.4);
          border-radius: 8px;
        }
      `}</style>
    </div>
  )
} 