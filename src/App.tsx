import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, Download, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

const SKILLS = [
  // Programming Languages
  'Java', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML', 'CSS', 'XML',
  
  // Frontend Development
  'React.js', 'Redux', 'Next.js', 'Vue.js',
  'Material-UI', 'Bootstrap', 'Tailwind CSS',
  'Webpack', 'Vite', 'Jest', 'React Testing Library',
  
  // Backend Development
  'Spring Boot', 'Spring Security', 'Spring Cloud',
  'Node.js', 'Express.js', 'NestJS',
  'REST APIs', 'GraphQL', 'WebSocket',
  
  // Database & ORM
  'MySQL', 'PostgreSQL', 'MongoDB', 'Redis',
  'Hibernate', 'JPA', 'Sequelize', 'Prisma',
  
  // Cloud & DevOps
  'AWS (EC2, S3, RDS, Lambda)',
  'Docker', 'Kubernetes', 'Jenkins',
  'CI/CD', 'GitHub Actions',
  
  // Architecture & Patterns
  'Microservices', 'Event-Driven Architecture',
  'Design Patterns', 'Domain-Driven Design',
  'RESTful Architecture',
  
  // Message Queues
  'Apache Kafka', 'RabbitMQ',
  
  // Testing
  'JUnit', 'Mockito', 'TestNG',
  'Selenium', 'Cypress', 'Postman',
  
  // Version Control & Tools
  'Git', 'GitHub', 'BitBucket',
  'JIRA', 'Confluence',
  
  // Methodologies
  'Agile/Scrum', 'TDD', 'CI/CD'
];

const PROJECTS = [
  {
    title: 'Leader Election Protocol Implementation',
    description: 'This project is an implementation of the Bully Leader Election Algorithm in Python, designed for distributed systems where nodes must elect a leader. Using ZeroMQ for inter-process communication, it simulates a network of nodes that coordinate to elect the node with the highest ID as the leader, even in the presence of node failures. The algorithm ensures fault tolerance and self-organization, making it a valuable example of distributed computing principles.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600',
    link: 'https://github.com/Sirireddykatta/Leader-Election-Protocol'
  },
  {
    title: 'AI-Driven Roommate Matching Platform',
    description: 'An AI-powered roommate matching system built with Django and machine learning, using the KNN algorithm to match users based on lifestyle, cleanliness, and social habits. The platform automates the roommate search process, ensuring accurate, bias-free, and real-time matching while maintaining scalability, security, and user privacy.',
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=600',
    link: 'https://github.com/Sirireddykatta/AI-driven-roommate-matching-system.git'
  },
  {
    title: 'Emotion-Based Music Player',
    description: 'An AI-powered music player that uses machine learning to detect user emotions based on facial expressions and plays music accordingly. Built with Python, OpenCV, and Eel, the project integrates a HTML, CSS, and JavaScript frontend for an interactive interface. It enhances user experience by providing personalized music recommendations based on real-time emotion recognition.',
    image: 'https://images.unsplash.com/photo-1599689018034-48e2ead82951?auto=format&fit=crop&w=600',
    link: 'https://github.com/Sirireddykatta/Emotion-based-music-player.git'
  }
];

function App() {
  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1RcTJcElSmpTsNH-bGkReQrfr8I2q-1y8/view?usp=sharing', '_blank');
  };

  return (
    <div className="min-h-screen bg-dark">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full bg-dark/80 backdrop-blur-sm z-50 border-b border-gray-800"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold gradient-text">Sirichandana Katta</span>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <Link
                  key={item}
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  className="nav-link capitalize"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Sirichandana</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-400 mb-8">
              <TypeAnimation
                sequence={[
                  'Software Engineer',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'Java Expert',
                  2000,
                ]}
                repeat={Infinity}
              />
            </div>
            <div className="flex justify-center space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className="btn-primary"
              >
                <Download size={20} />
                <span>Download CV</span>
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/Sirireddykatta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light hover:text-primary"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/sirichandana-katta/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light hover:text-primary"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-16"
            >
              <ChevronDown size={32} className="mx-auto text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-heading">About Me</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-lg text-gray-300 leading-relaxed"
                  >
                    As a Software Engineer with a Master's in Computer Science from the University of North Texas, I bring a unique blend of academic excellence and practical expertise to the world of software development. My journey in technology has been driven by an insatiable curiosity and a commitment to creating impactful solutions that make a difference.
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-300 leading-relaxed"
                  >
                    I specialize in full-stack development, with particular expertise in Java, Spring Boot, and modern JavaScript frameworks. My experience spans from developing scalable microservices architectures to creating intuitive user interfaces. I'm particularly passionate about distributed systems and cloud computing, having worked extensively with AWS services and container orchestration.
                  </motion.p>
                </div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-primary mb-4">What I Bring to the Table</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <Code2 className="w-5 h-5 text-primary mt-1 mr-3" />
                        <span>Strong foundation in software architecture and design patterns</span>
                      </li>
                      <li className="flex items-start">
                        <Briefcase className="w-5 h-5 text-primary mt-1 mr-3" />
                        <span>Experience with enterprise-level applications and microservices</span>
                      </li>
                      <li className="flex items-start">
                        <User className="w-5 h-5 text-primary mt-1 mr-3" />
                        <span>Excellent problem-solving and analytical skills</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I'm always eager to take on new challenges and contribute to innovative projects that push the boundaries of what's possible in software development. My goal is to create elegant, efficient solutions that not only meet technical requirements but also deliver exceptional user experiences.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-dark/50">
        <div className="container mx-auto px-6">
          <h2 className="section-heading">Skills</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {SKILLS.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="skill-card"
              >
                <h3 className="text-lg font-semibold text-light">{skill}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="section-heading">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="project-card"
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=600';
                  }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-light mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-secondary"
                  >
                    View Project <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-dark/50">
        <div className="container mx-auto px-6">
          <h2 className="section-heading">Contact</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-light mb-2">Name</label>
                <input type="text" id="name" className="contact-input" />
              </div>
              <div>
                <label htmlFor="email" className="block text-light mb-2">Email</label>
                <input type="email" id="email" className="contact-input" />
              </div>
              <div>
                <label htmlFor="message" className="block text-light mb-2">Message</label>
                <textarea id="message" rows={4} className="contact-input"></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full btn-primary justify-center"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Sirichandana Katta. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;