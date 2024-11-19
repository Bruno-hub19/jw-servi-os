import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home } from  './pages/Home'
import { About } from  './pages/About'
import { ContactUs } from './pages/ContactUs'

export const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sobre' element={<About />} />
      <Route path='/contato' element={<ContactUs />} />
    </Routes>
  </Router>
)