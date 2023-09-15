import './App.css';
import Header from './components/Header/Header';
import { useState } from 'react';
import Home from './components/Home/Home';


function App() {
  const [isListerPage, setListerPage] = useState(false);
  return (
    <div className="App">
      <Header isLister={isListerPage}/>
      <Home />
    </div>
  );
}

export default App;
