"use client";

import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="section-padding pt-24 bg-gradient-to-br from-dark-600 to-dark-900 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-4xl font-bold text-white mb-6">
              Hi! I'm 
            </h1>
            <div className="text-primary-200 lg:text-7xl font-bold">Wilmer Morales</div>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Passionate Full Stack Software Developer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="btn-primary inline-flex items-center justify-center"
              >
                View My Work
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Get In Touch
              </a>
            </div>

            {/* Achievements */}
            <div className="mt-16">
  <p className="text-lg text-gray-300 mb-8 text-center lg:text-left italic">
    "Turning ideas into elegant code solutions using the best tools"
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
    <div className="bg-dark-700 p-4 rounded-lg text-center border border-dark-600">
      <img src="/react-logo.png" alt="React" className="logo-spin" style={{ animationDelay: "0s" }} />
    </div>
    <div className="bg-dark-700 p-4 rounded-lg text-center border border-dark-600">
      <img src="/JS-logo.png" alt="JavaScript" className="logo-spin" style={{ animationDelay: "2s" }} />
    </div>
    <div className="bg-dark-700 p-4 rounded-lg text-center border border-dark-600">
      <img src="/C-logo.png" alt="C#" className="logo-spin" style={{ animationDelay: "4s" }} />
    </div>
    <div className="bg-dark-700 p-4 rounded-lg text-center border border-dark-600">
      <img src="/SQL-logo.png" alt="SQL" className="logo-spin" style={{ animationDelay: "6s" }} />
    </div>
    <div className="bg-dark-700 p-4 rounded-lg text-center border border-dark-600">
      <img src="/aws-logo.png" alt="AWS" className="logo-spin" style={{ animationDelay: "8s" }} />
    </div>
    <div className="bg-dark-700 p-4 rounded-lg text-center border border-dark-600">
      <img src="/GitHub-logo.png" alt="GitHub" className="logo-spin" style={{ animationDelay: "10s" }} />
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}
