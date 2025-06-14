import React from 'react'
import slider11 from "../../asserts/image/slider11.jpg"
import slider2 from "../../asserts/image/sldr2.jpg"
import slider4 from "../../asserts/image/slider-img3.png"
import slider5 from "../../asserts/image/slider-img4.jpg"
export default function Slider() {
  return (
  <>
  
  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slider11} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={slider2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={slider4} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={slider5} class="d-block w-100" alt="..."/>
    </div>
    
  </div>
  <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon bg-danger " aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon bg-danger"  aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </>
  )
}
