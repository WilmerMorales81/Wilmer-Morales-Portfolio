
export default function Projects() {
  const projects = [
    {
      title: 'CRUD Bank App',
      description: 'A comprehensive banking application with full CRUD operations for managing accounts, transactions, and user data. Features secure authentication and real-time balance updates.',
      image: '/CrudBankLogo.PNG',
      technologies: ['C#', 'ASP.NET Core', 'SQL Server', 'Entity Framework', 'Bootstrap'],
      liveUrl: 'https://crud-bank-app.vercel.app',
      githubUrl: '#'
    },

    {
      title: 'Personal Dashboard App',
      description: 'A comprehensive personal dashboard application that displays weather information, user data, and various widgets. Features responsive design and integration with external APIs for real-time data.',
      image: '/personal-dashboard-logo.png',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Weather API', 'Responsive Design'],
      liveUrl: 'https://personal-dashboard-nine-chi.vercel.app',
      githubUrl: '#'
    },
    {
      title: 'Dog Adoption App',
      description: 'A web application for dog adoption that helps connect potential adopters with dogs in need of homes. Features include dog profiles, search functionality, and adoption application forms.',
      image: '/dog-adoption-logo.jpg',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Responsive Design', 'Web Forms'],
      liveUrl: 'https://dog-adoption-app-iota.vercel.app',
      githubUrl: '#'
    }
  ]

  return (
    <section id="projects" className="section-padding bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-dark-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-dark-600">
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-white mb-3">{project.title}</h4>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-900 text-primary-300 text-sm rounded-full border border-primary-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="btn-primary text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="btn-secondary text-sm"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            View More on GitHub
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
} 