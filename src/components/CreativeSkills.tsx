
import { motion } from 'framer-motion';
import { Code, Database, Globe, Palette, Award, Trophy, X, ZoomIn, Plus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useState } from 'react';

const CreativeSkills = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedCertification, setSelectedCertification] = useState(null);

  const skillCategories = [
    {
      title: "Web Development",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { 
          name: "HTML", 
          level: 95, 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
        },
        { 
          name: "CSS", 
          level: 90, 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
        },
        { 
          name: "JavaScript", 
          level: 60, 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
        },
        { 
          name: "React", 
          level: 70, 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
        },
        { 
          name: "Bootstrap", 
          level: 85, 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" 
        },
        { 
          name: "MongoDB", 
          level: 80, 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
        },
        { 
          name: "SQL", 
          level: 75, 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
        }
      ]
    },
    
    {
      title: "Languages and Tools",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      skills: [
        { 
          name: "Java", 
          level: 85, 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
        },
        { 
        name: "GitHub", 
        level: 75, 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        },
        { 
          name: "VS Code", 
          level: 95, 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" 
        },
        { 
          name: "Eclipse", 
          level: 80, 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg" 
        }
      ]
    }
  ];

  // Your certification images
  const certifications = [
    {
      title: "Java Programming",
      issuer: "CodeTantra ",
      year: "2025",
      image: "/lovable-uploads/03601718-7ed8-4f52-b925-129749fc8212.png"
    },
     {
      title: "HackIndia",
      issuer: "SingularityNet ",
      year: "2025",
      image: "/lovable-uploads/Hackindia.jpg"
    },
     {
      title: "Google AI Essentials",
      issuer: "Google via Coursera",
      year: "2025",
      image: "/lovable-uploads/bf9d4f48-8b91-44c8-a2af-84d534d85fe3.png"
    },
     {
      title: "AICTE Evaluated Patent Course",
      issuer: "Turnip Innovations",
      year: "2025",
      image: "/lovable-uploads/AICTE.jpg"
    },
   
    {
      title: "Software Testing - Elite",
      issuer: "NPTEL - IIT Kharagpur",
      year: "2024",
      image: "/lovable-uploads/dc7d5acc-6499-47df-bcd5-f893b509e7d3.png"
    },
    {
      title: "Cloud Computing - Elite + Silver",
      issuer: "NPTEL - IIT Kharagpur",
      year: "2024",
      image: "/lovable-uploads/cd89464d-f785-47b5-a48f-403c47dd0e6e.png"
    },
     {
      title: "Mern Stack Developer - Intern",
      issuer: "Zealous Tech Corp",
      year: "2024",
      image: "/lovable-uploads/mern.jpg"
    },
  
    {
      title: "Learnathon 2024 - Certificate of Participation",
      issuer: "ICT Academy",
      year: "2024",
      image: "/lovable-uploads/12669681-4c07-468d-9c0c-99b472d13f95.png"
    },
   
  ];

  // Achievement data with multiple achievements
  const achievements = [
    {
      title: "IoT-Based Secure Voting System ",
      description: "Won First Prize for IoT-Based Secure Voting System with Biometric Authentication Features include fingerprint verification real-time updates and automated result processing",
      year: "2025",
      images: [
        "/lovable-uploads/IOT1.jpg",
        "/lovable-uploads/IOT2.jpg",
        "/lovable-uploads/IOT3.jpg"
      ]
    },
    {
      title: "Engineers' Day 2024 – Paper Presentation",
      description: "Secured 2nd Prize in a paper presentation on Computing in Virtualization during Engineers Day 2024 Explored how virtualization enhances efficiency and sustainability with AI driven technologies",
      year: "2024",
      images: [
        "/lovable-uploads/ppt1.png",
        "/lovable-uploads/ppt2.png",
        "/lovable-uploads/Paperpresentation.jpg"
      ]
    },
  ];

  const CompactProgress = ({ percentage, delay = 0 }: { percentage: number; delay?: number }) => {
    return (
      <div className="flex items-center justify-center">
        <div className="relative w-16 h-16">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="2"
            />
            <motion.path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={`${percentage}, 100`}
              initial={{ strokeDasharray: "0, 100" }}
              whileInView={{ strokeDasharray: `${percentage}, 100` }}
              transition={{ duration: 1, delay, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: delay + 0.5 }}
              className="text-xs font-bold text-white"
            >
              {percentage}%
            </motion.span>
          </div>
        </div>
      </div>
    );
  };

  const handleImageClick = (achievement, imageIndex, event) => {
    event.stopPropagation();
    setSelectedAchievement(achievement);
    setSelectedImageIndex(imageIndex);
  };

  return(
    <section id="skills" className="py-12 bg-black/20">
      <div className="px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto w-full">
        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="group"
            >
              <Card className="w-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <motion.div
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.5 }}
                      className={`inline-flex p-3 rounded-full bg-gradient-to-r ${category.color} mb-3`}
                    >
                      <category.icon className="h-5 w-5 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                        className="flex items-center justify-between gap-2"
                      >
                        <div className="flex items-center gap-2 flex-1">
                          <img 
                            src={skill.logo} 
                            alt={skill.name}
                            className="w-5 h-5 flex-shrink-0"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <p className="text-sm font-medium text-white">{skill.name}</p>
                        </div>
                        <div className="flex-shrink-0">
                          <CompactProgress 
                            percentage={skill.level} 
                            delay={(categoryIndex * 0.1) + (skillIndex * 0.1)} 
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section - Horizontal Scroll with Zoom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Certifications
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Professional certifications and credentials
            </p>
          </div>

          <div className="overflow-x-auto pb-4">
              {/* Instruction for smaller screens */}
  <p className="text-sm text-gray-400 mb-2 ml-4 block md:hidden">
    👉 Swipe for More
  </p>
            <div className="flex gap-6 min-w-max px-4 md:px-0">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex-shrink-0 w-80 cursor-pointer"
                  onClick={() => setSelectedCertification(cert)}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 h-full overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-full object-contain bg-white transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4">
                        <ZoomIn className="h-6 w-6 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
                      <p className="text-gray-300 text-sm mb-1">{cert.issuer}</p>
                      <p className="text-blue-400 text-sm font-medium">{cert.year}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievements Section - Updated with individual image click handlers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Achievements
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Notable accomplishments and recognitions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="cursor-pointer"
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden group">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Trophy className="h-5 w-5 text-yellow-400" />
                      <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
                    </div>
                    
                    {/* Image Grid - 3+ layout with individual click handlers */}
                    <div className="mb-4">
                      <div className="grid grid-cols-2 gap-2 rounded-lg overflow-hidden">
                        {/* First image */}
                        <div 
                          className="aspect-video overflow-hidden cursor-pointer"
                          onClick={(e) => handleImageClick(achievement, 0, e)}
                        >
                          <img 
                            src={achievement.images[0]} 
                            alt={achievement.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        
                        {/* Second image */}
                        <div 
                          className="aspect-video overflow-hidden cursor-pointer"
                          onClick={(e) => handleImageClick(achievement, 1, e)}
                        >
                          <img 
                            src={achievement.images[1]} 
                            alt={achievement.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        
                        {/* Third image with +X overlay */}
                        <div 
                          className="relative aspect-video overflow-hidden col-span-2 cursor-pointer"
                          onClick={(e) => handleImageClick(achievement, 2, e)}
                        >
                          <img 
                            src={achievement.images[2]} 
                            alt={achievement.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          {achievement.images.length > 3 && (
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                              <div className="text-white text-center">
                                <Plus className="h-8 w-8 mx-auto mb-1" />
                                <span className="text-sm font-medium">+{achievement.images.length - 3} More</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div>
                      <p className="text-gray-300 text-sm mb-2">{achievement.description}</p>
                      <p className="text-blue-400 text-xs font-medium">{achievement.year}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certification Modal */}
        <Dialog open={!!selectedCertification} onOpenChange={() => setSelectedCertification(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] bg-navy-dark border-navy-medium">
            {selectedCertification && (
              <>
                <DialogHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Award className="h-6 w-6 text-green-400" />
                    </div>
                  </div>
                  <DialogTitle className="text-2xl font-bold text-white mb-2">
                    {selectedCertification.title}
                  </DialogTitle>
                  <DialogDescription className="text-gray-300 text-base">
                    {selectedCertification.issuer} - {selectedCertification.year}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="mt-6">
                  <div className="relative bg-white rounded-lg overflow-hidden">
                    <img 
                      src={selectedCertification.image} 
                      alt={selectedCertification.title}
                      className="w-full h-auto max-h-[60vh] object-contain"
                    />
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Achievement Modal/Lightbox - Fixed image containment */}
        <Dialog open={!!selectedAchievement} onOpenChange={() => setSelectedAchievement(null)}>
          <DialogContent className="max-w-5xl max-h-[95vh] bg-navy-dark border-navy-medium overflow-hidden">
            {selectedAchievement && (
              <>
                <DialogHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Trophy className="h-6 w-6 text-yellow-400" />
                    </div>
                  </div>
                  <DialogTitle className="text-2xl font-bold text-white mb-2">
                    {selectedAchievement.title}
                  </DialogTitle>
                  <DialogDescription className="text-gray-300 text-base">
                    {selectedAchievement.description}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="mt-6 flex flex-col max-h-[calc(95vh-200px)]">
                  <div className="relative bg-white rounded-lg overflow-hidden flex-1 min-h-0">
                    <div className="w-full h-full flex items-center justify-center p-4">
                      <img 
                        src={selectedAchievement.images[selectedImageIndex]} 
                        alt={selectedAchievement.title}
                        className="max-w-full max-h-full object-contain"
                        style={{ maxHeight: 'calc(95vh - 300px)' }}
                      />
                    </div>
                  </div>
                  
                  {/* Image navigation for multiple images */}
                  <div className="flex gap-2 mt-4 justify-center flex-shrink-0 overflow-x-auto pb-2">
                    {selectedAchievement.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                          selectedImageIndex === index ? 'border-accent-teal' : 'border-gray-600'
                        }`}
                      >
                        <img 
                          src={img} 
                          alt={selectedAchievement.title}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default CreativeSkills;
