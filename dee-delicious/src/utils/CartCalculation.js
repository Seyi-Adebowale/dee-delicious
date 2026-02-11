// utils/CartCalculation.js

/**
 * Calculate total for a cart item, including required, optional, proteins, and swallow options.
 * @param {Object} cartItem
 * @returns {Object} - { total: number, options: array }
 */
export const calculateCartItemTotal = (cartItem) => {
  if (!cartItem || !cartItem.item) return { total: 0, options: [] };

  let total = Number(cartItem.item.price || 0);
  const options = [];

  // Required option
  if (cartItem.selectedRequiredOption) {
    total += Number(cartItem.selectedRequiredOption.price || 0);
    options.push({
      name: cartItem.selectedRequiredOption.name,
      price: Number(cartItem.selectedRequiredOption.price || 0).toFixed(2),
    });
  }

  // Optional options
  (cartItem.selectedOptionalOptions || []).forEach((opt) => {
    const optTotal = (Number(opt.option_price) || 0) * (Number(opt.quantity) || 1);
    total += optTotal;
    options.push({
      name: opt.option_name + (opt.quantity > 1 ? ` x${opt.quantity}` : ""),
      price: optTotal.toFixed(2),
    });
  });

  // Swallow options + proteins
  ["swallowOptions", "proteins"].forEach((optType) => {
    (cartItem.item?.[optType] || []).forEach((opt) => {
      const optTotal = (Number(opt.option_price) || 0) * (Number(opt.quantity) || 1);
      total += optTotal;
      options.push({
        name: opt.option_name + (opt.quantity > 1 ? ` x${opt.quantity}` : ""),
        price: optTotal.toFixed(2),
      });
    });
  });

  // Multiply by main item quantity
  total *= cartItem.quantity || 1;

  return { total, options };
};

/**
 * Total quantity of main proteins (if needed elsewhere)
 */
export const getTotalMainProteinQty = (cartItem) => {
  if (!cartItem) return 0;
  return (cartItem.item?.proteins || []).reduce((acc, p) => acc + (p.quantity || 0), 0);
};
