
import './App.css';
import HomePage from './components/HomePage/homepage';
import WhyRecycle from './components/Pages/Why Recycle/whyRecycle';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/whyRecycle" element={<WhyRecycle/>} /></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
