import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Image from './components/Image';
import Navbar from './components/Navbar';
import Mahasiswa from './components/Mahasiswa';
import TambahMahasiswa from './components/TambahMahasiswa'
import Update from './components/Update'

class App extends Component {
  render() {
    return (
     <BrowserRouter>
     <Navbar/>
      <div className="container">
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/image" component={Image} />
        <Route path="/mahasiswa" component={Mahasiswa} />
        <Route path="/add" component={TambahMahasiswa} />
        <Route path="/update/:nim" component={Update} />
      </div>
     </BrowserRouter>
    )
  }
}


export default App;
