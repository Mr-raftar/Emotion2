import React from 'react';
import { motion } from 'framer-motion';

const SoundWave: React.FC = () => {
  // Create an array of bar heights
  const bars = Array.from({ length: 12 }, () => Math.random() * 100);
  
  return (
    <div className="flex items-center h-12 gap-[2px]">
      {bars.map((height, index) => (
        <motion.div
          key={index}
          className="w-1 bg-purple-500"
          initial={{ height: 4 }}
          animate={{ 
            height: [4, height / 4, 4],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default SoundWave;