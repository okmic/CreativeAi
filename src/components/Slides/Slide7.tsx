import { Search, GitMerge, Shield, Rocket } from 'lucide-react'

export const Slide7 = () => (
  <div className="text-center text-white px-4 h-full flex flex-col justify-center">
    <div className="max-w-4xl mx-auto w-full">
      <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
        4. Проверка: человек и AI
      </h2>
      
      <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-white/20">
          <Search className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 mx-auto mb-2" />
          <h3 className="text-sm md:text-lg font-bold mb-2">Аудит</h3>
          <p className="text-xs md:text-sm opacity-90">AI проверяет логику и последовательность</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-white/20">
          <GitMerge className="w-6 h-6 md:w-8 md:h-8 text-blue-400 mx-auto mb-2" />
          <h3 className="text-sm md:text-lg font-bold mb-2">Интеграция</h3>
          <p className="text-xs md:text-sm opacity-90">Совместимость с существующими системами</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-white/20">
          <Shield className="w-6 h-6 md:w-8 md:h-8 text-green-400 mx-auto mb-2" />
          <h3 className="text-sm md:text-lg font-bold mb-2">Качество</h3>
          <p className="text-xs md:text-sm opacity-90">Человек оценивает эстетику и удобство</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-white/20">
          <Rocket className="w-6 h-6 md:w-8 md:h-8 text-purple-400 mx-auto mb-2" />
          <h3 className="text-sm md:text-lg font-bold mb-2">Запуск</h3>
          <p className="text-xs md:text-sm opacity-90">Финальное решение принимает человек</p>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-blue-300/30">
        <p className="text-sm md:text-lg font-bold mb-1">
          Ответственность остается за человеком
        </p>
        <p className="text-xs md:text-sm opacity-90">
          AI предоставляет анализ, но финальное решение всегда человеческое
        </p>
      </div>
    </div>
  </div>
)