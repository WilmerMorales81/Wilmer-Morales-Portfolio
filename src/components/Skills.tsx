'use client'

import React from 'react'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { 
          name: 'React', 
          level: 90,
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        { 
          name: 'JavaScript', 
          level: 95,
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        },
        { 
          name: 'HTML/CSS', 
          level: 90,
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
        },
        { 
          name: 'Redux', 
          level: 85,
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
        },
        { 
          name: 'TypeScript', 
          level: 80,
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
        },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { 
          name: 'Node.js', 
          level: 85,
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
        },
        { 
          name: 'Express.js', 
          level: 80,
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
        },
        { 
          name: 'C++', 
          level: 75,
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
        },
        { 
          name: 'MongoDB', 
          level: 75,
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
        },
        { 
          name: 'SQL', 
          level: 70,
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
        },
      ]
    },
    {
      title: 'Tools & Cloud',
      skills: [
        { 
          name: 'Git', 
          level: 90,
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
        },
        { 
          name: 'Google Cloud', 
          level: 85,
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg'
        },
        { 
          name: 'Docker', 
          level: 75,
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
        },
        { 
          name: 'AWS', 
          level: 70,
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'
        },
        { 
          name: 'VS Code', 
          level: 95,
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
        },
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-dark-700 p-6 rounded-lg shadow-lg border border-dark-600">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={skill.logo} 
                          alt={skill.name}
                          className="w-6 h-6"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-600 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-primary-400 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Other Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'REST APIs', 'GraphQL', 'Redux', 'Jest', 'Cypress', 'CI/CD',
              'Responsive Design', 'SEO', 'Performance', 'Accessibility',
              'Team Leadership', 'Problem Solving', 'C++', 'Google Cloud'
            ].map((skill) => (
              <div
                key={skill}
                className="bg-dark-700 px-4 py-3 rounded-lg shadow-md text-center border border-dark-600 hover:border-primary-500 transition-colors duration-200"
              >
                <span className="text-gray-300 font-medium text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 