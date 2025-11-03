import { Search, Brain, Zap, CheckCircle, ArrowDown } from 'lucide-react'

export const Slide2 = () => (
  <div className="text-center text-white px-4 h-full flex flex-col justify-center">
    <div className="max-w-md mx-auto w-full">
      <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
        4 стадии творчества
      </h2>
      
      <div className="space-y-3 md:space-y-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-white/20 flex items-center">
          <Search className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 mr-3 md:mr-4 flex-shrink-0" />
          <div className="text-left flex-grow">
            <h3 className="text-sm md:text-lg font-bold mb-1">Подготовка</h3>
            <p className="text-xs md:text-sm opacity-90">Исследование и анализ проблемы</p>
          </div>
          <div className="text-purple-300 ml-2">
            <ArrowDown className="w-4 h-4 md:w-5 md:h-5" />
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-white/20 flex items-center">
          <Brain className="w-6 h-6 md:w-8 md:h-8 text-blue-400 mr-3 md:mr-4 flex-shrink-0" />
          <div className="text-left flex-grow">
            <h3 className="text-sm md:text-lg font-bold mb-1">Инкубация</h3>
            <p className="text-xs md:text-sm opacity-90">Отдых и подсознательная обработка</p>
          </div>
          <div className="text-purple-300 ml-2">
            <ArrowDown className="w-4 h-4 md:w-5 md:h-5" />
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-white/20 flex items-center">
          <Zap className="w-6 h-6 md:w-8 md:h-8 text-green-400 mr-3 md:mr-4 flex-shrink-0" />
          <div className="text-left flex-grow">
            <h3 className="text-sm md:text-lg font-bold mb-1">Озарение</h3>
            <p className="text-xs md:text-sm opacity-90">Момент внезапного понимания</p>
          </div>
          <div className="text-purple-300 ml-2">
            <ArrowDown className="w-4 h-4 md:w-5 md:h-5" />
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-white-20 flex items-center">
          <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-purple-400 mr-3 md:mr-4 flex-shrink-0" />
          <div className="text-left flex-grow">
            <h3 className="text-sm md:text-lg font-bold mb-1">Проверка</h3>
            <p className="text-xs md:text-sm opacity-90">Тестирование и реализация идеи</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 md:mt-8 bg-white/5 backdrop-blur-lg rounded-xl p-3 md:p-4 border border-white/10">
        <p className="text-xs md:text-sm opacity-90">
          Модель творческого процесса Грэма Уоллеса · 1926
        </p>
      </div>
    </div>
  </div>
)