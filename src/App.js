import logo from './assets/Polygon 1.svg'
import {BrowserRouter} from 'react-router-dom'
import RoutersApp from './routes/routes';
import AutorizarClientes from './contexts/auth';
import './index.css'
import {ToastContainer} from 'react-toastify'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AutorizarClientes>
          <ToastContainer autoClose={1000}/>
            <RoutersApp/>
        </AutorizarClientes>
      </BrowserRouter>
    </div>
  );
}

export default App;
