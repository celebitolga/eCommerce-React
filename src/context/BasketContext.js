import { useState, useContext, createContext, useEffect } from "react";

const BasketContext = createContext();

const defaultBasket = JSON.parse(localStorage.getItem("basket")) || [];

const currency = {
  currencyCode: 'TL',
  currencySymbol: '₺',
}

const BasketProvider = ({ children }) => {
  const [items, setItems] = useState(defaultBasket);
  const [miniBasketShow, setMiniBasketShow] = useState(false);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(items));
  }, [items]);

  const emptyBasket = () => setItems([]);

  const addToBasket = (data) => {
    const index = items.findIndex((item) => item.id === data.id);

    if (index !== -1) {
      const filteredItems = items.map((item) => {
        if (item.id === data.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });

      setItems(filteredItems);
    } else {
      setItems((prev) => [...prev, { ...data, quantity: 1 }]);
    }
  };

  const removeFromBasket = (data) => {
    const filteredItems = items.filter((item) => item.id !== data.id);

    setItems(filteredItems);
  };

  const decreaseItem = (data) => {
    let filteredItems;

    if (data.quantity === 1) {
      filteredItems = items.filter((item) => item.id !== data.id);
    } else {
      filteredItems = items.map((item) => {
        if (item.id === data.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      });
    }

    setItems(filteredItems);
  };

  const increaseItem = (data) => {
    const filteredItems = items.map((item) => {
      if (item.id === data.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    setItems(filteredItems);
  };

  const values = {
    items,
    currency,
    miniBasketShow,
    setMiniBasketShow,
    setItems,
    emptyBasket,
    addToBasket,
    removeFromBasket,
    decreaseItem,
    increaseItem,
  };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };
