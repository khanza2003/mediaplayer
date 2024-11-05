import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
     {/* path for landing :http://localhost:5173/,home:http://localhost:5173/home and history :http://localhost:5173/History*/ }
       {/* path for header*/ }
    <Header/>
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/history' element={<History/>}/>
     </Routes>
      {/* path for footer*/ }
     <Footer/>
    </>
  )
}

export default App
