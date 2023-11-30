import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/home/index.jsx'
import AboutUs from './pages/AboutUs.jsx'


function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
