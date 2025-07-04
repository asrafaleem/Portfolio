
import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const ProfilePhoto = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex flex-col items-center mb-8"
    >
      <div className="relative mb-4">
        <Avatar className="w-32 h-32 md:w-40 md:h-40 shadow-2xl border-4 border-navy-medium/50">
          <AvatarImage 
            src="/lovable-uploads/ad712c8c-e962-4795-91af-305e55d67924.png"
            alt="Asraf A - Profile Photo"
            className="object-cover"
          />
          <AvatarFallback className="bg-navy-medium text-accent-teal text-2xl md:text-3xl font-bold">
            AS
          </AvatarFallback>
        </Avatar>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-teal/20 to-accent-sky/20 blur-xl -z-10" />
      </div>
    </motion.div>
  );
};

export default ProfilePhoto;
