import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Homepage from './pages/homepage';
import Shop from './pages/productspage';
import AboutPage from './pages/aboutpage';
import CheckoutPage from './pages/checkoutpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App (){
  return (
    ReactDOM.render(
      <Provider store={store}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>,
      document.getElementById('root')
    ));
}

export default App;