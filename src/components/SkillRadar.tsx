
import { motion } from 'framer-motion';

interface SkillRadarProps {
  skills: Array<{ name: string; level: number }>;
}

const SkillRadar = ({ skills }: SkillRadarProps) => {
  const centerX = 150;
  const centerY = 150;
  const maxRadius = 120;

  const getPointPosition = (index: number, level: number) => {
    const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2;
    const radius = (level / 100) * maxRadius;
    return {
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius
    };
  };

  const createPath = () => {
    const points = skills.map((skill, index) => 
      getPointPosition(index, skill.level)
    );
    
    const pathData = points.reduce((path, point, index) => {
      const command = index === 0 ? 'M' : 'L';
      return `${path} ${command} ${point.x} ${point.y}`;
    }, '');
    
    return `${pathData} Z`;
  };

  return (
    <div className="relative">
      <svg width="300" height="300" className="mx-auto">
        {/* Background circles */}
        {[20, 40, 60, 80, 100].map(percentage => (
          <circle
            key={percentage}
            cx={centerX}
            cy={centerY}
            r={(percentage / 100) * maxRadius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
          />
        ))}
        
        {/* Axis lines */}
        {skills.map((_, index) => {
          const endPoint = getPointPosition(index, 100);
          return (
            <line
              key={index}
              x1={centerX}
              y1={centerY}
              x2={endPoint.x}
              y2={endPoint.y}
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
            />
          );
        })}
        
        {/* Skill area */}
        <motion.path
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          d={createPath()}
          fill="url(#skillGradient)"
          stroke="#3B82F6"
          strokeWidth="2"
        />
        
        {/* Skill points */}
        {skills.map((skill, index) => {
          const point = getPointPosition(index, skill.level);
          return (
            <motion.circle
              key={skill.name}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="#3B82F6"
              stroke="#ffffff"
              strokeWidth="2"
            />
          );
        })}
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Skill labels */}
      <div className="absolute inset-0">
        {skills.map((skill, index) => {
          const labelPoint = getPointPosition(index, 130);
          return (
            <div
              key={skill.name}
              className="absolute text-sm font-medium transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: labelPoint.x,
                top: labelPoint.y
              }}
            >
              {skill.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillRadar;
