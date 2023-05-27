import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LaDolce from './pages/laDolceVitaTrattoria'
import HiokiSushi from './pages/HiokiSushi'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/laDolceVitaTrattoria" element={<LaDolce />} />
    <Route path="/hiokiSushi" element={<HiokiSushi />} />
  </Routes>
)

export default Rotas
