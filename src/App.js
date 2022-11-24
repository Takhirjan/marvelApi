
import './App.css';
import { Characters } from './components/characters';
import {Comics} from './components/comics';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import {MainPage} from './components/mainpage';
import {NotFound} from './components/notfound';

function App() {
  return (
      
        <Router>
          <Routes>
            <Route path="/" element={<MainPage/>}>
            <Route path="/characters" element={<Characters/>} />
            <Route path="/comics" element={<Comics/>} />
            </Route>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          </Router> 
  );
}

export default App;
