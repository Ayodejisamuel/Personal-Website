import Newbar from './Newbar/newbar';
import Footer from './Footer/footer'
import Navbar from './Navbar/navbar';
import Intro from './Intro/intro';
import Portfolio from './Portfolio/portfolio'
import Skills from './Skills/skills'
import Contact from './Contact/contact'
import './App.css';

 


function App() {
 
  
   
 


  return (

    <div className="container">
 <Navbar/>
 <Intro />
 <Portfolio />
 <Skills />
 <Contact />
 <Footer />

    </div>  
  );
}


export default App;