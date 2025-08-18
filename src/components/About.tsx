'use client'

import React from 'react'

export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          "An investment in knowledge pays the best interest" - Benjamin Franklin
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Who I Am
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
              Enthusiastic and detail-oriented software developer with a Computer Science degree and formal training from 
              Nashville Software School’s immersive Software Development Bootcamp. Driven by continuous learning, completing 
              NSS’s Cloud Deployment Fundamentals workshops and expanding into AI-powered solutions. Recognized for clear 
              communication with teammates, stakeholders, and clients; adaptability in fast-paced environments.
              </p>              
              <p>
                I believe in writing clean, maintainable code and staying up-to-date with the latest 
                technologies. When I'm not coding, you can find me contributing to open-source 
                projects, participating in hackathons, or sharing my knowledge with the developer community.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-dark-700 p-4 rounded-lg border border-dark-600">
                <div className="font-semibold text-white">Location</div>
                <div className="text-gray-300">Franklin, TN</div>
              </div>
              <div className="bg-dark-700 p-4 rounded-lg border border-dark-600">
                <div className="font-semibold text-white">Experience</div>
                <div className="text-gray-300">1+ Years</div>
              </div>
              <div className="bg-dark-700 p-4 rounded-lg border border-dark-600">
                <div className="font-semibold text-white">Education</div>
                <div className="text-gray-300">Computer Science Degree</div>
              </div>
              <div className="bg-dark-700 p-4 rounded-lg border border-dark-600">
                <div className="font-semibold text-white">Availability</div>
                <div className="text-gray-300">Open to Work</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary-400 shadow-lg">
                <img
                  src="/wilmer-morales.png"
                  alt="Wilmer Morales"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
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