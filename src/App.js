import 'swiper/swiper.min.css';

import './App.scss';

import { BrowserRouter } from 'react-router-dom';

import Header from './components/header/Header';

import RoutesConfig from './config/RoutesConfig';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <RoutesConfig />
      </>
    </BrowserRouter>
  );
}

export default App;
