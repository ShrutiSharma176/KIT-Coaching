import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';

import HomePage from './component/HomePage';
import Notification from './component/Notification';
import AboutPage from './component/AboutPage';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/aboutus' element={<AboutPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
