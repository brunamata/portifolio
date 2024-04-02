import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import SobreMim from './pages/SobreMim';
import Trajetoria from './pages/Trajetoria';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/sobre-mim" element={<SobreMim/>} />
      <Route path="/minha-trajetoria" element={<Trajetoria/>} />
      <Route path="/meus-projetos" element={<Projetos/>} />
      <Route path="/contato" element={<Contato/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
