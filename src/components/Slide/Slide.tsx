import React from 'react'

interface SlideProps {
  children: React.ReactNode
  isActive: boolean
}

const Slide: React.FC<SlideProps> = ({ children, isActive }) => {
  return (
    <div className={`
      absolute inset-0 transition-all duration-700 ease-out
      ${isActive 
        ? 'opacity-100 translate-x-0' 
        : 'opacity-0 -translate-x-full'
      }
    `}>
      <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
        {children}
      </div>
    </div>
  )
}

export default Slide