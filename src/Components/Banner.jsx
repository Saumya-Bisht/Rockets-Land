import React from 'react'

function Banner() {
  return (
    <div>
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://sxcontent9668.azureedge.us/cms-assets/assets/STARSHIP_Testflight_DESKTOP_2b3bea613a.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://sxcontent9668.azureedge.us/cms-assets/assets/Arab_BADR_8_curbh_IMG_6309_desktop_bb9a2043d0.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://sxcontent9668.azureedge.us/cms-assets/assets/Axiom_2_Splashdown_Crew_Website_000729053023_Desktop_2_3b35df56e4.JPG" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Banner