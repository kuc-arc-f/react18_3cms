import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './component/Home';
import About from './component/about';
import Navibar from './component/Navibar';
import Test from './component/test';
//import Post from './component/posts';
import PostShow from './component/posts/show';

//
function App() {
  return (
    <div className="App">
      <Navibar name="CMS" />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/test' element={<Test />} />        
        <Route path='/post_show' element={<PostShow />} />        
      </Routes>
    </div>
  );
}
export default App;
/*
<Route path='/posts' element={<Post />} /> 
<Route path='/post_create' element={<PostCreate />} />        
<Route path='/post_edit' element={<PostEdit />} />        
*/