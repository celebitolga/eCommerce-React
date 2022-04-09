import "./index.scss";

import { Link } from "react-router-dom";

import Price from "../../Price";
import CloseSvg from "../../Svg/close";

// context
import { useBasket } from "../../../context/BasketContext";

// urls
import urls from "../../../urls";

function MiniBasket({ handleMiniBasketShowButton }) {
  const { items, removeFromBasket, miniBasketShow } = useBasket();

  const total = items.reduce((acc, obj) => acc + obj.price * obj.quantity, 0);

  const handleRemoveFromBasket = (e, item) => {
    e.preventDefault();

    removeFromBasket(item);
  };

  return (
    <>
      <div className={`mini-basket ${miniBasketShow && "-active"}`}>
        <div className="mini-basket__wrapper">
          <div className="mini-basket__top">
            <h3 className="mini-basket__top-title">My Cart</h3>
            <span className="mini-basket__top-length">
              ({items?.length}) items
            </span>
            <button
              className="mini-basket__top-close"
              onClick={() => handleMiniBasketShowButton(false)}
            >
              <CloseSvg height="32px" width="32px" />
            </button>
          </div>

          <div className="mini-basket__items">
            {items?.length < 1 ? (
              <p className="-empty">You have not any items in your basket.</p>
            ) : (
              <ul>
                {items?.map((item, key) => (
                  <li key={key}>
                    <Link
                      className="mini-basket__items__item"
                      to={`${urls.productUrls.BASE}/${item.id}`}
                    >
                      <div className="mini-basket__items__item__top">
                        {item.photos[0] && (
                          <img
                            src={item.photos[0]}
                            alt={item.title}
                            loading="lazy"
                            className="mini-basket__items__item-img"
                          />
                        )}
                        <div className="mini-basket__items__item-att">
                          <h5 className="-title">{item.title}</h5>
                          <span className="-quantity">
                            Quantity: <b>{item.quantity}</b>
                          </span>
                          <div className="price">
                            {item.retailPrice > item.price && (
                              <span className="price-retail">
                                <Price>{item.retailPrice}</Price>
                              </span>
                            )}
                            <span className="price-price">
                              <Price>{item.price}</Price>
                            </span>
                          </div>
                        </div>
                        <button
                          className="mini-basket__items__item-delete"
                          onClick={(e) => handleRemoveFromBasket(e, item)}
                        >
                          <CloseSvg height="28px" width="28px" />
                        </button>
                      </div>
                      <div className="mini-basket__items__item__bottom">
                        <span className="-total">
                          <b>Total:</b>{" "}
                          <Price>{item.price * item.quantity}</Price>
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mini-basket__bottom">
            {items?.length > 0 && (
              <div className="mini-basket__bottom-total">
                <b>Sub Total: </b>
                <span>
                  <Price>{total}</Price>
                </span>
              </div>
            )}
            <Link
              className="mini-basket__bottom-link"
              to={urls.basketUrls.BASE}
            >
              Go To Basket
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MiniBasket;
