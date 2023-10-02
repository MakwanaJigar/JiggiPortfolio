import React from "react";
import HomeVideo from "../Assets/Video/HomeVideo-2.mp4";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="overlay"></div>
        <video src={HomeVideo} autoPlay loop muted />
        <div className="content">
          <h3 className="text-light fw-bold">Hi i'm</h3>
          <h1 className="text-light MyName">
          Jigar Makwana
            {/* <Typewriter
              words={["Jigar Makwana"]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            /> */}
          </h1>

          <div className="buttons mt-5" >
        <div className="btn btn-light homebtn"> Web Developer</div>
        <div className="btn btn-light homebtn ms-2"> Android Developer</div>
          </div>

            

        <div className="socialmedia">
              <div className="btn btn-light homebtn ms-3">
                <a href="https://www.instagram.com/makwanajigar15/">
                <i className="fa fa-instagram"></i>
                </a>
              </div>
              <div className="btn btn-light homebtn ms-3">
                <a href="https://www.facebook.com/jigar.makwana.9406">
                <i className="fa fa-facebook"></i>
                </a>
              </div>
              <div className="btn btn-light homebtn ms-3">
                <a href="https://www.linkedin.com/in/makwana-jigar-0a5b0a243/">
                <i className="fa fa-linkedin"></i>
                </a>
              </div>
              <div className="btn btn-light homebtn ms-3">
                <a href="https://github.com/">
                <i className="fa fa-github"></i>
                </a>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
