


function Search(prop) {
   
  return (
    <div className='col-sm-6'>
            <div className="card" key={prop.ele.id}>
           <img src={prop.ele.flickr_images[1]} className="card-img-top" alt="..."/>
           <div className="card-body">
             <h5 className="card-title">{prop.ele.rocket_name}</h5>
             <p className="card-text">This is <strong>{prop.ele.rocket_name}</strong>. If you want to know more about this rocket, then just click on "More Details" button shown below.</p>
             <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#popup${prop.ele.id}`}>Get More Details</a>
           </div>
         </div>
         </div>
  )
}

export default Search