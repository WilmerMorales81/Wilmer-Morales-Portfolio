'use client'

import React from 'react'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Front-End',
      skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Bootstrap'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Back-End',
      skills: ['C#', 'ASP.NET Core', 'RESTful APIs'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: 'Databases',
      skills: ['SQL Server', 'ADO.NET', 'Entity Framework'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS (S3, CloudFront, EC2, ECR, CLI)', 'Docker', 'GitHub Actions CI/CD'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      title: 'Testing',
      skills: ['Manual testing', 'Unit-testing fundamentals'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Analytics & Reporting',
      skills: ['SQL queries', 'Excel (pivot tables, charts)'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Tools',
      skills: ['Visual Studio', 'VS Code', 'Git/GitHub', 'Postman'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Methodologies',
      skills: ['Agile/Scrum'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  const continuingDevelopment = [
    {
      title: 'Cloud Deployment Fundamentals',
      institution: 'Nashville Software School',
      date: 'August 2025',
      items: [
        'Workshop 1: Cloud concepts, CI/CD pipelines, deploying a static front-end to AWS (S3, CloudFront).',
        'Workshop 2: Docker fundamentals, GitHub Actions workflows, deploying a C# API to AWS (EC2, ECR, CLI).',
        'Workshop 3: RDS (managed relational databases), Docker networking (container-to-container communication, port mapping), and Docker Compose to orchestrate and mimic production locally.'
      ]
    },
    {
      title: 'Advanced Database Development',
      institution: 'Nashville Software School',
      date: '2025 (in progress, 50%)',
      items: [
        'ERDs, Data Normalization, and Database Design',
        'SQL queries, Subqueries, CTEs, and Window Functions',
        'Views, Stored Procedures, Triggers, and Functions',
        'Transactions, Concurrency Control, and Query Optimization'
      ]
    },
    {
      title: 'Data Structures & Algorithms',
      institution: 'Nashville Software School',
      date: '2025 (in progress, 50%)',
      items: [
        'Big-O analysis',
        'Core data structures: arrays & 2D array, linked lists, stacks/queues, hash maps/sets',
        'Algorithmic patterns: sliding window, binary search & variants, sorting',
        'Problem solving: trade-off analysis, code optimization, interview communication'
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-dark-800">
      <div className="max-w-7xl mx-auto">
        {/* Core Skills Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Core Skills
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to build robust applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-dark-700 p-6 rounded-xl shadow-lg border border-dark-600 hover:border-primary-500 transition-all duration-300 group">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-500/10 rounded-lg mb-4 group-hover:bg-primary-500/20 transition-colors duration-300">
                <div className="text-primary-400 group-hover:text-primary-300 transition-colors duration-300">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-4 text-center">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="text-gray-300 text-sm text-center px-3 py-2 bg-dark-600 rounded-lg hover:bg-dark-500 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Continuing Development Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Continuing Development
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ongoing learning and skill development to stay current with industry trends
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {continuingDevelopment.map((item, index) => (
            <div key={index} className="bg-dark-700 p-6 rounded-xl shadow-lg border border-dark-600 hover:border-primary-500 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primary-400 font-medium">
                    {item.institution}
                  </p>
                </div>
                <span className="text-sm text-gray-400 bg-dark-600 px-3 py-1 rounded-full">
                  {item.date}
                </span>
              </div>
              <ul className="space-y-3">
                {item.items.map((listItem, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {listItem}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Always learning and expanding my skill set to deliver better solutions
          </p>
          <a
            href="#contact"
  
            className="btn-primary inline-flex items-center"
          >
            Let's Work Together
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
} 