import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Play, Pause, BookOpen, Headphones, RotateCcw } from 'lucide-react'
import Slide from '../Slide/Slide'
import Background from '../ui/Background/Background'
import Text from '../Text/Text'
import voice from "../../media/voice.mp3"
import music from "../../media/music.mp3"

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
  const [showAudioAlert, setShowAudioAlert] = useState(false)
  
  const voiceRef = useRef<HTMLAudioElement>(null)
  const musicRef = useRef<HTMLAudioElement>(null)
  const animationRef = useRef<number>(0)
  const startTimeRef = useRef<number>(0)
  const currentTimeRef = useRef<number>(0)

  useEffect(() => {
    voiceRef.current = new Audio(voice)
    musicRef.current = new Audio(music)
    
    voiceRef.current.preload = 'metadata'
    musicRef.current.preload = 'metadata'
    
    voiceRef.current.volume = 1
    musicRef.current.volume = 0.1
    
    musicRef.current.loop = true

    const handleVoiceEnded = () => {
      setIsPlaying(false)
      setAppState('finished')
      setCurrentSlide(0)
      if (musicRef.current) {
        musicRef.current.pause()
      }
    }

    voiceRef.current.addEventListener('ended', handleVoiceEnded)

    return () => {
      if (voiceRef.current) {
        voiceRef.current.removeEventListener('ended', handleVoiceEnded)
        voiceRef.current.pause()
      }
      if (musicRef.current) {
        musicRef.current.pause()
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

  const togglePlayPause = async () => {
    if (!voiceRef.current || !musicRef.current) return

    if (isPlaying) {
      setIsPlaying(false)
      voiceRef.current.pause()
      musicRef.current.pause()
    } else {
      try {
        await Promise.all([
          voiceRef.current.play(),
          musicRef.current.play()
        ])
        setIsPlaying(true)
        setAppState('playing')
        setShowText(false)
        setShowAudioAlert(false)
      } catch (error) {
        console.log('Audio play failed:', error)
        setShowAudioAlert(true)
      }
    }
  }

  const resetPresentation = () => {
    if (voiceRef.current) {
      voiceRef.current.pause()
      voiceRef.current.currentTime = 0
    }
    if (musicRef.current) {
      musicRef.current.pause()
      musicRef.current.currentTime = 0
    }
    setIsPlaying(false)
    setCurrentSlide(0)
    currentTimeRef.current = 0
    setAppState('initial')
    setShowAudioAlert(false)
  }

  const startPresentation = async () => {
    if (!voiceRef.current || !musicRef.current) return
    
    try {
      voiceRef.current.currentTime = 0
      musicRef.current.currentTime = 0
      
      await Promise.all([
        voiceRef.current.play(),
        musicRef.current.play()
      ])
      
      setIsPlaying(true)
      setAppState('playing')
      setShowText(false)
      setShowAudioAlert(false)
      currentTimeRef.current = 0
      startTimeRef.current = Date.now()
    } catch (error) {
      console.log('Audio play failed:', error)
      setShowAudioAlert(true)
    }
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
        <div className="py-8 pb-24">
          <Text />
        </div>
        
        <div className="fixed bottom-4 left-4 right-4 flex space-x-2 z-50">
          <button
            onClick={() => setShowText(false)}
            className="flex-1 px-4 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 transition-all duration-300 active:scale-95 text-white text-sm hover:bg-white/20"
          >
            Закрыть текст
          </button>
          <button
            onClick={startPresentation}
            className="flex-1 px-4 py-3 rounded-full bg-green-500/20 backdrop-blur-lg border border-green-500/30 transition-all duration-300 active:scale-95 text-white text-sm hover:bg-green-500/30 flex items-center justify-center space-x-2"
          >
            <Play className="w-4 h-4" />
            <span>Начать презентацию</span>
          </button>
        </div>
      </div>
    )
  }

  if (appState === 'initial' && !showText) {
    return (
      <div className="relative w-full h-screen overflow-hidden select-none">
        <Background />
        
        <div className="flex items-center justify-center h-full px-4 pb-20">
          <div className="text-white text-center backdrop-blur-lg bg-white/10 p-6 rounded-2xl border border-white/20 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-center mb-4">
              <Headphones className="w-10 h-10 text-purple-300" />
            </div>
            <h1 className="text-xl font-bold mb-3">AI & Креативность</h1>
            <p className="mb-4 text-white/80 text-sm">
              Презентация о том как AI усиливает творческий процесс разработчика
            </p>
            
            <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3 mb-4">
              <p className="text-yellow-200 text-xs flex items-center justify-center space-x-2">
                <Headphones className="w-3 h-3" />
                <span>Наденьте наушники — здесь важно не только смотреть, но и слушать</span>
              </p>
            </div>
            
            <div className="space-y-2">
              <button
                onClick={startPresentation}
                className="w-full py-3 rounded-full bg-green-500/20 backdrop-blur-lg border border-green-500/30 transition-all duration-300 active:scale-95 text-white hover:bg-green-500/30 flex items-center justify-center space-x-2 text-sm"
              >
                <Play className="w-4 h-4" />
                <span>Начать презентацию</span>
              </button>
              
              <button
                onClick={() => setShowText(true)}
                className="w-full py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 transition-all duration-300 active:scale-95 text-white hover:bg-white/20 flex items-center justify-center space-x-2 text-sm"
              >
                <BookOpen className="w-4 h-4" />
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
        
        <div className="flex items-center justify-center h-full px-4 pb-20">
          <div className="text-white text-center backdrop-blur-lg bg-white/10 p-6 rounded-2xl border border-white/20 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h1 className="text-xl font-bold mb-4">Презентация завершена!</h1>
            <p className="mb-4 text-white/80 text-sm">
              Надеюсь, было интересно и полезно
            </p>
            
            <div className="space-y-2">
              <button
                onClick={resetPresentation}
                className="w-full py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 transition-all duration-300 active:scale-95 text-white hover:bg-white/20 flex items-center justify-center space-x-2 text-sm"
              >
                <Play className="w-4 h-4" />
                <span>Посмотреть снова</span>
              </button>
              
              <button
                onClick={() => {
                  setShowText(true)
                  setAppState('initial')
                }}
                className="w-full py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 transition-all duration-300 active:scale-95 text-white hover:bg-white/20 flex items-center justify-center space-x-2 text-sm"
              >
                <BookOpen className="w-4 h-4" />
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
      
      <div className="w-full h-full flex items-center justify-center">
        <div className="max-w-full max-h-full">
          {React.Children.map(children, (child, index) => (
            <Slide isActive={index === currentSlide}>
              {child}
            </Slide>
          ))}
        </div>
      </div>
      
      {showAudioAlert && (
        <div className="absolute top-4 left-4 right-4 z-50">
          <div className="bg-red-500/20 backdrop-blur-lg border border-red-500/30 rounded-lg p-3">
            <p className="text-red-200 text-xs text-center">
              Не удалось воспроизвести аудио. Нажмите на экран и попробуйте снова.
            </p>
          </div>
        </div>
      )}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={togglePlayPause}
          className="p-4 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 transition-all duration-300 active:scale-95 hover:bg-white/30"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      <div className="absolute bottom-4 right-4 z-10">
        <button
          onClick={resetPresentation}
          className="p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 transition-all duration-300 active:scale-95 hover:bg-white/20"
          title="С начала"
        >
          <RotateCcw className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  )
}

export default Slider