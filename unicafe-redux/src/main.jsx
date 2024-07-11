import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const handleButtonClick = ( buttonAction ) => {
    store.dispatch({
      type: buttonAction
    })
  }



  return (
    <div>
      <button onClick={() => handleButtonClick('GOOD')}>good</button> 
      <button onClick={() => handleButtonClick('OK')}>ok</button> 
      <button onClick={() => handleButtonClick('BAD')}>bad</button>
      <button onClick={() => handleButtonClick('ZERO')}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
