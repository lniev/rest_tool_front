import { Routes, Route,Outlet ,useLocation} from 'react-router-dom';
import './App.css';
import logo from './logo.svg'
const GG = () => {
    console.log('init')
    return (
        <div>子应用 <a href="/rp">sdfad</a><Outlet/></div>
    )

}
function App() {
    // const location = useLocation();
    // console.log('==== location ====', location)
    return (
        <div className="App">
            2342342
            <Routes>
                <Route path="/" element={<GG></GG>}>

                    <Route
                        path="/rp"
                        element={
                            <div>
                                <code>日历</code>
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
