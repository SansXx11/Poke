import './App.css'; 
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import PokedexPage from './pages/PokedexPage';
import PokeDetailPage from './pages/PokeDetailPage';
import ProtectedRoutes from './pages/ProtectedRoutes';  
import StatsPage from './pages/StatsPage';
function App() {

 
  return (
    <>
      <div>
      <Routes>
        <Route path='/' element={<Homepage />} /> 
        <Route element={<ProtectedRoutes />} >
          <Route path='/pokedex' element={<PokedexPage />} /> 
          <Route path="/pokemon/:name" element={<>
  <PokeDetailPage />
  <StatsPage />
</>} />        
</Route>
      </Routes>
      </div>
    </>
  )
}

export default App;
