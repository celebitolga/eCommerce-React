import { useState, useEffect } from "react";

import { Link, useNavigate, createSearchParams } from "react-router-dom";

import "./index.scss";

// components
import Price from "../../components/Price";
import AddressForm from "../../components/AddressForm";

// context
import { useBasket } from "../../context/BasketContext";
import { useAuth } from "../../context/AuthContext";

// api
import { postOrder } from "../../api";

// urls
import urls from "../../urls";

function Basket() {
  const navigate = useNavigate();

  const { items, removeFromBasket, decreaseItem, increaseItem, emptyBasket } =
    useBasket();
  const { loggedIn, user } = useAuth();

  const [showAddressForm, setShowAddressForm] = useState(false);

  const totalDiscount = items.reduce((acc, obj) => {
    if (obj.retailPrice > obj.price) {
      return acc + (obj.retailPrice - obj.price) * obj.quantity;
    }
    return acc;
  }, 0);

  const total = items.reduce((acc, obj) => acc + obj.price * obj.quantity, 0);

  const handleRemoveFromBasket = (item) => {
    removeFromBasket(item);
  };

  const handleDecreaseItem = (item) => {
    decreaseItem(item);
  };

  const handleIncreaseItem = (item) => {
    increaseItem(item);
  };

  const handleAddressSubmit = async (address) => {
    const input = {
      user,
      address,
      items,
    };

    try {
      await postOrder(input);
      emptyBasket();
    } catch (error) {}
  };

  const handleSigninButtonClick = () => {
    navigate({
      pathname: urls.userUrls.COMBINE,
      search: createSearchParams({
        next: urls.basketUrls.BASE,
      }).toString(),
    });
  };

  useEffect(() => {
    if (showAddressForm) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [showAddressForm]);

  return (
    <div className="basket">
      {items.length < 1 && (
        <>
          <p className="basket-empty">You have not any items in your basket.</p>

          <div className="basket-start-shopping">
            <Link to={urls.productUrls.BASE}>Start Shopping</Link>
          </div>
        </>
      )}

      {items.length > 0 && (
        <ul className="basket__list">
          {items.map((item) => (
            <li key={item.id} title={item.title} className="basket__list-item">
              <Link to={`${urls.productUrls.BASE}/${item.id}`}>
                <h2 className="basket__list-item-title">{item.title}</h2>
                {item.photos[0] && (
                  <img src={item.photos[0]} alt={item.title} loading="lazy" />
                )}
              </Link>
              <div className="basket__list-item__price">
                {item.retailPrice > item.price && (
                  <span className="-retail">
                    <Price>{item.retailPrice}</Price>
                  </span>
                )}
                <span className="-price">
                  <Price>{item.price}</Price>
                </span>
                <span className="-total">
                  <b>Total: </b> <Price>{item.price * item.quantity}</Price>
                </span>
              </div>
              <div className="basket__list-item__quantity">
                <button
                  className="-decrease"
                  onClick={() => handleDecreaseItem(item)}
                >
                  -
                </button>
                <span className="-quantity">({item.quantity})</span>
                <button
                  className="-increase"
                  onClick={() => handleIncreaseItem(item)}
                >
                  +
                </button>
              </div>
              <button
                className="basket__list-item-remove"
                onClick={() => handleRemoveFromBasket(item)}
              >
                Remove From Basket
              </button>
            </li>
          ))}
        </ul>
      )}

      {items.length > 0 && (
        <div className="basket__bottom">
          <p className="basket__bottom-total">
            <span>
              <b>Discount: </b> <Price>{totalDiscount}</Price>
            </span>
            <span>
              <b>Total:</b> <Price>{total}</Price>
            </span>
          </p>

          {loggedIn ? (
            <button
              className="basket__bottom-order-btn"
              onClick={() => setShowAddressForm(true)}
            >
              Order
            </button>
          ) : (
            <button
              className="basket__bottom-signin-btn"
              onClick={handleSigninButtonClick}
            >
              Sign In
            </button>
          )}

          {showAddressForm && (
            <AddressForm
              setActive={setShowAddressForm}
              handleAddressSubmit={handleAddressSubmit}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Basket;
