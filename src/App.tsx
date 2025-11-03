import Slider from './components/Slider/Slider'
import { Slide1 } from './components/Slides/Slide1'
import { Slide2 } from './components/Slides/Slide2'
import { Slide3 } from './components/Slides/Slide3'
import { Slide4 } from './components/Slides/Slide4'
import { Slide5 } from './components/Slides/Slide5'
import { Slide6 } from './components/Slides/Slide6'
import { Slide7 } from './components/Slides/Slide7'
import { Slide8 } from './components/Slides/Slide8'

function App() {
  const timeMarks = [
    24000,
    52000,
    75000,
    99000,
    123000,
    147000,
    166000
  ]

  return (
    <Slider timeMarks={timeMarks}>
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
      <Slide6 />
      <Slide7 />
      <Slide8 />
    </Slider>
  )
}

export default App