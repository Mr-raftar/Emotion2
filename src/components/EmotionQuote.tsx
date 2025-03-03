import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useAppStore } from '../store';
import { getEmotionQuote, getEmotionColor, getEmotionImage } from '../utils/helpers';

const EmotionQuote: React.FC = () => {
  const { currentEmotion } = useAppStore();
  const [quote, setQuote] = useState('');
  const emotionColor = getEmotionColor(currentEmotion);
  
  useEffect(() => {
    setQuote(getEmotionQuote(currentEmotion));
  }, [currentEmotion]);
  
  return (
    <motion.div 
      className="bg-gray-900 bg-opacity-40 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start gap-3">
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${emotionColor}20` }}
        >
          <Quote style={{ color: emotionColor }} size={18} />
        </div>
        
        <div>
          <motion.p 
            className="text-white text-lg italic"
            key={quote} // This forces re-animation when quote changes
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            "{quote}"
          </motion.p>
          <p className="text-gray-400 text-sm mt-2">AI-generated for your {currentEmotion} mood</p>
        </div>
      </div>
    </motion.div>
  );
};

export default EmotionQuote;