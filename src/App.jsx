import { useState } from 'react'
import './App.css'
import Description from './components/Description'
import EthPrices from './components/EthPrices'

function App() {

  return (
    <div className="App">
      <div className="content">
        <Description />
        <EthPrices />
      </div>
    </div>
  )
}

export default App
