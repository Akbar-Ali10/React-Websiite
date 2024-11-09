import './App.css';
import Banner from './components/banner';
import Header from './components/Header';
import Sale from './components/Sale';
import New from './components/New';
import Section from './components/section';
import Outer from './components/ouder';
import Product from './product';
import Offer from './offer';
import Footer from './components/Footer';
import Footerb from './components/footer.b';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Shop from './components/shop';
import Order from './components/order';
import Contact from './components/contact';
import Login from './components/Login';
import Singup from './components/Singup';




function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/header' element={<Header />} />
        <Route path='/banner' element={<Banner />} />
        <Route path='/sale' element={<Sale />} />
        <Route path='/new' element={<New />} />
        <Route path='/section' element={<Section />} />
        <Route path='/outer' element={<Outer />} />
        <Route path='/product' element={<Product />} />
        <Route path='/offer' element={<Offer />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/footerb' element={<Footerb />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/order' element={<Order />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/singup' element={<Singup />} />
      </Routes>


    </>
  );
}

export default App;
