import React from 'react'

function Modal({ele}) {
  return (
    
    <div className="modal fade" id={`popup${ele.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">{ele.rocket_name}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div id={`carousel${ele.id}`} class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={ele.flickr_images[0]} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={ele.flickr_images[1]} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target={`#carousel${ele.id}`} data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target={`#carousel${ele.id}`} data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
      <div className="modal-footer">
        <div className='row'>
            <div className='col-sm-4'>
                <h4>Country</h4>
                <p>{ele.country}</p>
            </div>
            <div className='col-sm-4'>
                <h4>Height</h4>
                <p>{ele.height.feet} Feet</p>
            </div>
            <div className='col-sm-4'>
                <h4>Diameter</h4>
                <p>{ele.diameter.meters} Meters</p>
            </div>
            <div className='col-sm-4'>
                <h4>Mass</h4>
                <p>{ele.mass.kg} Kg</p>
            </div>
            <div className='col-sm-4'>
                <h4>Active</h4>
                <p>{ele.active?`YES` : `NO`}</p>
            </div>
            <div className='col-sm-4'>
                <h4>First Flight</h4>
                <p>{ele.first_flight}</p>
            </div>
            <div className='col-sm-4'>
                <h4>Reusable</h4>
                <p>{ele.first_stage.reusable?`YES`:`NO`}</p>
            </div>
            <div className='col-sm-4'>
                <h4>Company</h4>
                <p>{ele.company}</p>
            </div>
            <div className='col-sm-4'>
                <h4>Cost per Launch</h4>
                <p>{ele.cost_per_launch}</p>
            </div>
        </div>
        <p>{ele.description}</p>
        <a href={ele.wikipedia} target="_blank" ><button type="button" className="btn btn-primary">Know More</button></a>
      </div>
    </div>
  </div>
</div>
  )
}

export default Modal