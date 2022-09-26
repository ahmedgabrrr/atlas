import React from 'react';
import './App.css';
import Home from './pages/home/home';
import ScrollToTop from './components/scrollToTop/scrollToTop';
import Footer from './components/footer/footer';

function App() {
  return (
    <React.Fragment>
      <Home />
      <ScrollToTop />
      <Footer />
    </React.Fragment>
  )
}

export default App;
