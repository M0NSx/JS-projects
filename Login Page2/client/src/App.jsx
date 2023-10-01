import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Login from './login'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Signup />}></Route>
                <Route path='/login' element={<Login />}/>
                <Route path="/dashboard" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
