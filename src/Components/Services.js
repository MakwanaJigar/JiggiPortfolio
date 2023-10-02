import React from "react";

const Services = () => {
  return (
    <>
      <div
        className="container"
        style={{ height: "100vh", width: "80vw",
        backgroundColor:'black',marginBottom:'10vh'}}
      >
        <div className="container" style={{alignItems:'center'}}>
          <h1
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            My Services
          </h1>
          <p className="text-light mt-5" style={{ textAlign: "center" }}>
            I design and develop services for customers of all sizes,
            specializing in creating stylish,
            <br /> modern websites, web services and online stores.
          </p>
        </div>

        {/* .........................card Section--1...................... */}

        <div
          className="container row "
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div
            className="card col-md-3"
            style={{
              backgroundColor: "#878e99",
              width: "25vw",
              height: "50vh",
            }}
          >
            <div className="h1 m-3" style={{ color: "#dc965a" }}>
              <i class="fa-solid fa-computer"></i>
            </div>
            <h4 className="text-light m-3">Web Development</h4>
            <p className="m-3 text-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
              aliquid aut nemo, nam perspiciatis ratione suscipit dolorem
              reiciendis maiores nobis beatae necessitatibus,
            </p>
          </div>

          <div
            className="card col-md-3"
            style={{
              backgroundColor: "#878e99",
              width: "25vw",
              height: "50vh",
            }}
          >
            <div className="h1 m-3" style={{ color: "#dc965a" }}>
              <i class="fa-solid fa-mobile-screen"></i>
            </div>
            <h4 className="text-light m-3">Android Development</h4>
            <p className="m-3 text-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
              aliquid aut nemo, nam perspiciatis ratione suscipit dolorem
              reiciendis maiores nobis beatae necessitatibus,
            </p>
          </div>

          <div
            className="card col-md-3 "
            style={{
              backgroundColor: "#878e99",
              width: "25vw",
              height: "50vh",
            }}
          >
            <div className="h1 m-3" style={{ color: "#dc965a" }}>
              <i class="fa-solid fa-computer"></i>
            </div>
            <h4 className="text-light m-3">Web Design</h4>
            <p className="m-3 text-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
              aliquid aut nemo, nam perspiciatis ratione suscipit dolorem
              reiciendis maiores nobis beatae necessitatibus,
            </p>
          </div>
        </div>
      </div>

      {/* .........................card Section--2...................... */}

      <div
        className="container mb-5"
        style={{ height: "80vh", width: "100vw",
           display: "flex",
           backgroundColor:'black',
           justifyContent: "space-evenly",
           alignItems: "center",
          }}
      >
        <div
          className="container row "
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "15vh",
          }}
        >
           <h4 className="text-light" style={{textAlign:'center'}}>Experience</h4>
          <div
            className="card col-md-3 bg-dark"
            style={{
              width: "25vw",
              height: "50vh",
            }}
          >
            <div className="h1 m-3" style={{ color: "#dc965a" }}>
              <i class="fa-solid fa-computer"></i>
            </div>
            <p className="m-3 text-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
              aliquid aut nemo, nam perspiciatis ratione suscipit dolorem
              reiciendis maiores nobis beatae necessitatibus,
            </p>
          </div>
          <h4 className="text-light " style={{textAlign:'center'}}>Experience</h4>
          <div
            className="card col-md-3"
            style={{
              backgroundColor: "#878e99",
              width: "25vw",
              height: "50vh",
            }}
          >
            <div className="h1 m-3" style={{ color: "#dc965a" }}>
              <i class="fa-solid fa-mobile-screen"></i>
            </div>
            <h4 className="text-light m-3">Android Development</h4>
            <p className="m-3 text-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
              aliquid aut nemo, nam perspiciatis ratione suscipit dolorem
              reiciendis maiores nobis beatae necessitatibus,
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
