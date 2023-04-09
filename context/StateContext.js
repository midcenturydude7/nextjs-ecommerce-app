import React, { useContext } from "react";
import { toast } from "react-hot-toast";

const Context = React.createContext();

export default function StateContext({ children }) {
  const [showCart, setShowCart] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState("");
  const [totalQuantities, setTotalQuantities] = React.useState(0);
  const [qty, setQty] = React.useState(1);

  function onAdd(product, quantity) {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product.id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`Sweet! ${qty} ${product.name} added to your cart!`);
  }

  function incQty() {
    setQty((prevQty) => prevQty + 1);
  }

  function decQty() {
    setQty((prevQty) => prevQty - 1);
    if (prevQty - 1 < 1) return 1;

    return prevQty - 1;
  }

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
      }}>
      {children}
    </Context.Provider>
  );
}

export function useStateContext() {
  return useContext(Context);
}
