import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/home/index.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Contact from './pages/Contact.jsx'
import Item from './pages/Item/index.jsx'
import AddItem from './pages/AddBlog/index.jsx'
import EditItem from './pages/EditBlog/index.jsx'


function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/item/:id" element={<Item/>} />
        <Route path="/add-item" element={<AddItem/>} />
        <Route path="/edit-item/:id" element={<EditItem/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
