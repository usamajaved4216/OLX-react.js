import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RouterApp from './Config/Router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <RouterApp />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
