import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FeaturedProjects = () => {
  const projects = [
   {
  title: "Asify - E-Learning Platform",
  description: "Interactive e-learning platform offering HTML, CSS, and JavaScript courses with a clean UI and responsive design.",
  longDescription: "Asify is a personalized e-learning platform designed and developed by Asraf. It provides beginner-friendly courses on HTML, CSS, and JavaScript. The platform is mobile-responsive and includes a clean interface for learners to easily navigate and learn at their own pace.",
  tech: ["HTML", "CSS","Bootstrap"],
  github: "https://github.com/asrafaleem/E-learning-web",
  demo: "https://asrafaleem.github.io/E-learning-web/",
  image: "/lovable-uploads/Asify.png",
  category: "Frontend",
  status: "Live"
},

    {
      title: "Asraf ChatBot",
      description: "Custom based chatbot with intelligent conversational abilities tailored for personal and educational use.",
      longDescription: "Asraf ChatBot is a custom-built conversational assistant. Built with React and Bootstrap, it helps users get instant answers, explanations about Asraf.",
      tech: ["CSS", "Bootstrap", "React"],
      github: "https://github.com/asrafaleem/Chatbot",
      demo: "https://asrafaleem.github.io/Chatbot/",
      image: "/lovable-uploads/chatbot.png",
      category: "React",
      status: "Live"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-500';
      case 'Beta': return 'bg-yellow-500';
      case 'Development': return 'bg-blue-500';
      case 'Planning': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my latest work
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden h-full">
                <div className="relative">
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <div className="absolute top-4 right-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(project.status)}`}>
                        {project.status}
                      </div>
                    </div>

                    <div className="absolute top-4 left-4">
                      <div className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm text-white border border-white/30">
                        {project.category}
                      </div>
                    </div>

                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => window.open(project.github, '_blank')}
                          className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                        >
                          <Github className="h-4 w-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => window.open(project.demo, '_blank')}
                          className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <motion.h3 
                      className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2 flex items-center gap-2">
                        <Code className="h-4 w-4" />
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <motion.span
                            key={tech}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="flex-1 bg-transparent border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500 transition-all"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-3 text-lg"
            onClick={() => window.open('https://github.com/asrafaleem?tab=repositories', '_blank')}
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
