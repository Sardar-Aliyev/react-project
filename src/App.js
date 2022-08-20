import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Contact from './components/Contact';
function App() {
  return (
    <>

      <Navbar />
      <Header />
      <Aboutme />
      <Contact />
    </>
  );
}

export default App;
