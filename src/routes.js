import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Filmes from './pages/Filmes';
import Erro from './pages/Erro';
import Header from './componentes/Header';

function RoutesApp(){
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/filme/:id" element={ <Filmes/> } />

        <Route path="*" element={ <Erro/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;