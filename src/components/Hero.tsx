'use client'

import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="section-padding pt-24 bg-gradient-to-br from-dark-800 to-dark-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hi! I'm <span className="text-primary-400">Wilmer Morales</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Passionate Web developer with expertise in React and NodeJS
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="btn-primary inline-flex items-center justify-center"
              >
                View My Work
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
                "Turning ideas into elegant code solutions."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-dark-700 p-4 rounded-lg text-center border border-dark-600">
                  <div className="text-primary-400 font-semibold">🏆</div>
                  <div className="text-sm font-medium text-gray-300">Google WOW Hackathon Winner</div>
                </div>
                <div className="bg-dark-700 p-4 rounded-lg text-center border border-dark-600">
                  <div className="text-primary-400 font-semibold">📊</div>
                  <div className="text-sm font-medium text-gray-300">@GSSoC'23 Rank-134</div>
                </div>
                <div className="bg-dark-700 p-4 rounded-lg text-center border border-dark-600">
                  <div className="text-primary-400 font-semibold">🥈</div>
                  <div className="text-sm font-medium text-gray-300">SIH 2022 Runner-up</div>
                </div>
                <div className="bg-dark-700 p-4 rounded-lg text-center border border-dark-600">
                  <div className="text-primary-400 font-semibold">☁️</div>
                  <div className="text-sm font-medium text-gray-300">Google Cloud Facilitator</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary-400 shadow-xl">
                <img
                  src="/skills-logos.png"
                  alt="Wilmer Morales"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center" style={{ display: 'none' }}>
                  <div className="text-white text-6xl font-bold">WM</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 