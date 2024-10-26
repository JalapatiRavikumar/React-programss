import Home from './Home'
import About from './About'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Contact from './Contact'
import Login from './Login'



function Header() {
    return (
        <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/about">About</Link> </li>
            <li> <Link to="/contact">Contact Us</Link> </li>
            <li> <Link to="/login">Login</Link> </li>
        </ul>
    )
}
function App() {
    return (

        <>
            <BrowserRouter>
                <Header />


                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
        // <>
        //     <Home />
        //     <About />
        // </>
    )
}
export default App