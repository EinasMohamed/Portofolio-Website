import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar';
import { Skills } from './Components/Skills';
import { Banner } from './Components/Banner';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import { Newsletter } from './Components/Newsletter';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Newsletter></Newsletter>
    </div>
  );
}
export default App;
 
