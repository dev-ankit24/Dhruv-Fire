import React from 'react'
import data from '../../data'
import { Laptop, Mail, MapPin, Phone } from 'lucide-react'

export default function Products() {
  return (
    <>
    <div className="container">
        <div className="container-fluid m-auto">
            <div className="row m-auto" >
        <h3 className=' text-center mt-5'>Hot <span className='text-danger'>Products</span></h3>

                
                {
                  data.map((item, index)=>{
                    return(
                      <div className="col-md-3 mt-3 m-auto" key={index}>
                      <div class="card" style={{width: "18rem"}}>
                  <img src={item.img} class="card-img-top" height={230} width={100} alt="..."/>
                <div class="card-body">
                <p class="card-text text-danger text-center " style={{fontWeight:500}}>{item.name}</p>
               </div>
               </div>
               </div>

                    )
                  })
                }
                
            </div>

            {/* social  */}
           
        </div>
    </div>
    <div className="socil-main1">
    <div className="row social-row mt-5">
            <div className="col-md-3">
            <div className="social-main">
              <div className="social-parent">
                 <div className="social-icon">
               <i>  <MapPin /></i>
                 </div>
                  <div className="social-name">
                    <h5>Location</h5>
                    <p>H.No.214A, Pitampura New Delhi-110034</p>
                  </div>
              </div>
            </div>
            </div>

            <div className="col-md-3">
            <div className="social-main">
              <div className="social-parent">
                 <div className="social-icon">
                <i> <Phone /></i>
                 </div>
                  <div className="social-name">
                    <h5>Mobile</h5>
                    <a href="tel:++917291993667">+91 7291993667</a>
                  </div>
              </div>
            </div>
            </div>

            <div className="col-md-3">
            <div className="social-main">
              <div className="social-parent">
                 <div className="social-icon">
                <i> <Mail /></i>
                 </div>
                  <div className="social-name">
                    <h5>Email</h5>
                    <a href="mailto:jmdarun2020@gmail.com">jmdarun2020@gmail.com</a>
                  </div>
              </div>
            </div>
            </div>

            <div className="col-md-3">
            <div className="social-main">
              <div className="social-parent">
                 <div className="social-icon">
               <i className='text-center '>  <Laptop /></i>
                 </div>
                  <div className="social-name">
                    <h5>Web</h5>
                     <a href="http://www.jmd.com" target="_blank" rel="noopener noreferrer">www.jmdenterprises.com</a>
                  </div>
              </div>
            </div>
            </div>

            
           </div>
    </div>
    </>
  )
}
