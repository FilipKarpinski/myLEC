import React from 'react';
import logo from './logo.svg';
import './App.scss';
import './Header.scss';
import './Content.scss';
import './Footer.scss';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

function App() {
  return (
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
