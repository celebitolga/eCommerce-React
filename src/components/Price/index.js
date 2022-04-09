import { useBasket } from "../../context/BasketContext";

function Price({ children }) {
  const { currency } = useBasket();

  return (
    <>
      {children} {currency.currencySymbol}
    </>
  );
}

export default Price;
