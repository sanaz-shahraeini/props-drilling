import React from 'react'
import Header from './components/Header'
import Main from './components/Main'

const App = () => {
  return (
    <div>
      <Header/>
      <Main name="Ali" age={12}/>
    </div>
  )
}

export default App
