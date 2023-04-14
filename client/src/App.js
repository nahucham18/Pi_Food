import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Home,Landing,Detail,Form} from './views'


import {Routes, Route, useLocation} from 'react-router-dom'


function App() {

  const {pathname} = useLocation();

  return (
    <div className="App">
      {pathname!=='/' && <NavBar/>}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/create' element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
