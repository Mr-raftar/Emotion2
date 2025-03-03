import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Music } from 'lucide-react';
import { useAppStore } from '../store';
import { getEmotionColor } from '../utils/helpers';

const MoodHistory: React.FC = () => {
  const { moodHistory } = useAppStore();
  
  if (moodHistory.length === 0) {
    return (
      <div className="bg-gray-900 bg-opacity-40 backdrop-blur-sm rounded-xl p-6 text-center">
        <p className="text-gray-400">No mood history yet. Start the emotion detection to track your moods!</p>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-900 bg-opacity-40 backdrop-blur-sm rounded-xl p-4">
      <h2 className="text-xl font-bold mb-4 text-white">Your Mood History</h2>
      
      <div className="space-y-3">
        {moodHistory.map((entry, index) => {
          const emotionColor = getEmotionColor(entry.emotion);
          const date = new Date(entry.timestamp);
          const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          
          return (
            <motion.div 
              key={entry.id}
              className="bg-gray-800 bg-opacity-50 rounded-lg p-3 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${emotionColor}20`, borderColor: emotionColor, borderWidth: 2 }}
              >
                <span className="capitalize text-sm font-medium" style={{ color: emotionColor }}>
                  {entry.emotion.substring(0, 1)}
                </span>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="capitalize font-medium text-white">{entry.emotion}</span>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Clock size={12} className="mr-1" />
                    {timeString}
                  </div>
                </div>
                
                {entry.song && (
                  <div className="flex items-center text-gray-400 text-xs mt-1 truncate">
                    <Music size={12} className="mr-1 flex-shrink-0" />
                    <span className="truncate">{entry.song.title}</span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MoodHistory;