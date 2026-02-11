import { createContext, useContext, useState } from "react";

const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState(null);
  const [isReorder, setIsReorder] = useState(false);
  const [reorderOrderId, setReorderOrderId] = useState(null);

  const openCheckout = (checkoutType = null, reorder = false) => {
    setType(checkoutType);
    setIsReorder(reorder);
    setIsOpen(true);
  };

  const closeCheckout = () => {
    setIsOpen(false);
    setType(null);
    setIsReorder(false);
    setReorderOrderId(null); // reset when closing
  };

  return (
    <CheckoutContext.Provider
      value={{
        isOpen,
        type,
        isReorder,
        reorderOrderId,      // ✅ expose the state
        openCheckout,
        closeCheckout,
        setIsReorder,        // ✅ expose setter
        setReorderOrderId,   // ✅ expose setter
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => useContext(CheckoutContext);
