import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Gallery from './components/Gallery';
import Event from './components/Event';
import Wedding from './components/Wedding';
import Sportevent from './components/Sportevent';
import Bdparty from './components/Bdparty';
import Booking from './components/Booking';
import Myaccount from './components/Myaccount';
import Account from './components/Account';
import Password from './components/Password';
import Mybooking from './components/MyBooking';
import Error from './components/Error';
import Dashboard from './components/Admin/Dashboard';
import Login from './components/Admin/Login';
import User from './components/Admin/User';
import Homes from './components/Admin/Home';
import Eventpost from './components/Admin/Eventpost'
import Category from './components/Admin/Category'
import Bookedevent from './components/Admin/Bookedevent'

function App() {
  const location = useLocation()
  console.log(location)

  const admin = sessionStorage.getItem("admin")
  console.log(admin)

  return (
    <>
      {!admin &&
        <>
          {location.pathname === "/admin" || location.pathname === "/admin/login" ? null : <Header />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/event" element={<Event />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/sportevent" element={<Sportevent />} />
            <Route path="/bdparty" element={<Bdparty />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path='contact' element={<Contact />} />
            <Route path='signin' element={<Signin />} />
            <Route path='signup' element={<Signup />} />
            <Route path='myaccount' element={<Myaccount />} />
            <Route path='account' element={<Account />} />
            <Route path='changepassword' element={<Password />} />
            <Route path='book' element={<Mybooking />} />
            <Route path='*' element={<Error />} />
            <Route path='/admin/' element={<Dashboard />} />
            <Route path='/admin/login' element={<Login />} />
          </Routes>
          {location.pathname === "/admin" || location.pathname === "/admin/login" ? null : <Footer />}
        </>
      }

      {
        admin &&
        <Routes>
          <Route path='/admin/' element={<Dashboard />} >
            <Route path='' element={<Homes />} />
            <Route path='userlist' element={<User />} />
            <Route path='eventpost' element={<Eventpost />} />
            <Route path='bookedevent' element={<Bookedevent />} />
            <Route path='category' element={<Category />} />
          </Route>
        </Routes>
      }
    </>
  );
}

export default App;
