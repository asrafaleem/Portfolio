
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EducationSection = () => {
  const educationData = [
    {
      level: "BTech Information Technology",
      institution: "Muthayammal Engineering College",
      duration: "2022 - 2026",
      status: "Final Year",
      grade: "8.7 CGPA",
      description: "Specializing in Front-End development, Java , and modern web technologies",
      icon: GraduationCap,
      color: "from-accent-teal to-accent-sky"
    },
    {
      level: "12th Grade (Maths-Biology)",
      institution: "Sree Gokulam Matric Hr Sec School",
      duration: "2021 - 2022",
      status: "Completed",
      grade: "78%",
      description: "PCM (Physics, Chemistry, Mathematics) with Biology",
      icon: BookOpen,
      color: "from-accent-sky to-accent-teal"
    },
    {
      level: "10th Grade",
      institution: "Sree Gokulam Matric Hr Sec School",
      duration: "2019 - 2020",
      status: "Completed",
      grade: "89%",
      description: "All subjects with distinction",
      icon: Award,
      color: "from-accent-teal to-accent-sky"
    }
  ];

  return (
    <section id="education" className="py-12 px-4 bg-navy-medium/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-accent-teal to-accent-sky bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            My academic journey and educational achievements
          </p>
        </motion.div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.level}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group"
            >
              <Card className="bg-navy-medium/20 backdrop-blur-sm border-navy-medium hover:bg-navy-medium/30 transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.5 }}
                      className={`flex-shrink-0 p-4 rounded-full bg-gradient-to-r ${edu.color}`}
                    >
                      <edu.icon className="h-6 w-6 text-navy-dark" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-text-primary mb-1">
                            {edu.level}
                          </h3>
                          <p className="text-accent-teal font-semibold">
                            {edu.institution}
                          </p>
                        </div>
                        
                        <div className="flex flex-col md:items-end space-y-1">
                          <div className="flex items-center gap-2 text-text-secondary">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{edu.duration}</span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            edu.status === 'Final Year' 
                              ? 'bg-accent-teal/20 text-accent-teal border border-accent-teal/30' 
                              : 'bg-accent-sky/20 text-accent-sky border border-accent-sky/30'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                      </div>

                      <p className="text-text-secondary text-sm leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Grade/Score */}
                      <div className="flex items-center gap-3">
                        <div className={`px-4 py-2 rounded-lg bg-gradient-to-r ${edu.color} bg-opacity-20 border border-accent-teal/30`}>
                          <span className="text-text-primary font-bold text-lg">
                            {edu.grade}
                          </span>
                        </div>
                        <div className="h-8 w-px bg-navy-medium"></div>
                        <div className="text-text-secondary text-sm">
                          Academic Performance
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
