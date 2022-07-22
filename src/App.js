import React from 'react';
import { Route, Routes} from 'react-router-dom';
import {Container} from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MyBottom from './components/Main/MainNav'
import Trending from './Pages/Trending/Trending';
import Search from './Pages/Search/Search';
import Series from './Pages/Series/Series';
import Movies from './Pages/Movies/Movies';
function App() {
  return (
   <BrowserRouter>
   <Header/>
   <div className='app'>
    <Container>
    <Routes>
      <Route path="/" component={Trending} exact/>
      <Route path="/movies" component={Movies}/>
      <Route path="/series" component={Series}/>
      <Route path="/search" component={Search}/>
    </Routes>
  </Container>  

   </div>
<MyBottom/>
   </BrowserRouter>
  );
}

export default App;
