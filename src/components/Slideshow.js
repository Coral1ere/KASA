import VectorFlecheGauche from "../assets/VectorLeft.png";
import VectorFlecheDroite from "../assets/VectorRight.png";
import { useState } from "react";
import "../data/logements.json";
import "../style/slideshow.css";

export default function Slideshow({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    const images = pictures.length;
    setCurrentSlide((currentSlide + 1) % images);
  };

  function prev() {
    const images = pictures.length;
    let current = currentSlide;

    current -= 1;
    if (current < 0) {
      current = images - 1;
    }

    setCurrentSlide(current);
  }

  if (pictures.length > 1) {
    return (
      <>
        <div className="containerSlideshow">
          <div className="slider">
            {pictures.map((picture, index) => (
              <div
                className="slidesDisp"
                key={index}
                hidden={currentSlide === index ? false : true}
              >
                <div className="numbertext">
                  {index + 1} / {pictures.length}
                </div>

                <img src={picture} alt="" style={{ width: "100%" }} />
              </div>
            ))}

            <div className="flecheGauche" onClick={prev}>
              <img src={VectorFlecheGauche} alt="" />
            </div>
            <div className="flecheDroite" onClick={next}>
              <img src={VectorFlecheDroite} alt="" />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="containerSlideshow">
          <div className="slider">
            {pictures.map((picture, index) => (
              <div
                className="slidesDisp"
                hidden={currentSlide === index ? false : true}
              >
                <div className="numbertext">
                  {index + 1} / {pictures.length}
                </div>

                <img src={picture} alt="" style={{ width: "100%" }} />
              </div>
            ))}

            <div className="flecheGauche" flecheGauche="false"></div>
            <div className="flecheDroite" flecheDroite="false"></div>
          </div>
        </div>
      </>
    );
  }
}
