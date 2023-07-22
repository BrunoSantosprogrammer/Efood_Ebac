import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Restaurants from './pages/Restaurants'

const Rotas = () => (
  <Routes>
    <Route path="/efood/" element={<Home />} />
    <Route path="/efood/restaurantes/:id" element={<Restaurants />} />
  </Routes>
)

export default Rotas
