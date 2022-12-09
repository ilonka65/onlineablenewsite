import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './component/Home'

const App = () => {
  return (
    <>
      <Routes>
      <Route path='/onlineable' element={<Home />} />
      </Routes>
    </>
  )
}

export default App