import { Routes, Route,Outlet ,useLocation} from 'react-router-dom';
import './App.css';
import logo from './logo.svg'
function App() {
    const location = useLocation();
    console.log('==== location ====', location)
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<div>子应用   <Outlet /></div>}>
                    {/*<Route path="" element={<div>children2</div>} />*/}
                    <Route
                        path="/rp"
                        element={
                            <div>
                                <code>2312</code>
                                <img src={logo} height="100px" alt="11" />
                            </div>
                        }
                    />
                </Route>

            </Routes>
        </div>
    );
}

export default App;
