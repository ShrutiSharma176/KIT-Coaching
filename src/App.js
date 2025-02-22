import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';

import HomePage from './component/HomePage';
import Notification from './component/Notification';
import AboutPage from './component/AboutPage';
import Contact from './component/Contact';
import Classroom from './component/Classroom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/classroom' element={<Classroom/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
