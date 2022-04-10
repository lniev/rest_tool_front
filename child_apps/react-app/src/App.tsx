import Router from './router/router';
import './App.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MicroApp from './utils/microAppUtils';

function App() {
  const navigate = useNavigate();

  function dataListener(data) {
    console.log('huoqu ',data)
    navigate(data.pathname);
  }

  useEffect(() => {
    MicroApp.addDataListener?.(dataListener, true);
    return () => {
      MicroApp.clearDataListener?.()
    }
  }, []);
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
