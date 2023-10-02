import React from 'react';

const Portfolio = () => {
  return (
    <>


    <div style={{width:'100vw',height:'100vh',backgroundColor:'black'}}>
      
      
      <div className="">

      <h1 className='text-light fw-bold'style={{textAlign:'center'}}>My Portfolio</h1>
      <p className='text-secondary fw-bold' style={{textAlign:'center'}}>
      I design and develop services for customers of all sizes, specializing in creating stylish,<br/> modern websites, web services and online stores.
      </p>
      </div>
    

    {/* .....................NAVBAR......................... */}

    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link text-light" aria-current="page" href="#">All</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" aria-current="page" href="#">Branding</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" aria-current="page" href="#">Photography</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" aria-current="page" href="#">Fashion</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" aria-current="page" href="#">Product</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


</div>
    
    </>
  );
}

export default Portfolio;
