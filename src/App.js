import './App.css';
import ApplicationViews from './components/ApplicationViews';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return <BrowserRouter>
    <ApplicationViews/>
  </BrowserRouter>
}

export default App;
