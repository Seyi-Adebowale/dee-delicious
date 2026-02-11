import React, { useRef } from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/hero-image.png";
import StarterImage from "../assets/starter.jpg";
import MainMealImage from "../assets/main-meals.jpg";
import SwallowImage from "../assets/swallow.jpg";
import GrillsImage from "../assets/grills.jpg";


/* ------------------ PLACEHOLDER DATA ------------------ */

const CATEGORIES = [
  {
    title: "Starters",
    description: "Delightful bites to kickstart your meal",
    image: StarterImage,
  },
  {
    title: "Main Meals",
    description: "Hearty dishes bursting with flavor",
    image: MainMealImage,
  },
  {
    title: "Nigerian Soups",
    description: "Tasty, flavorful classics from West Africa",
    image: SwallowImage,
  },
  {
    title: "Grills",
    description: "Smoky, spicy, straight off the grill",
    image: GrillsImage,
  },
];

const BEST_SELLERS = [
  {
    id: 1,
    name: "Jollof + Chicken Combo",
    price: "£12.99",
    rating: 4.5,
    reviewsCount: 221,
    isMustTry: true,
    image: MainMealImage,
  },
  {
    id: 2,
    name: "Jerk Chicken Platter",
    price: "£14.50",
    image: MainMealImage,
  },
  {
    id: 3,
    name: "Pepper Soup Special",
    price: "£9.99",
    image: MainMealImage,
  },
  {
    id: 4,
    name: "Plantain + Beef Bowl",
    price: "£10.99",
    image: MainMealImage,
  },
];

const REVIEWS = [
  {
    name: "Tobi K.",
    platform: "Google Review",
    text: "This place is insane. The food tasted like home. Efo Riro was 10/10!",
  },
  {
    name: "Paul O.",
    platform: "Instagram",
    text: "Everything was fresh and hot. Plantain was sweet, and the pepper sauce perfect.",
  },
  {
    name: "Christina N.",
    platform: "Google Review",
    text: "Best Afro-Caribbean fusion I’ve had in Liverpool. Service was great.",
  },
];

/* ------------------ COMPONENTS ------------------ */

function Hero({ onAction }) {
  return (
    <div className="relative pt-10 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="z-10 space-y-8">
          <div className="space-y-4">
            <span className="inline-block px-6 py-1.5 bg-primary/10 text-primary font-bold tracking-widest uppercase text-xs rounded-full">
              Experience Afro-Caribbean
            </span>

            <h1 className="text-4xl lg:text-7xl font-extrabold text-primary leading-[1.1]">
              Authentic <span className="text-secondary">Afro-Caribbean</span>{" "}
              Flavors
            </h1>

            <p class="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0">
              From our kitchen to your heart. Experience the smoky spices of
              West Africa and the soul-soothing heat of the Caribbean.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* Order Now → Menu page */}
            <Link
              to="/menu"
              className="px-8 py-4 bg-primary text-white font-bold rounded-xl text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-icons">restaurant_menu</span>
              Order Now
            </Link>

            {/* Book a Table → Reservations page */}
            <Link
              to="/reservations"
              className="px-8 py-4 bg-secondary text-white font-bold rounded-xl text-lg hover:bg-secondary/90 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-icons">event</span>
              Book a Table
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl -z-10 scale-110"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700">
            <img
              src={HeroImage}
              alt="Hero Banner"
              className="w-full h-auto aspect-square object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuExplorer() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-primary mb-4">
            Explore Our Menu
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-xl"
            >
              <img
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src={cat.image}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-dark-green via-dark-green/10 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 class="text-2xl font-bold text-white mb-1">{cat.title}</h3>
                <p className="text-white/80 text-sm">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => (window.location.href = "/menu")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-all"
          >
            Explore Full Menu{" "}
            <span className="material-icons">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function BestSellers() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -clientWidth / 2 : clientWidth / 2,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-extrabold text-primary mb-2">
              Our Best Sellers
            </h2>
            <p className="text-slate-500 text-lg">
              The most loved dishes by our community
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-primary/20 hover:bg-primary/10 transition-colors active:scale-90"
            >
              <span className="material-icons">chevron_left</span>
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30 active:scale-90"
            >
              <span className="material-icons">chevron_right</span>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto hide-scrollbar pb-8 px-6 sm:px-8 lg:px-12 snap-x snap-mandatory relative"
          style={{ WebkitOverflowScrolling: "touch" }} // mobile smooth scrolling
        >
          {BEST_SELLERS.map((item) => (
            <div
              key={item.id}
              className="min-w-[320px] bg-white rounded-3xl overflow-hidden shadow-xl border border-primary/5 snap-start group"
            >
              <div className="h-60 relative overflow-hidden">
                <img
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={item.image}
                />
              </div>
              <div className="p-8">
                <div className="flex flex-col gap-2 mb-3">
                  <h4 className="font-bold text-xl text-primary leading-tight">
                    {item.name}
                  </h4>
                  <span className="text-secondary font-bold text-lg">
                    {item.price}
                  </span>
                </div>

                <button className="w-full py-3.5 bg-primary/10 text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all active:scale-95 text-md">
                  Add to Basket
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Testimonials() {
  return (
    <section className="py-24 bg-background-light relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-slate-500 text-xl italic font-medium">
            "The real taste of home away from home"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="bg-white p-10 rounded-3xl shadow-sm border border-primary/5 relative hover:shadow-xl transition-shadow"
            >
              <div className="absolute -top-6 left-10 text-primary opacity-20">
                <span className="material-icons text-7xl">format_quote</span>
              </div>

              <div className="flex items-center gap-1 text-primary mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-icons">
                    star
                  </span>
                ))}
              </div>

              <p className="text-slate-600 mb-10 italic text-md leading-relaxed">
                {review.text}
              </p>

              <div className="flex items-center gap-4">
                <div>
                  <h5 className="font-bold text-xl text-primary">
                    {review.name}
                  </h5>
                  <span className="text-xs text-secondary font-bold uppercase tracking-widest">
                    {review.platform}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ PAGE ------------------ */

export default function HomePage({ onAction }) {
  return (
    <div className="min-h-screen">
      <Hero onAction={onAction} />
      <MenuExplorer />
      <BestSellers />

      {/* --- Reservation CTA --- */}
      <section className="py-20 bg-primary/10 text-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-extrabold mb-4 text-primary">
            Reserve Your Table Now!
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Secure your spot and enjoy authentic Afro-Caribbean flavors.
          </p>
          <div className="text-center mt-12">
            <button
              onClick={() => (window.location.href = "/reservations")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-all"
            >
              Book a Table <span className="material-icons">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
