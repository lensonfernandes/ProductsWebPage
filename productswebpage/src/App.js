import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
 import Products from './components/Products/Products';
 import FooterTop from './components/Footer/FooterTop';
 import FooterMiddle from './components/Footer/FooterMiddle';
 import FooterBottom from './components/Footer/FooterBottom';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Products />
      <FooterTop />
      <FooterMiddle />
      <FooterBottom /> 
    </div>
  );
}

export default App;
