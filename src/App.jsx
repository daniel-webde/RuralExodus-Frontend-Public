import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import DonationPage from './pages/DonationPage'
import LandingPage from './pages/LandingPage'
import NoPage from './pages/NoPage';

function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <LandingPage/> } />
          <Route path='/donate' element={ <DonationPage/> } />
          <Route path='*' element={ <NoPage/> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
