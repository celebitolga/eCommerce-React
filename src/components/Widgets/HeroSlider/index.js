import { Link } from "react-router-dom";
import "./index.scss";

import { Splide, SplideSlide } from "@splidejs/react-splide";

function HeroSlider({ sliderİtems }) {
  return (
    sliderİtems?.items?.length > 0 && (
      <section className="hero-slider">
        <div className="hero-slider__wrapper">
          <Splide
            options={{
              rewind: true,
              gap: "1rem",
            }}
          >
            {sliderİtems.items.map((item, key) => (
              <SplideSlide key={key}>
                <div className="slide-item">
                  {item?.link !== "" ? (
                    <Link to={item?.link}>
                      <img src={item?.image} alt={item?.alt} />
                    </Link>
                  ) : (
                    <img src={item?.image} alt={item?.alt} />
                  )}
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>
    )
  );
}

export default HeroSlider;
