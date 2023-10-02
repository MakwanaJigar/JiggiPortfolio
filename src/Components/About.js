import React from 'react';

const About = () => {
  return (
    <>
      
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        About US
      </h1>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="imgsections"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "8px solid black",
          }}
        >
          <img src="https://images.pexels.com/photos/18024374/pexels-photo-18024374/free-photo-of-man-standing-in-water-with-torch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        </div>

        <div className="biosection" style={{}}>
          <div className="name">
            <h2
              className="text-light fw-bold"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Jigar Makwana
            </h2>
            <h6 className="text-light"style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}>
              <span
                style={{
                  color: "#dc965a",
                  fontWeight: "bold",
                  color: "#dc965a",
                  fontWeight: "bold",
                  textAlign:'center'
                }}
              >
              
              </span>
             
                Android Developer
            <span style={{color: "#dc965a", fontWeight:'bold'}}>&
            </span>
                Web Developer
              </h6>
            <p className="text-secondary" style={{
              }}>
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores. My passion is to design digital user
              experiences through the bold interface and meaningful
              interactions. Check out my Portfolio
            </p>
          </div>

          {/* ..........MY DETAILS .............. */}

          <div className="MyDetails d-flex" style={{}}>
            <div className="box-1">
              <p className="fw-bold text-light">
                Birthdat <span> | </span>{" "}
                <span className="text-secondary">5th february 1999</span>
              </p>
              <p className="fw-bold text-light">
                Age <span> | </span>{" "}
                <span className="text-secondary">24 Yr</span>
              </p>
              <p className="fw-bold text-light">
                Residence <span> | </span>{" "}
                <span className="text-secondary">India</span>
              </p>
              <p className="fw-bold text-light">
                Address <span> | </span>{" "}
                <span className="text-secondary">Mehsana,Gujarat</span>
              </p>
            </div>

            <div className="box-2">
              <p className="fw-bold text-light">
                Email <span> | </span>{" "}
                <span className="text-secondary">
                  jigar317.certification@gmail.com
                </span>
              </p>
              <p className="fw-bold text-light">
                Phone <span> | </span>{" "}
                <span className="text-secondary">+91 85117 21552</span>
              </p>
              <p className="fw-bold text-light">
                Freelance <span> | </span>{" "}
                <span className="text-secondary">Not Available</span>
              </p>
            </div>
          </div>

          {/* .....................Download CV Button........................ */}

          <div className="btn " style={{ backgroundColor: "#dc965a" }}>
            Download CV
          </div>
        </div>
      </div>

      
    </>
  );
}

export default About;
