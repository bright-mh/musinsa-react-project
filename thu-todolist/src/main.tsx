import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoContainer from './TodoContainer'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
)
