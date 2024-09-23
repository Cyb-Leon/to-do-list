import React from 'react';
import './App.css';
import Header from './layout/header';
import Footer from './layout/footer';
import Note from './Note';

function App() {
  return ( <div>
   <Header />
   <Note/>
   <Footer />
  </div>
  )
}

export default App;
