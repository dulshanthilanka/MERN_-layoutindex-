import './App.css';
import Home from './components/Home';
import Form from './components/Form';
import Delete from './components/Delete';
import Update from './components/Update';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Read from './components/Read';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Form />} />
          <Route path="/read" element={<Read />}/>
          <Route path="/delete" element={<Delete />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
