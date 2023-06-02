import React from 'react'
import  img from "./5842a770a6515b1e0ad75afe.png"

function Navbar() {
  return (
    <div>
        <nav class="navbar " data-bs-theme="dark" style={{backgroundColor:"#e3f2fd"}}>
  <div class="container">
    <a class="navbar-brand" href="#">
      <img  src={img} alt="Bootstrap" width="200" height="45"/>
    </a>
  </div>
</nav>
    </div>
  )
}

export default Navbar