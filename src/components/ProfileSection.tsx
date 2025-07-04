
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { User, Code, Target, Heart } from 'lucide-react';

const ProfileSection = () => {
  return (
    <section id="about" className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-accent-teal to-accent-sky bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-navy-medium/20 border-navy-medium/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-accent-teal mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 text-text-primary">Who I Am</h3>
                      <p className="text-sm text-text-secondary">
                        Final year BTech IT student passionate about crafting innovative solutions through code.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Code className="h-5 w-5 text-accent-teal mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 text-text-primary">What I Do</h3>
                      <p className="text-sm text-text-secondary">
                        Front End development with modern technologies
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-accent-teal mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 text-text-primary">My Goal</h3>
                      <p className="text-sm text-text-secondary">
                        Transforming ideas into digital reality while continuously learning and growing.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-accent-teal mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 text-text-primary">My Passion</h3>
                      <p className="text-sm text-text-secondary">
                        Problem-solving, clean code, and building solutions that make a difference.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-navy-medium/20 border-navy-medium/30 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-accent-teal mb-1">5+</div>
                  <div className="text-sm text-text-secondary">Projects</div>
                </CardContent>
              </Card>
              <Card className="bg-navy-medium/20 border-navy-medium/30 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-accent-teal mb-1">15+</div>
                  <div className="text-sm text-text-secondary">Certifications</div>
                </CardContent>
              </Card>
              <Card className="bg-navy-medium/20 border-navy-medium/30 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-accent-teal mb-1">500+</div>
                  <div className="text-sm text-text-secondary">Problems Solved</div>
                </CardContent>
              </Card>
              <Card className="bg-navy-medium/20 border-navy-medium/30 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-accent-teal mb-1">8.7+</div>
                  <div className="text-sm text-text-secondary">CGPA</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
