import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import "./index.scss";

// components
import Price from "../../components/Price";

// api
import { fetchProduct } from "../../api";

// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// context
import { useBasket } from "../../context/BasketContext";

// initial values
const INITIAL_STATE_VALUES = {
  data: {},
  loading: true,
  error: {
    isError: false,
    message: "",
  },
};

function ProductDetail() {
  const { pathname } = useLocation();

  const { product_id } = useParams();
  const { addToBasket, setMiniBasketShow } = useBasket();

  const [data, setData] = useState(INITIAL_STATE_VALUES.data);
  const [loading, setLoading] = useState(INITIAL_STATE_VALUES.loading);
  const [error, setError] = useState(INITIAL_STATE_VALUES.error);

  const handleAddToBasket = () => {
    addToBasket(data);

    setMiniBasketShow(true);
    
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getProduct = async () => {
    try {
      const data = await fetchProduct(product_id);

      setData(data);
    } catch (error) {
      setError({ isError: true, message: error });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setData(INITIAL_STATE_VALUES.data);
    setLoading(INITIAL_STATE_VALUES.loading);
    setError(INITIAL_STATE_VALUES.error);

    getProduct();
  }, [pathname]);

  if (loading) return "Loading...";

  if (error.isError) return "An error has occurred: ";

  return (
    <div className="product-detail">
      <div className="product-detail__wrapper">
        <div className="product-detail__carousel">
          {data?.photos?.length > 0 ? (
            <Carousel infiniteLoop centerSlidePercentage>
              {data?.photos?.map((photo, key) => (
                <img src={photo} alt={data.title} key={key} />
              ))}
            </Carousel>
          ) : (
            "There is no photos"
          )}
        </div>

        <div className="product-detail__info">
          <h1 className="product-detail__info-title">{data.title}</h1>

          <div className="product-detail__info-price">
            <div className="-retail">
              {data.retailPrice > data.price && (
                <Price>{data.retailPrice}</Price>
              )}
            </div>

            <div className="-price">
              <Price>{data.price}</Price>
            </div>
          </div>

          <p className="product-detail__info-description">{data.description}</p>

          <button
            onClick={handleAddToBasket}
            className="product-detail__info-button"
          >
            Add To Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
