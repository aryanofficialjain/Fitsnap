import React, { Profiler } from 'react'
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ExerciseResult from './components/ExerciseResult'
import ParticularMuscle from './components/ParticularMuscle';
import Profile from "./components/Profile";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
         
          <Route path='/' element={<Home />} />
          <Route path='/exercise' element={<ExerciseResult />} />
          <Route path='/:muscle' element={<ParticularMuscle />} />
          <Route path='/profile' element={<Profile/>}/>
        </Routes>

      </Router>

    </>
  )
}

export default App