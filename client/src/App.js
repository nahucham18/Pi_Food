import './App.css';
import Home from './views/Home/Home';
import Landing from './views/Landing/Landing';
import Detail from './views/Detail/Detail'
import Form from './views/Form/Form'

import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail' element={<Detail/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
