import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar';
import { Skills } from './Components/Skills';
import { Banner } from './Components/Banner';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
    </div>
  );
}
export default App;
 
