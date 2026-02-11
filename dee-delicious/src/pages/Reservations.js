import React from "react";

export default function ReservationsPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Restaurant Interior"
          className="w-full h-full object-cover opacity-20 dark:opacity-10 grayscale"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB94lB3woVxhwSn5uCcZLIL3ElmQ0vHmstk83coasqx28RWx3BBRw0YnuCqIlUUCy4QEsPfgz8t5f59ndblbL8bYHviuNnNLCqLtcd7jox0bBf-xfuix6E5IaSS4m2QH3W-DStEgugK9ugmddFI0i4jw0qC29gZOUnGqQ3Dp6Isb95LMPxjjf3TT_KwAfWwUKzIm7P8kYer5xxUAIoHK6CrfNfpES7g8OxKLoV2dP_yEq9pQaLfo7Cw-Hciku4aWslv4At-O55JeQjz"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-light/50 via-background-light/80 to-background-light dark:from-background-dark/50 dark:via-background-dark/80 dark:to-background-dark"></div>
      </div>

      {/* Reservation Container */}
      <div className="relative z-10 w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Content */}
        <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-sm">
              Experience Afro-Caribbean
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mt-2 leading-tight text-secondary">
              Reserve <br /> <span className="text-primary">Your Seat</span>
            </h1>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Join us for an unforgettable dining experience. We can't wait to welcome you!
          </p>

          <div className="flex flex-col gap-4 mt-8">
            <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-icons text-xl">location_on</span>
              </div>
              <span>112 Breck Road, Anfield, Liverpool L4 2RD</span>
            </div>
            <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-icons text-xl">phone</span>
              </div>
              <span>07465 682308</span>
            </div>
          </div>
        </div>

        {/* Right Side: Reservation Form */}
        <div className="lg:col-span-7">
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 p-8 md:p-10 rounded-xl shadow-2xl shadow-primary/5">
            <h2 className="text-2xl font-bold mb-8 text-primary">Booking Details</h2>
            <form className="space-y-6">
              {/* Name and Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border-slate focus:border-primary focus:ring-0 rounded-lg p-4 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border-slate focus:border-primary focus:ring-0 rounded-lg p-4 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border-slate focus:border-primary focus:ring-0 rounded-lg p-4 transition-all"
                />
              </div>

              {/* Date, Time, Seats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border-slate focus:border-primary focus:ring-0 rounded-lg p-4 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    Time
                  </label>
                  <input
                    type="time"
                    min="12:00"
                    max="23:00"
                    step="900"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border-slate focus:border-primary focus:ring-0 rounded-lg p-4 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    Seats
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    defaultValue={1}
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border-slate focus:border-primary focus:ring-0 rounded-lg p-4 transition-all"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                  Special Requests
                </label>
                <textarea
                  rows={3}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border-slate focus:border-primary focus:ring-0 rounded-lg p-4 transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                className="group relative w-full bg-primary text-white py-5 rounded-lg font-bold text-lg overflow-hidden shadow-xl shadow-primary/30 transition-all active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Confirm Reservation
                  <span className="material-icons group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </span>
                <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
