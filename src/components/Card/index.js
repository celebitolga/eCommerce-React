import "./index.scss";

import { Link } from "react-router-dom";

import ShoppingBagSVG from "../Svg/shoppingBag";
import PlusSVG from "../Svg/plus";

import { useBasket } from "../../context/BasketContext";

// urls
import urls from "../../urls";
import Price from "../Price";

function Card({ product }) {
  const { addToBasket, setMiniBasketShow } = useBasket();

  const handleAddToBasket = (e) => {
    e.preventDefault();
    addToBasket(product);

    setMiniBasketShow(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="product-card">
      <Link
        to={`${urls.productUrls.BASE}/${product.id}`}
        className="product-card__link"
      >
        <div className="product-card__images">
          <img
            src={product.photos[0]}
            alt={product.title}
            loading="lazy"
            className={`product-card__images-img ${
              product.photos[1] && "-first"
            }`}
          />

          {product.photos[1] && (
            <img
              src={product.photos[1]}
              alt={product.title}
              loading="lazy"
              className="product-card__images-img -second"
            />
          )}
        </div>

        <h3 className="product-card-title">{product.title}</h3>

        <div className="product-card__bottom">
          <button className="product-card-button" onClick={handleAddToBasket}>
            <ShoppingBagSVG />
            <PlusSVG />
          </button>

          <div className="product-card__price">
            <div className="-retail">
              {product.retailPrice > product.price && (
                <Price>{product.retailPrice}</Price>
              )}
            </div>

            <div className="-price">
              <Price>{product.price}</Price>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
