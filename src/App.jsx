import { useState } from 'react'
import { Menu, X, Github, Linkedin, ChevronUp, Database, Server, Layers } from 'lucide-react'
import parkfinder from '../assets/images/parkfinder.png';
import movieBucketList from '../assets/images/moviebucketlist.png';
import neighborlyscreenshot from '../assets/images/neighborlyscreenshot.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-8">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="h-[60vh] flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            Dawan Sawyer
          </h1>
          <h2 className="text-2xl md:text-3xl mt-4 text-gray-400">Full Stack Developer</h2>
        </div>
      </header>


      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-300 to-pink-500 text-transparent bg-clip-text">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
            <p>
            I am a Full Stack Web Developer. Passionately studied full stack web development at the University of Pennsylvania. 
            I'm passionate about building applications with a focus on database API implementation and development. 
            My strengths include innovative problem-solving, creativity, and the ability to bring projects from concept to completion through effective teamwork.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-300 to-pink-500 text-transparent bg-clip-text">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Database className="w-8 h-8" />, title: 'MongoDB' },
              { icon: <Server className="w-8 h-8" />, title: 'Express' },
              { icon: <Layers className="w-8 h-8" />, title: 'React' },
              { icon: <Layers className="w-8 h-8" />, title: 'Node.js' },
            ].map((skill) => (
              <div
                key={skill.title}
                className="p-6 bg-slate-800 rounded-lg transform hover:scale-105 transition-transform"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r from-yellow-300 to-pink-500 rounded-lg">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-center">{skill.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-300 to-pink-500 text-transparent bg-clip-text">
            Projects
          </h2>
          <div className="space-y-20">
            {[
  {
    title: 'Park Finder',
    description: 'An application that finds nearby parks in your area by zip code, city, or state and also gives you the weather forecast for that area.',
    image: parkfinder,
    link: 'https://sawyer0.github.io/Park-Finder/',
  },
  {
    title: 'Movie Bucket List',
    description: 'A full stack MVC application that utilizes joins in MySQL to create many to many relationships that link movies and lists together by IDs.',
    image: movieBucketList,
    link: 'https://movie-buckelist.herokuapp.com/',
  },
  {
    title: 'Neighborly',
    description: 'A MERN stack application created in React with authorized user content, user signup and login. Uses CRUD functionality & MongoDB to store and update data.',
    image: neighborlyscreenshot,
    link: 'https://arcane-tor-45149.herokuapp.com/',
  },
            ].map((project, index) => (
              <div
                key={project.title}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg shadow-lg w-full h-64 object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-300 to-pink-500 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-300 to-pink-500 text-transparent bg-clip-text">
            Contact
          </h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md bg-slate-800 border-gray-700 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md bg-slate-800 border-gray-700 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md bg-slate-800 border-gray-700 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-yellow-300 to-pink-500 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
            <div className="mt-8 flex justify-center space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button
            onClick={scrollToTop}
            className="mb-4 p-2 bg-white rounded-full hover:bg-gray-200 transition-colors"
          >
            <ChevronUp className="w-6 h-6 text-slate-900" />
          </button>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Dawan Sawyer</p>
        </div>
      </footer>
    </div>
  )
}

export default App