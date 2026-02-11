// import React, {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   useCallback,
// } from "react";
// import { useUser } from "./UserContext";
// import { useApi } from "../utils/Api";

// const CartContext = createContext();
// export const useCart = () => useContext(CartContext);

// const CART_EXPIRY_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

// export const CartProvider = ({ children }) => {
//   const { user } = useUser();
//   const { apiFetch } = useApi();
//   const [cartItems, setCartItems] = useState([]);

//   // --- Load cart from localStorage / sessionStorage ---
//   const loadCartItems = (userId) => {
//     if (!userId) return [];
//     const savedCart = localStorage.getItem(`cartItems_${userId}`);
//     if (!savedCart) return [];

//     try {
//       const parsed = JSON.parse(savedCart);
//       if (parsed.savedAt && Date.now() - parsed.savedAt > CART_EXPIRY_MS) {
//         localStorage.removeItem(`cartItems_${userId}`);
//         return [];
//       }
//       return parsed.items || [];
//     } catch (err) {
//       console.error("Failed to parse saved cart", err);
//       return [];
//     }
//   };

//   // --- Save cart ---
//   const saveCart = useCallback(
//     (items) => {
//       if (user?.id) {
//         localStorage.setItem(
//           `cartItems_${user.id}`,
//           JSON.stringify({ items, savedAt: Date.now() })
//         );
//       } else {
//         sessionStorage.setItem("guestCart", JSON.stringify(items));
//       }
//     },
//     [user?.id]
//   );

//   // --- Calculate total price for a cart item ---
//   const calculateTotalPrice = (cartItem) => {
//     let totalPrice = parseFloat(cartItem.item?.price || 0);

//     if (cartItem.selectedRequiredOption) {
//       totalPrice += parseFloat(cartItem.selectedRequiredOption.price || 0);
//     }

//     if (cartItem.selectedOptionalOptions?.length) {
//       cartItem.selectedOptionalOptions.forEach(
//         (opt) =>
//           (totalPrice +=
//             parseFloat(opt.option_price || 0) * (opt.quantity || 1))
//       );
//     }

//     // --- Swallow options + proteins ---
//     ["swallowOptions", "proteins"].forEach((optType) => {
//       cartItem.item?.[optType]?.forEach(
//         (opt) =>
//           (totalPrice +=
//             parseFloat(opt.option_price || 0) * (opt.quantity || 1))
//       );
//     });

//     return totalPrice * cartItem.quantity;
//   };

//   // --- Add item to cart ---
//   const addToCart = (item) => {
//     if (!item || !item.item?.id) return;

//     const newCartItem = {
//       ...item,
//       quantity: item.quantity || 1,
//       selectedRequiredOption: item.selectedRequiredOption
//         ? { ...item.selectedRequiredOption }
//         : null,
//       selectedOptionalOptions: (item.selectedOptionalOptions || []).map(
//         (opt) => ({ ...opt })
//       ),
//       key: `${item.item.id}-${Date.now()}-${Math.random()}`,
//       totalPrice: calculateTotalPrice(item),
//     };

//     setCartItems((prevItems) => {
//       const updatedCart = [...prevItems, newCartItem];
//       saveCart(updatedCart);
//       return updatedCart;
//     });
//   };

//   // --- Update quantity of a cart item ---
//   const updateCartItemQuantity = (cartItemKey, newQuantity) => {
//     setCartItems((prevItems) => {
//       const updatedCart = prevItems.map((cartItem) =>
//         cartItem.key === cartItemKey
//           ? {
//               ...cartItem,
//               quantity: newQuantity,
//               totalPrice: calculateTotalPrice({
//                 ...cartItem,
//                 quantity: newQuantity,
//               }),
//             }
//           : cartItem
//       );
//       saveCart(updatedCart);
//       return updatedCart;
//     });
//   };

//   // --- Update optional option quantity ---
//   const updateOptionalOptionQuantity = (itemId, optionId, newQuantity) => {
//     setCartItems((prevItems) => {
//       const updatedCart = prevItems.map((cartItem) => {
//         if (cartItem.item.id === itemId) {
//           const updatedOptions = cartItem.selectedOptionalOptions.map((opt) =>
//             opt.id === optionId ? { ...opt, quantity: newQuantity } : opt
//           );
//           return {
//             ...cartItem,
//             selectedOptionalOptions: updatedOptions,
//             totalPrice: calculateTotalPrice({
//               ...cartItem,
//               selectedOptionalOptions: updatedOptions,
//             }),
//           };
//         }
//         return cartItem;
//       });
//       saveCart(updatedCart);
//       return updatedCart;
//     });
//   };

//   // --- Remove item from cart ---
//   const removeItemFromCart = (cartItemKey) => {
//     setCartItems((prevItems) => {
//       const updatedCart = prevItems.filter((item) => item.key !== cartItemKey);
//       saveCart(updatedCart);
//       return updatedCart;
//     });
//   };

//   // --- Clear cart ---
//   const clearCart = () => {
//     setCartItems([]);
//     if (user?.id) localStorage.removeItem(`cartItems_${user.id}`);
//     else sessionStorage.removeItem("guestCart");
//   };

//   // --- Merge guest cart on login ---
//   useEffect(() => {
//     if (user?.id) {
//       const userCart = loadCartItems(user.id);
//       const guestCart = JSON.parse(sessionStorage.getItem("guestCart")) || [];
//       const mergedCart = [...userCart, ...guestCart];
//       setCartItems(mergedCart);
//       saveCart(mergedCart);
//       sessionStorage.removeItem("guestCart");
//     } else {
//       setCartItems([]);
//     }
//   }, [user?.id, saveCart]);

//   // --- Populate cart from reorder (with latest prices) ---
//   const populateCartFromReorder = async (order) => {
//     if (!order?.items?.length) return;

//     clearCart();

//     try {
//       const swallowOptionIds = [6, 7, 8, 9, 92, 93, 98]; // keep in sync with your ItemModal

//       // Fetch latest data for all items
//       const latestData = await Promise.all(
//         order.items.map((item) =>
//           apiFetch("get-menu-item", { item_id: item.item_id })
//         )
//       );

//       const newItems = order.items
//         .map((item, index) => {
//           const data = latestData[index];
//           if (!data || data.status !== "success") {
//             console.warn("No data returned for item:", item.item_id);
//             return null;
//           }

//           const latestItem = data.item;

//           // --- Swallow options ---
//           const swallowOptions = (item.swallowOptions || []).map((opt) => {
//             const latestOpt = latestItem.optional_options?.find(
//               (o) => o.id === opt.id && swallowOptionIds.includes(Number(o.id))
//             );

//             return {
//               id: opt.id,
//               option_name:
//                 latestOpt?.option_name || opt.option_name || opt.name,
//               option_price: Number(latestOpt?.option_price ?? 0),
//               quantity: opt.quantity,
//             };
//           });

//           // --- Proteins (non-swallow optional options selected as proteins) ---
//           const proteins = (item.proteins || []).map((opt) => {
//             const latestOpt = latestItem.optional_options?.find(
//               (o) => o.id === opt.id && !swallowOptionIds.includes(Number(o.id))
//             );

//             return {
//               id: opt.id,
//               option_name:
//                 latestOpt?.option_name || opt.option_name || opt.name,
//               option_price: Number(latestOpt?.option_price ?? 0),
//               quantity: opt.quantity,
//             };
//           });

//           // --- Non-swallow optional options (other than proteins) ---
//           const selectedOptionalOptions = (
//             item.selectedOptionalOptions || []
//           ).map((opt) => {
//             const latestOpt = latestItem.optional_options?.find(
//               (o) => o.id === opt.id && !swallowOptionIds.includes(Number(o.id))
//             );

//             return {
//               id: opt.id,
//               option_name:
//                 latestOpt?.option_name || opt.option_name || opt.name,
//               option_price: Number(latestOpt?.option_price ?? 0),
//               quantity: opt.quantity,
//             };
//           });

//           // --- Required option ---
//           const selectedRequiredOption = item.required_option_id
//             ? (() => {
//                 const latestOpt = latestItem.required_options?.find(
//                   (o) => o.id === item.required_option_id
//                 );

//                 return {
//                   id: item.required_option_id,
//                   name: latestOpt?.option_name || item.required_option_name,
//                   price: Number(
//                     latestOpt?.option_price ?? item.required_option_price ?? 0
//                   ),
//                 };
//               })()
//             : null;

//           // --- Construct final cart item ---
//           return {
//             key: `${item.item_id}-${Date.now()}-${Math.random()}`,
//             quantity: item.quantity,
//             item: {
//               id: item.item_id,
//               item_name: latestItem.item_name,
//               price: Number(latestItem.price ?? item.base_price ?? 0),
//               category_id: latestItem.category_id,
//               swallowOptions,
//               proteins,
//             },
//             selectedRequiredOption,
//             selectedOptionalOptions,
//           };
//         })
//         .filter(Boolean);

//       setCartItems(newItems);
//       saveCart(newItems);

//       return newItems;
//     } catch (err) {
//       console.error("Failed to reorder items:", err);
//     }
//   };

//   const updateCartItem = (key, updatedItem) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.key === key
//           ? { ...updatedItem, totalPrice: calculateTotalPrice(updatedItem) }
//           : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeItemFromCart,
//         updateCartItemQuantity,
//         updateOptionalOptionQuantity,
//         clearCart,
//         populateCartFromReorder,
//         updateCartItem,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;
