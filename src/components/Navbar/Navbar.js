import React from 'react'
import './Navbar.css'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../Context/auth'
const Navbar = () => {
  const [auth,setAuth]=useAuth()
  console.log(auth);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    setAuth(null);
    toast.success("Logout Success");
  };
  return (
    <div className=' navbar_main'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Legacies AI</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mr-10">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Models</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Docs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
        {!auth ? <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li> : 
        <li className="nav-item dropdown">
          <button className="nav-link dropdown-toggle btn btn-outline-primary login" href="#" id="navbarDropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Login
          </button>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/console/key">Console</a></li>
            <li><a className="dropdown-item" onClick={handleLogout}>Signout</a></li>
            
          </ul>
        </li> 
        }
         
         
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
