
import { useNavigate, Routes, Route} from 'react-router-dom';
import Home from './views/Home/view';
import Helping from './views/Helping/view';
import Events from './views/Events/view';
import Products from './views/Products/view';
import Contact from './views/Contact/view';
import Login from './views/Login/view';
import CreatingEvents from './views/CreatingEvents/view';
import Dashboard from './views/Dashboard/view';
import ProductClass from './views/ProductClass/view';
import CreatingProduct from './views/CreatingProduct/view';


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
      <Route path="/categoria/:category" element={<ProductClass/>}/>
      <Route path="/produtosadm" element={<CreatingProduct/>}/>
   </Routes>
  );
}

export default App;
