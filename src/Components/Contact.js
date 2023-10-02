import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container row mt-5 mb-5">
       
        <div className="form col-md-6">
          <form class="row g-3 container">
            <h3 className="text-light fw-bold mb-5"> 
              Contact Us
            </h3>
            <div class="col-md-6">
              <input
                type="text"
                class="form-control bg-secondary text-light"
                placeholder="Name"
                id="inputEmail4"
              />
            </div>
            <div class="col-md-6">
              <input
                type="text"
                class="form-control bg-secondary text-light"
                placeholder="Email"
                id="inputPassword4"
              />
            </div>
            <div class="col-12">
              <input
                type="text"
                class="form-control bg-secondary text-light"
                id="inputAddress"
                placeholder="subject"
              />
              
            </div>

            <div class="form-floating col-12">
              <textarea
                class="form-control bg-secondary text-light"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: "100px" }}
              ></textarea>
              <label for="floatingTextarea2">Comments</label>
            </div>
            <div class="col-12">
              <button type="submit" class="btn" style={{backgroundColor:'#dc965a',borderRadius:'none'}}>
                SEND YOUR MESSAGE
              </button>
            </div>
          </form>
        </div>

        <div className="textside col-md-6 mt-5">

            <div className="h4 text-light fw-bold" style={{textAlign:'center',justifyContent:'center'}}>
              Get in touch
            </div>
            <div className="p text-secondary" style={{textAlign:'center',}}>
            Always available for freelancing if the right project <br /> comes along, Feel free to contact me.
            </div>
            <div className="address d-flex mt-5" >
              <div className="btn icon" disabled><i className="fa fa-map" style={{color:'#dc965a',justifyContent:'center',fontSize:'50px',alignItems:'center',display:'flex'}}></i></div>
              <p className="text-secondary ms-4" style={{textAlign:'center'}}>
                12-harshidhh society radhanpur road, <br />mehsana-384002<br />Gujarat,India
              </p>
            </div>

            <div className="address d-flex mt-2" style={{alignItems:'center'}}>
              <div className="btn icon" disabled><i className="fa fa-envelope " style={{color:'#dc965a',justifyContent:'center',fontSize:'50px',alignItems:'center',display:'flex'}}></i></div>
              <a className="text-secondary ms-5"  href='mailto:jigar317.certification@gmail.com' style={{alignItems:'center'}}>
                jigar317.certification@gmail.com
              </a>
            </div>
            <div className="address d-flex mt-5" style={{alignItems:'center'}}>
              <div className="btn icon ms-2" disabled><i className="fa fa-mobile " style={{color:'#dc965a',justifyContent:'center',fontSize:'50px',alignItems:'center',display:'flex'}}></i></div>
              <a className="text-secondary ms-5" href='tel:8511721552' style={{alignItems:'center'}}>
                +91 8511721552
              </a>
            </div>

        </div>


      </div>


    </div>
  );
};

export default Contact;
