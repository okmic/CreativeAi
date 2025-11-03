import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Play, Pause, BookOpen, Headphones } from 'lucide-react'
import Slide from '../Slide/Slide'
import Background from '../ui/Background/Background'
import Text from '../Text/Text'

interface SliderProps {
  children: React.ReactNode[]
  timeMarks: number[]
}

type AppState = 'initial' | 'playing' | 'finished'

const Slider: React.FC<SliderProps> = ({ children, timeMarks }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [appState, setAppState] = useState<AppState>('initial')
  const [showText, setShowText] = useState(false)
  
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const animationRef = useRef<number>(0)
  const startTimeRef = useRef<number>(0)
  const currentTimeRef = useRef<number>(0)

  useEffect(() => {
    audioRef.current = new Audio()
    audioRef.current.preload = 'none'
    
    const handleEnded = () => {
      setIsPlaying(false)
      setAppState('finished')
      setCurrentSlide(0)
    }

    audioRef.current.addEventListener('ended', handleEnded)

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleEnded)
        audioRef.current.pause()
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  const updateSlide = useCallback(() => {
    if (!isPlaying) return

    const elapsed = Date.now() - startTimeRef.current
    currentTimeRef.current = elapsed
    
    let newSlide = 0
    for (let i = timeMarks.length - 1; i >= 0; i--) {
      if (elapsed >= timeMarks[i]) {
        newSlide = i + 1
        break
      }
    }

    if (newSlide !== currentSlide) {
      setCurrentSlide(newSlide)
    }

    animationRef.current = requestAnimationFrame(updateSlide)
  }, [isPlaying, currentSlide, timeMarks])

  useEffect(() => {
    if (isPlaying) {
      startTimeRef.current = Date.now() - currentTimeRef.current
      animationRef.current = requestAnimationFrame(updateSlide)
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying, updateSlide])

  const togglePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false)
      if (audioRef.current) {
        audioRef.current.pause()
      }
    } else {
      setIsPlaying(true)
      setAppState('playing')
      setShowText(false)
      if (audioRef.current) {
        audioRef.current.play().catch(console.error)
      }
    }
  }

  const resetPresentation = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    setIsPlaying(false)
    setCurrentSlide(0)
    currentTimeRef.current = 0
    setAppState('initial')
  }

  const startPresentation = () => {
    setIsPlaying(true)
    setAppState('playing')
    setShowText(false)
    currentTimeRef.current = 0
    startTimeRef.current = Date.now()
  }

  useEffect(() => {
    const blockNavigation = (e: Event) => {
      if (appState === 'playing') {
        e.preventDefault()
      }
    }

    const blockKeys = (e: KeyboardEvent) => {
      if (appState === 'playing' && [
        'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown',
        'Space', 'PageUp', 'PageDown'
      ].includes(e.key)) {
        e.preventDefault()
      }
    }

    window.addEventListener('wheel', blockNavigation, { passive: false })
    window.addEventListener('keydown', blockKeys)
    window.addEventListener('touchstart', blockNavigation)
    
    return () => {
      window.removeEventListener('wheel', blockNavigation)
      window.removeEventListener('keydown', blockKeys)
      window.removeEventListener('touchstart', blockNavigation)
    }
  }, [appState])

  if (appState === 'initial' && showText) {
    return (
      <div className="relative w-full min-h-screen overflow-y-auto select-none">
        <Background />
        <div className="py-8">
          <Text />
          
          <div className="fixed bottom-4 right-4 flex space-x-2 z-50">
            <button
              onClick={() => setShowText(false)}
              className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 transition-all duration-300 active:scale-95 text-white text-sm hover:bg-white/20"
            >
              Закрыть текст
            </button>
            <button
              onClick={startPresentation}
              className="px-4 py-2 rounded-full bg-green-500/20 backdrop-blur-lg border border-green-500/30 transition-all duration-300 active:scale-95 text-white text-sm hover:bg-green-500/30 flex items-center space-x-2"
            >
              <Play className="w-4 h-4" />
              <span>Начать презентацию</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (appState === 'initial' && !showText) {
    return (
      <div className="relative w-full h-screen overflow-hidden select-none">
        <Background />
        
        <div className="flex items-center justify-center h-full">
          <div className="text-white text-center backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20 max-w-md mx-4">
            <div className="flex justify-center mb-4">
              <Headphones className="w-12 h-12 text-purple-300" />
            </div>
            <h1 className="text-2xl font-bold mb-4">AI & Креативность</h1>
            <p className="mb-6 text-white/80">
              Презентация о том как AI усиливает творческий процесс разработчика
            </p>
            
            <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4 mb-6">
              <p className="text-yellow-200 text-sm flex items-center justify-center space-x-2">
                <Headphones className="w-4 h-4" />
                <span>Наденьте наушники — здесь важно не только смотреть, но и слушать</span>
              </p>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={startPresentation}
                className="w-full py-3 rounded-full bg-green-500/20 backdrop-blur-lg border border-green-500/30 transition-all duration-300 active:scale-95 text-white hover:bg-green-500/30 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Начать презентацию</span>
              </button>
              
              <button
                onClick={() => setShowText(true)}
                className="w-full py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 transition-all duration-300 active:scale-95 text-white hover:bg-white/20 flex items-center justify-center space-x-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>Прочитать текст</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (appState === 'finished') {
    return (
      <div className="relative w-full h-screen overflow-hidden select-none">
        <Background />
        
        <div className="flex items-center justify-center h-full">
          <div className="text-white text-center backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20 max-w-md mx-4">
            <h1 className="text-2xl font-bold mb-4">Презентация завершена!</h1>
            <p className="mb-6 text-white/80">
              Надеюсь, было интересно и полезно
            </p>
            
            <div className="space-y-3">
              <button
                onClick={resetPresentation}
                className="w-full py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 transition-all duration-300 active:scale-95 text-white hover:bg-white/20 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Посмотреть снова</span>
              </button>
              
              <button
                onClick={() => {
                  setShowText(true)
                  setAppState('initial')
                }}
                className="w-full py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 transition-all duration-300 active:scale-95 text-white hover:bg-white/20 flex items-center justify-center space-x-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>Прочитать текст</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-screen overflow-hidden select-none touch-pan-y">
      <Background />
      
      {React.Children.map(children, (child, index) => (
        <Slide isActive={index === currentSlide}>
          {child}
        </Slide>
      ))}
      
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-1 z-10">
        {children.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : index < currentSlide
                ? 'bg-green-400'
                : 'bg-purple-200/30'
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
        <button
          onClick={resetPresentation}
          className="px-3 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 transition-all duration-300 active:scale-95 text-white text-sm hover:bg-white/20"
        >
          С начала
        </button>
        
        <button
          onClick={togglePlayPause}
          className="p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 transition-all duration-300 active:scale-95 hover:bg-white/20"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-white" />
          ) : (
            <Play className="w-5 h-5 text-white" />
          )}
        </button>
      </div>

      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white/50 text-xs backdrop-blur-lg bg-white/5 px-3 py-1 rounded-full border border-white/10">
        {isPlaying ? 'Идёт презентация...' : 'На паузе'}
      </div>
    </div>
  )
}

export default Slider