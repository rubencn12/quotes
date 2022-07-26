import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import quotes from './json/quotes.json'
import TheButton from './Components/TheButton'


function App() {

  const getRandomElement = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }

  const color = ['#678983', '#3FC1C9', '#52616B', '#EF5B0C', '#0F3D3E', '#FF9999', '#00B8A9', '#7D5A50', '#FF9A00', '#98DDCA', '#892CDC']


  let quoteRandom = getRandomElement(quotes)
  let colorRandom = getRandomElement(color)

  const [randomQuote, setRandomQuote] = useState(quoteRandom)
  const [randomColor, setRandomColor] = useState(colorRandom)


  const objBgStyle = {
    backgroundColor: randomColor
}

  const getRandomAll = () => {

    quoteRandom = getRandomElement(quotes)
    colorRandom = getRandomElement(color)

    setRandomQuote(quoteRandom)
    setRandomColor(colorRandom)
  }


  return (
    <div className="App" style={objBgStyle}>
      <div className='card'>
        <Card
          randomQuote={randomQuote}
          randomColor={randomColor}
          getRandomAll={getRandomAll}
        />
        <TheButton
          getRandomAll={getRandomAll}
          randomColor={randomColor}
          objBgStyle={objBgStyle}
        />
      </div>
    </div>
  )
}

export default App
