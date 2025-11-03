import { Users, Sparkles, Brain, FastForward } from 'lucide-react'

export const Slide5 = () => (
  <div className="text-center text-white px-4 h-full flex flex-col justify-center">
    <div className="max-w-4xl mx-auto w-full">
      <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
        3. Человек + AI на практике
      </h2>
      
      <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-white/20">
          <Users className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 mx-auto mb-2" />
          <h3 className="text-sm md:text-lg font-bold mb-2">Партнерство</h3>
          <p className="text-xs md:text-sm opacity-90">AI как интеллектуальный помощник</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-white/20">
          <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-blue-400 mx-auto mb-2" />
          <h3 className="text-sm md:text-lg font-bold mb-2">Идеи</h3>
          <p className="text-xs md:text-sm opacity-90">Генерация и валидация концепций</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-white/20">
          <Brain className="w-6 h-6 md:w-8 md:h-8 text-green-400 mx-auto mb-2" />
          <h3 className="text-sm md:text-lg font-bold mb-2">Анализ</h3>
          <p className="text-xs md:text-sm opacity-90">Обработка данных и выявление паттернов</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-white/20">
          <FastForward className="w-6 h-6 md:w-8 md:h-8 text-purple-400 mx-auto mb-2" />
          <h3 className="text-sm md:text-lg font-bold mb-2">Итерации</h3>
          <p className="text-xs md:text-sm opacity-90">Быстрые циклы улучшения</p>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-purple-300/30">
        <p className="text-sm md:text-lg font-bold mb-1">
          Синергия человеческого и искусственного интеллекта
        </p>
        <p className="text-xs md:text-sm opacity-90">
          AI ускоряет выполнение, человек обеспечивает смысл и направление
        </p>
      </div>
    </div>
  </div>
)