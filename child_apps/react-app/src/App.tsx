import Router from './router/router';
import './App.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  function dataListener(data) {
    console.log('huoqu ',data)
    navigate(data.pathname);
  }

  useEffect(() => {
    window.microApp.addDataListener(dataListener, true);
    return () => {
      window.microApp.clearDataListener()
    }
  }, []);
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
