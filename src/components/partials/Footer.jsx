import React from 'react'
import { Laptop, Mail, MapPin, Phone } from 'lucide-react'
export default function Footer() {
  return (
    <>
     <footer className=" footer text-light py-4">
      <div className="container">
        <div className="row">
          {/* Address Section */}
          <div className="col-md-4">
            <h5>Quick Contact </h5>
            <p> <MapPin  className='me-1'/>A-1, First Floor, Pehlad Market, Karol Bagh,New Delhi</p>
        <p>    <Mail className='me-1'/> <a href="mailto:info@perfectconsultancy.co">info@perfectconsultancy.co</a> </p>
         <p>  <Phone className='me-1'/> <a href="tel:+91 9971522879">+91 9971522879</a> </p>
          </div>

          {/* General Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Home</a></li>
              <li><a href="#" className="text-light">Services</a></li>
              <li><a href="#" className="text-light">About</a></li>
              <li><a href="#" className="text-light">Contact</a></li>
            </ul>
          </div>

          {/* Query Form */}
          <div className="col-md-4">
            <h5>Send a Query</h5>
            <form>
              <input type="text" className="form-control mb-2" placeholder="Name" />
              <input type="email" className="form-control mb-2" placeholder="Email" />
              <input type="text" className="form-control mb-2" placeholder="Phone" />
              <input type="text" className="form-control mb-2" placeholder="Country" />
              <textarea className="form-control mb-2" placeholder="Message"></textarea>
              <button className="btn btn-danger w-100">Submit</button>
            </form>
          </div>
        </div>

        {/* Language Selection */}
        {/* <div className="row mt-3 text-center">
          <div className="col">
            <label className="me-2">Select Language:</label>
            <select className="form-select d-inline w-auto">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
        </div> */}
        <hr />
           <div className="row mt-3 text-center">
          <div className="col">
            <p className="mb-0">&copy; 2025 Your Company. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
    </>
  )
}
