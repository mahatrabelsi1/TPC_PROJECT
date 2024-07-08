import './App.css'
import PageFilter from './main/PageFilter'
import PageHome from './main/PageHome'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {

  return (
    <>
     <Router>
      <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/Filter" element={<PageFilter/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
