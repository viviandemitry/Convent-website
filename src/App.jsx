
import { useNavigate, Routes, Route} from 'react-router-dom';
import Home from './views/Home/view';
import Helping from './views/Helping/view';
import Events from './views/Events/view';
import Products from './views/Products/view';
import Contact from './views/Contact/view';


import './App.css';

function App() {
  return (
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/comoajudar" element={<Helping/>}/>
      <Route path="/eventos" element={<Events/>}/>
      <Route path="/produtos" element={<Products/>}/>
      <Route path="/contato" element={<Contact/>}/>
   </Routes>
  );
}

export default App;
