import Home from "./components/home/Home";
import Login from "./Lgin/Login";
import{Routes, Route} from 'react-router-dom'
import Register from "./Lgin/Register";
import Gallery from "./components/Navbar/Gallery";
import Locations from "./components/Navbar/Locations";
import Booking from "./components/Bookings/Booking";
function App() {
  return (
    <div >
    <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path="/login"  element={<Login />}  />
      <Route  path="/register" element={<Register />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route  path="locations" element={<Locations />} />
      <Route  path="/bookings"  element={<Booking/>}/>
    </Routes>
   
    </div>
  );
}

export default App;
