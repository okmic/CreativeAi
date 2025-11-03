import { PieChart, Layers, Workflow, Rocket } from 'lucide-react'

export const Slide6 = () => (
  <div className="text-center text-white px-4 h-full flex flex-col justify-center">
    <div className="max-w-4xl mx-auto w-full">
      <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
        3.1 Декомпозиция целей
      </h2>
      
      <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-white/20">
          <PieChart className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 mx-auto mb-2" />
          <h3 className="text-sm md:text-lg font-bold mb-2">Анализ</h3>
          <p className="text-xs md:text-sm opacity-90">Определение ключевых компонентов</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-white/20">
          <Layers className="w-6 h-6 md:w-8 md:h-8 text-blue-400 mx-auto mb-2" />
          <h3 className="text-sm md:text-lg font-bold mb-2">Иерархия</h3>
          <p className="text-xs md:text-sm opacity-90">Построение структуры подзадач</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-white/20">
          <Workflow className="w-6 h-6 md:w-8 md:h-8 text-green-400 mx-auto mb-2" />
          <h3 className="text-sm md:text-lg font-bold mb-2">Зависимости</h3>
          <p className="text-xs md:text-sm opacity-90">Выявление последовательности выполнения</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-white/20">
          <Rocket className="w-6 h-6 md:w-8 md:h-8 text-purple-400 mx-auto mb-2" />
          <h3 className="text-sm md:text-lg font-bold mb-2">Исполнение</h3>
          <p className="text-xs md:text-sm opacity-90">Запуск атомарных операций</p>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-4 md:p-5 border border-green-300/30">
        <p className="text-sm md:text-lg font-bold mb-1">
          Принцип "съесть слона по кусочкам"
        </p>
        <p className="text-xs md:text-sm opacity-90">
          AI превращает глобальные цели в цепочку простых действий
        </p>
      </div>
    </div>
  </div>
)