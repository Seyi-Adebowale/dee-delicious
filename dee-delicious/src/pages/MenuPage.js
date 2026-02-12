import React, { useMemo, useState, useRef, useEffect } from "react";
import MainMealImage from "../assets/main-meals.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ItemModal from "../components/ItemModal";

export default function MenuPage() {
  // Menu data
  const menu = useMemo(
    () => [
      {
        id: "starters",
        title: "Starters",
        items: [
          {
            id: "starter-1",
            name: "Moin Moin",
            description:
              "Steamed bean pudding made from washed and peeled beans.",
            price: 5.5,
            image: MainMealImage,
            options: [
              { id: "opt1", name: "Small", price: 0 },
              { id: "opt2", name: "Large", price: 2 },
            ],
          },
        ],
      },
      {
        id: "main-meals",
        title: "Main Meals",
        items: [
          {
            id: "main-1",
            name: "Jollof Rice & Chicken",
            description:
              "Party jollof rice served with grilled chicken and plantain.",
            price: 14.5,
            image: MainMealImage,
          },
        ],
      },
      {
        id: "sides",
        title: "Sides",
        items: [
          {
            id: "side-1",
            name: "Fried Plantain",
            description: "Sweet fried plantain with crispy edges.",
            price: 4.0,
            image: MainMealImage,
          },
        ],
      },
      {
        id: "kids-meal",
        title: "Kids Meal",
        items: [
          {
            id: "kids-1",
            name: "Mini Spaghetti",
            description: "Kid-friendly spaghetti with tomato sauce.",
            price: 6.0,
            image: MainMealImage,
          },
        ],
      },
      {
        id: "nigerian-soups",
        title: "Nigerian Soups",
        items: [
          {
            id: "soup-1",
            name: "Egusi Soup",
            description: "Traditional melon seed soup served with pounded yam.",
            price: 12.0,
            image: MainMealImage,
          },
        ],
      },
      {
        id: "grills",
        title: "Grills",
        items: [
          {
            id: "grill-1",
            name: "Grilled Chicken",
            description: "Spicy grilled chicken with sides.",
            price: 15.0,
            image: MainMealImage,
          },
        ],
      },
      {
        id: "drinks",
        title: "Drinks",
        items: [
          {
            id: "drink-1",
            name: "Zobo Drink",
            description: "Refreshing hibiscus flower drink.",
            price: 3.5,
            image: MainMealImage,
          },
        ],
      },
      {
        id: "special-preorder",
        title: "Special Pre-Order",
        items: [
          {
            id: "special-1",
            name: "Special Jollof Package",
            description: "Pre-order this for parties and events.",
            price: 50.0,
            image: MainMealImage,
          },
        ],
      },
    ],
    [],
  );

  const [activeCategory, setActiveCategory] = useState(menu[0].id);
  const [search, setSearch] = useState("");
  const categoryRefs = useRef({});
  const categoryScrollRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const formatMoney = (n) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(n);

  const filteredMenu = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return menu;
    return menu
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((item) =>
          `${item.name} ${item.description} ${cat.title}`
            .toLowerCase()
            .includes(q),
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [menu, search]);

  // Track active category based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // offset for sticky header
      for (const cat of filteredMenu) {
        const ref = categoryRefs.current[cat.id];
        if (ref) {
          const { offsetTop, offsetHeight } = ref;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveCategory(cat.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [filteredMenu]);

  // Scroll category nav to keep active tab visible
  useEffect(() => {
    const container = categoryScrollRef.current;
    if (!container) return;

    const activeBtn = container.querySelector(`[data-cat="${activeCategory}"]`);
    if (!activeBtn) return;

    activeBtn.scrollIntoView({
      behavior: "smooth",
      inline: "center", // scroll horizontally to center active
      block: "nearest",
    });
  }, [activeCategory]);

  const scrollToCategory = (id) => {
    const ref = categoryRefs.current[id];
    if (!ref) return;

    const navHeight = categoryScrollRef.current?.offsetHeight || 0;
    const offsetTop = ref.offsetTop - navHeight - 90; 

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  const handleAddToBasket = (item) => {
    console.log("Added to basket:", item);
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] py-12 font-sans">
      <div className="mx-auto max-w-6xl px-6 flex flex-col gap-8">
        {/* Notice */}
        <div className="relative overflow-hidden rounded-3xl border-l-8 border-secondary bg-primary/5 p-6 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white">
              ⚠
            </div>
            <p className="text-lg font-bold text-secondary tracking-wide uppercase">
              Notice
            </p>
          </div>
          <ul className="space-y-1 text-sm text-gray-700 leading-relaxed">
            <li>
              • Locally sourced ingredients &{" "}
              <span className="font-semibold">100% Halal Food</span>
            </li>
            <li>
              • If you have a food allergy, intolerance, or coeliac disease, please speak to our staff before ordering as our ingredients may contain peanuts, milk, wheat, dairy and poultry.
            </li>
          </ul>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search meals..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm shadow-sm focus:border-secondary-500 focus:ring-0 transition-all"
        />

        {/* Category Nav */}
        <div className="sticky top-20 z-[5] bg-[#f3f3f3] p-4 flex items-center gap-2">
          <button
            className="block md:hidden p-2 rounded-full bg-black/5 hover:bg-black/10 transition text-gray-600"
            onClick={() =>
              categoryScrollRef.current?.scrollBy({
                left: -180,
                behavior: "smooth",
              })
            }
          >
            <ChevronLeft size={18} strokeWidth={2.2} />
          </button>

          <div
            ref={categoryScrollRef}
            className="category-scroll flex gap-3 overflow-x-auto flex-1"
          >
            {menu.map((cat) => {
              const activeState = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  data-cat={cat.id} // important for scrollIntoView
                  onClick={() => scrollToCategory(cat.id)}
                  className={`flex items-center gap-2 whitespace-nowrap px-5 py-3 rounded-xl font-semibold transition-all ${
                    activeState
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                      : "bg-white text-stone-600 hover:bg-orange-50"
                  }`}
                >
                  {cat.title}
                </button>
              );
            })}
          </div>

          <button
            className="block md:hidden p-2 rounded-full bg-black/5 hover:bg-black/10 transition text-gray-600"
            onClick={() =>
              categoryScrollRef.current?.scrollBy({
                left: 180,
                behavior: "smooth",
              })
            }
          >
            <ChevronRight size={18} strokeWidth={2.2} />
          </button>
        </div>

        {/* Items */}
        {filteredMenu.map((cat) => (
          <div
            key={cat.id}
            ref={(el) => (categoryRefs.current[cat.id] = el)}
            className="pt-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {cat.title}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {cat.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#f6f6f6] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
                  onClick={() => {
                    setSelectedItem(item);
                    setModalOpen(true);
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between">
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-xl font-bold text-orange-500">
                        {formatMoney(item.price)}
                      </p>
                    </div>
                    <p className="mt-3 text-sm text-gray-600">
                      {item.description}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedItem(item);
                        setModalOpen(true);
                      }}
                      className="mt-6 w-full flex items-center justify-center gap-2 rounded-2xl bg-primary/10 py-3 font-semibold text-primary hover:bg-primary hover:text-white transition"
                    >
                      <span className="text-lg">＋</span> Add to Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Modal */}
        <ItemModal
          item={selectedItem}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onAddToBasket={handleAddToBasket}
        />
      </div>
    </div>
  );
}
