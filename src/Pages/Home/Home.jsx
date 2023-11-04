import { useState } from "react";
import "./Home.css";
// import Service from "./Service/Service";
import Shape1 from "../../assets/Shape1.png"
import { Achivment } from "./Achivment/Achivment";
import { Portfoilo } from "./Portfoilo/Portfoilo";
import { Blog } from "./Blog/Blog";
import { NavLink } from "react-router-dom";

const Home = () => {
  const images = [
    {
      id: 1,
      image: "https://html.dreamitsolution.net/multilen/industrial/image/slider2.jpg",
    },

    {
      id: 2,
      image: "https://html.dreamitsolution.net/multilen/industrial/image/slider1.jpg",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="Home">
      <div
        className="Hero-Part"
        style={{
          backgroundImage: `url(${images[currentImageIndex].image})`,

        }}
      >
        <div className="Hero-Partwrapper">
          <div className="Hero-PartCaroselleft">
            <div className="Caroselleftblock" onClick={prevImage}>
              {"<"}
            </div>
          </div>
          <div className="Hero-PartContent">
            <span className="Quanlity">
              <h4>We Assure</h4>
            </span>
            <div className="Streight">
              <h1>Strength, Reliablity, and Quality.</h1>
            </div>
            <span className="standpoint">
              <p>
              Rayjay Multinational Company Limited born out of the demand for quality alternative
              within specialties service delivery in the Marine, Oil & Gas, Construction & Exploration
              Sectors
              </p>
            </span>
            <div className="btn">
              <div className="btn1" ><NavLink to="/contact" className="nav-active"> CONTACT US</NavLink>

              </div>
              <div className="btn2" ><NavLink to="/About" className="nav-active">
                LEARN MORE</NavLink>
              </div>
            </div>
          </div>
          <div className="Hero-PartCaroselright">
            <div className="Caroselleftblock" onClick={nextImage}>
              {">"}
            </div>
          </div>
        </div>
      </div>
      <header className='Service-title'>
                    <div className='Service-titlewhat'>
                        <h3>Rayjay Multinational</h3>
                        <h3>Company Limited</h3>
                    </div>
                    <div className='Service-titleimage'>
                        <img src={Shape1} alt="share" />
                    </div>
                    <div className='Service-titletext'>
                        <p>
                        Is born out of the demand for quality alternative
                        within specialties service delivery in the Marine, Oil & Gas, Construction & Exploration
                        Sectors. With her multinational perspective view solving most daring challenges, a
                        100% indigenous company facilitating the local content sphere, Registered corporation
                        in Nigeria with CAC RC: 2621639 and has garner support for infrastructural
                        development in rare-sectional sectors without limitations.
                        </p>
                    </div>
                </header>
      {/* <Service /> */}
      <Achivment />
      <Portfoilo />
      <Blog />
    </div>
  );
};

export default Home;
