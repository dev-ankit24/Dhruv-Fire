import React from 'react'
import { Phone,Mail} from 'lucide-react'
import logo from "../asserts/image/home/logo.png"
export default function Navbar() {
  return (
    <>
    
  <div className="container nav-cont">
    <div className="contianer-fluid ">
    <div className="navbar-top ">
       <div className="nav-logo">
        {/* <h4>My Website</h4> */}
        <img src={logo} alt="" height={90} width={100} />
       </div>
       <div className="nav-con">
       <span> <Phone color='red'className='me-2' /><a href="tel:+91 9971522879" className='me-5'>+91 9971522879</a></span>
        <span> <Mail color='red ' className='me-2' /><a href="mailto:info@perfectconsultancy.co">info@perfectconsultancy.co</a></span>

       </div>
    </div>

    
    </div>
  </div>
  <div className="navbar-list">
   <div className="container">
    <div className="container-fluid">
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
   <div className="toggle-mob ">
   <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon  "></span>
      
    </button>
    <form class="d-flex " role="search">
        <input class="form-control  " type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn bg-danger text-light" type="submit">GO</button>
      </form>
   </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">About US</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul class="dropdown-menu">
            <li class="dropdown-submenu">
              <a class="dropdown-item dropdown-toggle" href="/">Hose Pipes</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/">Canvas Hose Pipe</a></li>
                <li><a class="dropdown-item" href="/">RRL Hose Pipe</a></li>
              </ul>
            </li>
            <li><hr class="dropdown-divider"/></li>

            <li class="dropdown-submenu">
              <a class="dropdown-item dropdown-toggle" href="/">Fire Extinguishers</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/">ABC Fire Extinguishers</a></li>
                <li><a class="dropdown-item" href="/">Clean Agent Fire Extinguishers</a></li>
                <li><a class="dropdown-item" href="/">Co2 Fire Extinguisher</a></li>
                <li><a class="dropdown-item" href="/"> Fire Ball Extinguishers</a></li>
               <button className='btn btn-danger text-light w-100'>View All</button>
              </ul>
            </li>
            <li><hr class="dropdown-divider"/></li>

            <li class="dropdown-submenu">
              <a class="dropdown-item dropdown-toggle" href="/">Fire Brigade Inlet Connections</a>
              <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/">2 Way FIre Brigade Inlet Connections</a></li>
              <li><a class="dropdown-item" href="/">4 Way FIre Brigade Inlet Connections</a></li>
                
              </ul>
            </li>

            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Fire Hydrant Valves</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Fire Alarm Control Panel</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Fire Hose</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Fire  Hose Delivery Couplings</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Fire Sprinkler Head</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Fire Alarm System</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Fire Alarm Hooter</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">LED Double Beam Exit Light</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Sprinkler Guard</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Fire Blankets</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Fire Alarm Hooter</a></li>
          </ul>
        </li>


        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu">
            
            <li><a class="dropdown-item" href="/">Fire Extinguishers</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Fire Fighting Vehicle Rental Servies</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Fire Extinguisher Maintenance</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Fire Safety Taining Services</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Fire Sprinkler Head</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Fire Alarm System</a></li>
           
          </ul>
        </li>

        

        <li class="nav-item">
          <a class="nav-link " aria-disabled="true">Certificates</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-disabled="true">Current Jobs </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-disabled="true">Contact US</a>
        </li>
      </ul>
      <div className="serch-mob">
      <form class="d-flex" role="search">
        <input class="form-control " type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn bg-danger text-light" type="submit">GO</button>
      </form>
      </div>
    </div>
  </div>
    </nav>
    </div>
   </div>
  </div>


    </>
  )
}
