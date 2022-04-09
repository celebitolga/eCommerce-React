import "./index.scss";

import { Splide, SplideSlide } from "@splidejs/react-splide";

function Discovery() {
  return (
    <div className="discovery">
      <div className="discovery__wrapper">
        <div className="discovery__slider">
          <Splide
            options={{
              rewind: true,
              gap: "1rem",
            }}
          >
            <SplideSlide>
              <div className="discovery__slider-item">
                <img src="https://via.placeholder.com/500x500" alt="" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="discovery__slider-item">
                <img src="https://via.placeholder.com/500x500" alt="" />
              </div>
            </SplideSlide>
          </Splide>
        </div>
        <div className="discovery__photos">
          <img src="https://via.placeholder.com/500x500" alt="" />
          <img src="https://via.placeholder.com/500x500" alt="" />
          <img src="https://via.placeholder.com/500x500" alt="" />
          <img src="https://via.placeholder.com/500x500" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Discovery;
