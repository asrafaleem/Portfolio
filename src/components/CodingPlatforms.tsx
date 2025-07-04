
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CodingPlatforms = () => {
  const platforms = [
    {
      name: "CodeChef",
      stats: "Solved 500+ problems",
      rating: "5⭐ (600+)",
      color: "from-blue-400 to-blue-600",
      icon: "👨‍🍳",
      href: "https://codechef.com/users/asraf"
    },
    {
      name: "HackerRank",
      stats: "Silver level",
      rating: "3⭐ Problem Solving",
      color: "from-green-400 to-green-600",
      icon: "🏆",
      href: "https://hackerrank.com/asraf"
    },
    {
      name: "LeetCode",
      stats: "20+ Problems",
      rating: "Active Solver",
      color: "from-orange-400 to-orange-600",
      icon: "💡",
      href: "https://leetcode.com/asraf"
    },
    {
      name: "GeeksforGeeks",
      stats: "15+ Problems",
      rating: "---",
      color: "from-green-500 to-teal-500",
      icon: "💻",
      href: "https://auth.geeksforgeeks.org/user/asraf"
    }
  ];

  // Determine dynamic grid columns
  const gridCols = platforms.length <= 2
    ? `grid-cols-${platforms.length}`
    : platforms.length <= 4
    ? 'grid-cols-2 md:grid-cols-4'
    : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6';

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Coding Platforms
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Competitive programming achievements across platforms
          </p>
        </motion.div>

        <div className={`grid gap-4 ${gridCols}`}>
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                <CardContent className="p-3">
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      className="text-2xl mb-2"
                    >
                      {platform.icon}
                    </motion.div>
                    <h3 className="text-sm font-bold text-white mb-1">{platform.name}</h3>
                    <p className="text-xs text-gray-400 mb-1">{platform.stats}</p>
                    <p className="text-xs text-gray-500 mb-3">{platform.rating}</p>

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                      className={`h-1 bg-gradient-to-r ${platform.color} rounded-full mb-3`}
                    />

                 {/*    <Button
                      size="sm"
                      variant="outline"
                      className={`w-full text-xs bg-gradient-to-r ${platform.color} border-0 text-white hover:opacity-90`}
                      onClick={() => window.open(platform.href, '_blank')}
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Visit
                    </Button> */}
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

export default CodingPlatforms;
