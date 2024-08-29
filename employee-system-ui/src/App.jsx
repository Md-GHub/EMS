import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './Components/AddEmployee';
import Navbar from './Components/Navbar';
import AllUser from './Components/AllUser';
import EditEmployee from './Components/EditEmployee';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path='/add' element={<AddEmployee />} ></Route>
          <Route path='/getusers' element={<AllUser/>} ></Route>
          <Route path='/edit/:id' element={<EditEmployee/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
