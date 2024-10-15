import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Studentname from './components/Studentname'
import Detailsofstudents from './components/Detailsofstudents'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Studentname/>}/>
      <Route path='/details/:id' element={<Detailsofstudents/>}/>
    </Routes>
  )
}
