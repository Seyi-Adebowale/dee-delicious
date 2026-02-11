import React, { useState, useEffect } from "react";

export default function ItemModal({ item, isOpen, onClose, onAddToBasket }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  // Reset modal state when item changes
  useEffect(() => {
    setQuantity(1);
    setSelectedOption(item?.options ? item.options[0] : null);
  }, [item]);

  if (!isOpen || !item) return null;

  const totalPrice = (item.price + (selectedOption?.price || 0)) * quantity;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Item Image */}
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-64 object-cover"
        />

        <div className="p-6 flex flex-col gap-4">
          {/* Item Name & Description */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{item.name}</h2>
            <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
          </div>

          {/* Options if exist */}
          {item.options && item.options.length > 0 && (
            <div>
              <p className="font-semibold mb-2">Options:</p>
              <div className="flex gap-3 flex-wrap">
                {item.options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedOption(opt)}
                    className={`px-4 py-2 rounded-xl border font-medium text-sm transition ${
                      selectedOption?.id === opt.id
                        ? "bg-orange-500 text-white border-orange-500"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-orange-50"
                    }`}
                  >
                    {opt.name} {opt.price ? `(+£${opt.price.toFixed(2)})` : ""}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="flex items-center gap-4">
            <p className="font-semibold">Quantity:</p>
            <div className="flex items-center gap-2 border rounded-xl px-3 py-1">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="text-lg font-bold px-2"
              >
                −
              </button>
              <span className="w-6 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="text-lg font-bold px-2"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Basket Button */}
          <button
            onClick={() => {
              onAddToBasket({ ...item, quantity, selectedOption });
              onClose();
            }}
            className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-semibold text-lg transition flex justify-center items-center gap-2"
          >
            Add to Basket - £{totalPrice.toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
}
