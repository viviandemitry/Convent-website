
import { useNavigate, Routes, Route} from 'react-router-dom';
import Home from './views/Home/view';
import Helping from './views/Helping/view';
import Events from './views/Events/view';
import Products from './views/Products/view';
import Contact from './views/Contact/view';
import Login from './views/Login/view';
import CreatingEvents from './views/CreatingEvents/view';
import Dashboard from './views/Dashboard/view';


import './App.css';

function App() {
  return (
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/comoajudar" element={<Helping/>}/>
      <Route path="/eventos" element={<Events/>}/>
      <Route path="/produtos" element={<Products/>}/>
      <Route path="/contato" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/eventosadm" element={<CreatingEvents/>}/>
      <Route path="/menu" element={<Dashboard/>}/>
   </Routes>
  );
}

export default App;
