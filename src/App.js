
import { BrowserRouter } from 'react-router-dom'
import RoutersApp from './routes/routes';
import AutorizarClientes from './contexts/auth';
import ConfigsContext from './contexts/Configs';
import './index.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AutorizarClientes>
          <ConfigsContext>
            <RoutersApp />
          </ConfigsContext>
        </AutorizarClientes>
      </BrowserRouter>
    </div>
  );
}

export default App;
