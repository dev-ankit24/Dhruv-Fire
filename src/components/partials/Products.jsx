import React from 'react'
import data from '../../data'

export default function Products() {
  return (
    <>
    <div className="container">
        <div className="container-fluid">
            <div className="row">
                
                {
                  data.map((item, index)=>{
                    return(
                      <div className="col-md-3 mt-3" key={index}>
                      <div class="card" style={{width: "18rem"}}>
                  <img src={item.img} class="card-img-top" height={230} width={100} alt="..."/>
                <div class="card-body">
                <p class="card-text">{item.name}</p>
               </div>
               </div>
               </div>

                    )
                  })
                }
                
            </div>
        </div>
    </div>
    </>
  )
}
