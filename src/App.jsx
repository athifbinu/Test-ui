import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
const App = () => {
  return (
    <div>
      <Header/>
        <div className='mb-24'>
        <Home/>
        </div>
      <Footer/>
    
    </div>
  )
}

export default App
