import { Clock, Brain, TrendingUp, BarChart3 } from 'lucide-react'

export const Slide3 = () => (
  <div className="text-center text-white px-4 h-full flex flex-col justify-center">
    <div className="max-w-4xl mx-auto w-full">
      <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
        1. Эффективность AI в подготовке
      </h2>
      
      <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-white/20">
          <Clock className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 mx-auto mb-2" />
          <h3 className="text-sm md:text-lg font-bold mb-2">Скорость</h3>
          <p className="text-xs md:text-sm opacity-90">Секунды вместо дней анализа</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-white/20">
          <Brain className="w-6 h-6 md:w-8 md:h-8 text-blue-400 mx-auto mb-2" />
          <h3 className="text-sm md:text-lg font-bold mb-2">Объем</h3>
          <p className="text-xs md:text-sm opacity-90">Тысячи источников одновременно</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-white/20">
          <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-green-400 mx-auto mb-2" />
          <h3 className="text-sm md:text-lg font-bold mb-2">Качество</h3>
          <p className="text-xs md:text-sm opacity-90">Минимализация человеческих ошибок</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-white/20">
          <BarChart3 className="w-6 h-6 md:w-8 md:h-8 text-purple-400 mx-auto mb-2" />
          <h3 className="text-sm md:text-lg font-bold mb-2">Аналитика</h3>
          <p className="text-xs md:text-sm opacity-90">Глубокое понимание данных</p>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-purple-300/30">
        <p className="text-sm md:text-lg font-bold mb-1">
          Стадия подготовки: от недель к минутам
        </p>
        <p className="text-xs md:text-sm opacity-90">
          AI трансформирует самый длительный этап творчества
        </p>
      </div>
    </div>
  </div>
)