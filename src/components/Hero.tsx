"use client";

import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="section-padding pt-24 bg-gradient-to-br from-dark-600 to-dark-900 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('/background.png')`
      }}
    >
      {/* Top Right Buttons */}
      <div className="absolute top-32 right-8 z-10 flex flex-row space-x-2 sm:space-x-4">
        {/* Download Resume Button */}
        <div className="group relative">
          <a
            href="/resume.pdf"
            download
            className="bg-primary-600 hover:bg-primary-700 text-white p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-1 sm:space-x-2 pr-2 sm:pr-4"
            title="Download Resume"
          >
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="text-xs sm:text-sm font-medium whitespace-nowrap">Resume</span>
          </a>
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Download Resume
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
          </div>
        </div>

        {/* LinkedIn Button */}
        <div className="group relative">
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-1 sm:space-x-2 pr-2 sm:pr-4"
            title="Connect on LinkedIn"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="text-xs sm:text-sm font-medium whitespace-nowrap">LinkedIn</span>
          </a>
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Connect on LinkedIn
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
          </div>
        </div>
      </div>

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
              <a
                href="/resume.pdf"
                download
                className="btn-primary inline-flex items-center justify-center bg-transparent border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white"
              >
                Download Resume
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
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
