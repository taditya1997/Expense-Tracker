import './App.css';
import Header from './Header.js';
import Balance from './Balance.js';
import Counter from './Counter.js';
import History from './History.js';
import Form from './Form.js';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <div className="container">
          <Balance />
          <Counter />
          <History />
          <Form />
        </div>


      </div>
    </GlobalProvider>

  );
}


export default App;

