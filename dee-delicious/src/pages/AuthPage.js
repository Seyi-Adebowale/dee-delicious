import React, { useState } from "react";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-yellow-300 to-orange-400 p-6">
      <div className="bg-white dark:bg-zinc-900 shadow-xl rounded-2xl max-w-4xl w-full overflow-hidden grid md:grid-cols-2">
        
        {/* Left Side - Image */}
        <div className="hidden md:flex items-center justify-center bg-green-500/20 dark:bg-green-700">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
            alt="Restaurant"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Right Side - Form */}
        <div className="p-10 md:p-16 flex flex-col justify-center">
          <h2 className="text-3xl font-extrabold mb-3 text-dark-green dark:text-white">
            {isSignUp ? "Create an Account" : "Welcome Back"}
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
            {isSignUp
              ? "Sign up with your details to start ordering."
              : "Sign in using your phone number to continue."}
          </p>

          <form className="space-y-4">
            {/* SIGN UP FIELDS */}
            {isSignUp && (
              <>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-4 rounded-lg border border-slate-200 dark:border-zinc-700 focus:ring-2 focus:ring-primary outline-none bg-white dark:bg-zinc-800 dark:text-white"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-4 rounded-lg border border-slate-200 dark:border-zinc-700 focus:ring-2 focus:ring-primary outline-none bg-white dark:bg-zinc-800 dark:text-white"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-lg border border-slate-200 dark:border-zinc-700 focus:ring-2 focus:ring-primary outline-none bg-white dark:bg-zinc-800 dark:text-white"
                />
              </>
            )}

            {/* PHONE FIELD (BOTH SIGN IN + SIGN UP) */}
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-4 rounded-lg border border-slate-200 dark:border-zinc-700 focus:ring-2 focus:ring-primary outline-none bg-white dark:bg-zinc-800 dark:text-white"
            />

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-4 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 active:scale-[0.98]"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>

          {/* Toggle */}
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400 text-center">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}{" "}
            <button
              type="button"
              className="text-primary font-bold hover:underline"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>

        </div>
      </div>
    </div>
  );
}
