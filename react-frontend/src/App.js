import './App.css';
import ListEmployee from './components/ListEmployee';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <div className="App">
        < Router >
          <Routes>
            <Route path='*' element={<h1>Nothing found</h1>}/>
            <Route path='/employees' element={< ListEmployee />}/>
            <Route path='/employees/:id' element={< ViewEmployee />}/>
                      
          </Routes >
        </Router>
        

    </div>
  );
}

export default App;
