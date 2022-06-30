import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials'
import Testimonials1 from './Components/Testimonials1';
import Footer from './Components/Footer';






function App() {
  return (
    <div className="App">
     
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
    {/*<Testimonials/>*/}
      <Testimonials1/>
      <Contact/>
      <Footer/>
      
      
      
    </div>
  );
}

export default App;
