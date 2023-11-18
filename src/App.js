
import './App.css';
// import Featured from './components/Featured';
// import Justin from './components/Justin';
// import Login from './components/Login';
// import MainContainer from './components/MainCotainer';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
// import Thelatest from './components/Thelatest';
import Footer from './components/Footer';
// import GearUp from './components/GearUp';
// import DontMiss from './components/DontMiss';
// import TheEssentials from './components/TheEssentials';
// import EndPart from './components/EndPart';
// import TrendAlert from './components/TrendAlert';
// import ShopbySport from './components/ShopbySport';
// import AlwaysIconic from './components/AlwaysIconic';
import Cart from './AllroutesComponents/Cart';
import AllMainFile from './components/AllMainFile';
import Signin from './AllroutesComponents/Signin';
import SNKRS from './SNKRS/SNKRS';
import UpcommingSNKRS from './SNKRS/UpcommingSNKRS';
import AllSNKRSFile from './SNKRS/AllSNKRSFile';
import InStock from './SNKRS/InStock';
import Customise from './Customise/Customise';
import Men from './Men/Men';
import Women from './Women/Women';
import Kids from './Kids/Kids';


function App() {
  return (
    <div className="App">
  
      
      
  {/* <Nav></Nav> */}
      <Routes>
        <Route path='/' element={<AllMainFile></AllMainFile>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/feed' element={<SNKRS></SNKRS>}></Route>

        <Route path='/login' element={ <Signin></Signin>}></Route>
        <Route path='/upcoming' element={ <UpcommingSNKRS></UpcommingSNKRS>}></Route>
        <Route path='/instock' element={ <InStock></InStock>}></Route>
        <Route path='/customise' element={<Customise></Customise>}></Route>
        <Route path='/men' element={<Men></Men>}></Route>
        <Route path='/weman' element={<Women></Women>}></Route>
        <Route path='/kids' element={<Kids></Kids>}></Route>







      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
