import React from "react";

export default function ContactPage() {
  return (
    <main className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-100 transition-colors duration-300">
      {/* Hero Header */}
      <header className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 tropical-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-wide uppercase">
            Connect With Us
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-secondary dark:text-white">
            We’d Love to <span className="text-primary">Hear From You</span>
          </h1>
        </div>
      </header>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24 mt-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white dark:bg-zinc-900 p-8 md:p-10 rounded-xl shadow-xl shadow-primary/5 border border-primary/5">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-dark-green">
              <span className="material-icons text-secondary">send</span> Send a
              Message
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold opacity-70">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-50 dark:bg-zinc-800 border-none rounded-lg p-4 form-input-focus ring-1 ring-slate-200 dark:ring-zinc-700 focus:ring-2"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold opacity-70">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-slate-50 dark:bg-zinc-800 border-none rounded-lg p-4 form-input-focus ring-1 ring-slate-200 dark:ring-zinc-700 focus:ring-2"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold opacity-70">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full bg-slate-50 dark:bg-zinc-800 border-none rounded-lg p-4 form-input-focus ring-1 ring-slate-200 dark:ring-zinc-700 focus:ring-2"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold opacity-70">
                  Subject
                </label>
                <select className="w-full bg-slate-50 dark:bg-zinc-800 border-none rounded-lg p-4 form-input-focus ring-1 ring-slate-200 dark:ring-zinc-700 focus:ring-2">
                  <option>Table Reservation</option>
                  <option>Catering Inquiry</option>
                  <option>General Feedback</option>
                  <option>Work with Us</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold opacity-70">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us how we can help..."
                  className="w-full bg-slate-50 dark:bg-zinc-800 border-none rounded-lg p-4 form-input-focus ring-1 ring-slate-200 dark:ring-zinc-700 focus:ring-2"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information & Socials */}
          <div className="space-y-8">
            {/* Direct Details */}
            <div className="grid gap-6">
              <div className="flex items-start gap-5 p-6 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-slate-100 dark:border-zinc-800">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="material-icons text-secondary">phone</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Call Us</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-2">
                    Speak directly with us.
                  </p>
                  <a
                    className="text-primary font-bold hover:underline"
                    href="tel:+447465682308"
                  >
                    07465 682308
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-slate-100 dark:border-zinc-800">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="material-icons text-secondary">email</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Us</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-2">
                    For general inquiries.
                  </p>
                  <a
                    className="text-primary font-bold hover:underline"
                    href="mailto:deedelicious@gmail.com"
                  >
                    deedelicious@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-slate-100 dark:border-zinc-800">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="material-icons text-secondary">
                    location_on
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-2">
                    The heart of authentic Caribbean flavor.
                  </p>
                  <p className="font-bold text-primary">
                    112 Breck Road, Anfield, Liverpool L4 2RD
                  </p>
                </div>
              </div>
            </div>

            {/* Social Bar */}
            <div className="p-8 rounded-xl bg-dark-green text-white">
              <h3 className="text-xl font-bold mb-6">Join the Community</h3>
              <div className="flex gap-4">
                {/* Instagram */}
                <a
                  className="w-14 h-14 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all group"
                  href="https://www.instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="Instagram"
                    className="w-6 h-6"
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                  />
                </a>

                {/* Facebook */}
                <a
                  className="w-14 h-14 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all group"
                  href="https://www.facebook.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="Facebook"
                    className="w-6 h-6"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                  />
                </a>

                {/* TikTok */}
                <a
                  className="w-14 h-14 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all group"
                  href="https://www.tiktok.com/@yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="TikTok"
                    className="w-6 h-6"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Ionicons_logo-tiktok.svg/960px-Ionicons_logo-tiktok.svg.png?20230423144016"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Hours Section */}
      <section className="bg-slate-100 dark:bg-zinc-950/50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Opening Hours */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-extrabold text-dark-green dark:text-white">
                  Opening Hours
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 text-500 font-semibold">
                  <span>Monday</span>
                  <span>Online</span>
                </div>
                <div className="flex justify-between items-center py-3 text-500 font-semibold">
                  <span>Tuesday</span>
                  <span>Online</span>
                </div>
                <div className="flex justify-between items-center py-3 text-500 font-semibold">
                  <span>Wednesday</span>
                  <span>12noon - 11pm</span>
                </div>
                <div className="flex justify-between items-center py-3 text-500 font-semibold">
                  <span>Thursday</span>
                  <span>12noon - 11pm</span>
                </div>
                <div className="flex justify-between items-center py-3 text-500 font-semibold">
                  <span>Friday</span>
                  <span>12noon - 11pm</span>
                </div>
                <div className="flex justify-between items-center py-3 text-500 font-semibold">
                  <span>Saturday</span>
                  <span>12noon - 11pm</span>
                </div>
                <div className="flex justify-between items-center py-3 text-500 font-semibold">
                  <span>Sunday</span>
                  <span>12noon - 11pm</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-3 order-1 lg:order-2 h-[450px] lg:h-auto min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800">
              <iframe
                title="Dee Delicious Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.4314034586464!2d-2.956703522946708!3d53.424994368835485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b21715aa4dc89%3A0x9ac21217ac8bfe84!2s112%20Breck%20Rd%2C%20Anfield%2C%20Liverpool%20L4%202RD%2C%20UK!5e0!3m2!1sen!2sng!4v1770832984567!5m2!1sen!2sng"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
