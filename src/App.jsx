import './App.css'
import Nav from './Components/Layout/Nav'
import Home from './Components/Pages/Home'
import Footer from './Components/Layout/Footer'
import Router from './Components/Layout/Router'
function App() {

  return (
    <div className='w-screen h-auto bg-[#0C0C0C] overflow-x-hidden'>
     <Nav/>
     <Router/>
     <Footer/>
    </div>
  )
}

export default App
