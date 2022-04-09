import { useEffect, useRef } from "react";

import "./index.scss";

import CloseSVG from "../Svg/close";

function AddressForm({ setActive, handleAddressSubmit }) {
  const textareaForm = useRef();

  const handleOutsideClick = (e) => {
    if (e.currentTarget === e.target) {
      setActive(false);
    }
  };

  const handleOrderClick = () => {
    handleAddressSubmit(textareaForm.current.value);
    setActive(false);
  };

  const handleCancelClick = () => setActive(false);

  const keyPressEvent = (e) => {
    if (e.key === "Escape") {
      setActive(false);
    }
  };

  useEffect(() => {
    textareaForm.current.focus();

    window.addEventListener("keydown", keyPressEvent, false);

    return () => {
      window.removeEventListener("keydown", keyPressEvent, false);
    };
  }, []);

  return (
    <div className="address-form" onClick={handleOutsideClick}>
      <div className="address-form__wrapper">
        <div className="address-form__header">
          <h3 className="address-form__header-title">Address Form</h3>
          <button
            className="address-form__header-close"
            onClick={handleCancelClick}
          >
            <CloseSVG />
          </button>
        </div>
        <div className="address-form__body">
          <div className="input-holder">
            <label htmlFor="address">Address</label>
            <textarea id="address" placeholder="Address" ref={textareaForm} />
          </div>
        </div>
        <div className="address-form__buttons">
          <button className="button-order" onClick={handleOrderClick}>
            Order
          </button>
          <button onClick={handleCancelClick} className="button-cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddressForm;
