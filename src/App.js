import './App.css';
import Home from './Home';
import Movies from './Movies';
import {Routes, Route} from "react-router-dom";
import SingleMovie from './SingleMovie';
import Error from './Error';



function App() {
  return (
    <>
  
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/movie/:id" element={<SingleMovie />} />
     <Route path="/movies/" element={<Movies />} />
    <Route path="*" element={<Error />} />
    </Routes>
   
  
    </>
  );
}

export default App;
