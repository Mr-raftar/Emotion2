import React from 'react';
import { motion } from 'framer-motion';
import { Palette } from 'lucide-react';
import { useAppStore } from '../store';
import { Theme } from '../types';

const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useAppStore();
  
  const themes: { id: Theme; name: string; color: string }[] = [
    { id: 'cyberpunk', name: 'Cyberpunk', color: '#f700ff' },
    { id: 'vaporwave', name: 'Vaporwave', color: '#00ffd5' },
    { id: 'glassmorphism', name: 'Glassmorphism', color: '#ffffff' },
  ];
  
  return (
    <motion.div 
      className="fixed bottom-4 right-4 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative group">
        <motion.button
          className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Palette className="text-purple-400" size={20} />
        </motion.button>
        
        <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
          <div className="bg-gray-900 rounded-lg p-2 shadow-xl border border-gray-800">
            <p className="text-xs text-gray-400 mb-2 px-2">Select Theme</p>
            {themes.map((t) => (
              <motion.button
                key={t.id}
                className={`flex items-center w-full px-3 py-2 rounded-md text-left ${
                  theme === t.id ? 'bg-gray-800' : 'hover:bg-gray-800'
                }`}
                onClick={() => setTheme(t.id)}
                whileHover={{ x: 2 }}
              >
                <div 
                  className="w-3 h-3 rounded-full mr-2" 
                  style={{ backgroundColor: t.color }}
                />
                <span className="text-sm text-white">{t.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ThemeSelector;