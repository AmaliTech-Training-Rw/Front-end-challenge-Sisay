import './App.css';
import Header from './components/Header/Header';
import { useState } from 'react';


function App() {
  const [isListerPage, setListerPage] = useState(false);
  return (
    <div className="App">
      <Header isLister={isListerPage}/>
     
    </div>
  );
}

export default App;
