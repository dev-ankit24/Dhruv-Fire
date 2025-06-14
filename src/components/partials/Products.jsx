import React from 'react'
import data from '../../data'
import { Laptop, Mail, MapPin, Phone } from 'lucide-react'

export default function Products() {
  return (
    <>
    <div className="container">
        <div className="container-fluid ">
            <div className="row m-auto" >
        <h3 className=' text-center mt-5'>Hot <span className='text-danger'>Products</span></h3>

                
                {
                  data.map((item, index)=>{
                    return(
              //         <div className="col-md-3 mt-3  mb-3" key={index}>
              //         <div class="card"  >
              //     <img src={item.img} class="card-img-top" height={220} width={"100%"} alt="..."/>
              //   <div class="card-body">
              //   <p class="card-text text-danger text-center " style={{fontWeight:500}}>{item.name}</p>
              //  </div>
              //  </div>
              //       </div>
                    <div class=" col-md-3 mt-3  mb-3  card-hover position-relative overflow-hidden">
                        <img src={item.img} class="card-img-top" height={100} width={"100%"} alt="..."/>
                        
                        <div class="overlay d-flex align-items-center justify-content-center">
                          <div class="text text-dark fw-bold">{item.name}</div>
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
                    <p>A-1, First Floor, Pehlad Market, Karol Bagh,New Delhi</p>
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
                    <a href="tel:+91 9971522879">+91 9971522879</a>
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
                    <a href="mailto:info@perfectconsultancy.co">info@perfectconsultancy.co</a>
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
