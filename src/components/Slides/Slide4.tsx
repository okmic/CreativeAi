import { Brain, Heart, Eye, Clock } from 'lucide-react'

export const Slide4 = () => (
  <div className="text-center text-white px-4 h-full flex flex-col justify-center">
    <div className="max-w-4xl mx-auto w-full">
      <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
        2. Осознанная инкубация
      </h2>
      
      <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-white/20">
          <Brain className="w-6 h-6 md:w-8 md:h-8 text-blue-400 mx-auto mb-2" />
          <h3 className="text-sm md:text-lg font-bold mb-2">Доверие</h3>
          <p className="text-xs md:text-sm opacity-90">Верьте что подсознание работает</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-white/20">
          <Heart className="w-6 h-6 md:w-8 md:h-8 text-pink-400 mx-auto mb-2" />
          <h3 className="text-sm md:text-lg font-bold mb-2">Отпускание</h3>
          <p className="text-xs md:text-sm opacity-90">Сознательное освобождение от контроля</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-white/20">
          <Eye className="w-6 h-6 md:w-8 md:h-8 text-green-400 mx-auto mb-2" />
          <h3 className="text-sm md:text-lg font-bold mb-2">Осознанность</h3>
          <p className="text-xs md:text-sm opacity-90">Наблюдение без вмешательства</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-white/20">
          <Clock className="w-6 h-6 md:w-8 md:h-8 text-amber-400 mx-auto mb-2" />
          <h3 className="text-sm md:text-lg font-bold mb-2">Время</h3>
          <p className="text-xs md:text-sm opacity-90">Дайте процессу естественный ход</p>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-green-300/30">
        <p className="text-sm md:text-lg font-bold mb-1">
          Человеческое превосходство в инкубации
        </p>
        <p className="text-xs md:text-sm opacity-90">
          AI не может "отпустить" задачу - это уникальная способность сознания
        </p>
      </div>
    </div>
  </div>
)