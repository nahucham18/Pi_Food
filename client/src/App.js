import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import {Home,Landing,Detail,Form, Error, About} from './views'


import {Routes, Route, useLocation, Navigate} from 'react-router-dom'


function App() {

  const {pathname} = useLocation();

  return (
    <div className="App">
      {pathname!=='/' && pathname!=='/error' && <NavBar/>}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/create' element={<Form/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/error' element={<Error/>}/>
        <Route path='*' element={<Navigate to="/error"/>}/>
      </Routes>
        {pathname!=='/' && pathname!=='/error' && <Footer/>}
      
    </div>
  );
}

export default App;
