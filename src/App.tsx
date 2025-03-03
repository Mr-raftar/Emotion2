import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Music, History } from 'lucide-react';
import { useAppStore } from './store';
import EmotionDetector from './components/EmotionDetector';
import MusicPlayer from './components/MusicPlayer';
import MoodHistory from './components/MoodHistory';
import ThemeSelector from './components/ThemeSelector';
import EmotionQuote from './components/EmotionQuote';

function App() {
  const { theme, currentEmotion } = useAppStore();

  // Apply theme-specific styles to the body
  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(`theme-${theme}`);
    
    return () => {
      document.body.className = '';
    };
  }, [theme]);

  return (
    <div className={`min-h-screen bg-gray-900 text-white pb-20`}>
      {/* Theme-specific background effects */}
      {theme === 'cyberpunk' && (
        <div className="fixed inset-0 z-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-80" />
      )}
      {theme === 'vaporwave' && (
        <div className="fixed inset-0 z-0 bg-gradient-to-br from-pink-500 via-purple-700 to-indigo-900 opacity-70" />
      )}
      {theme === 'glassmorphism' && (
        <div className="fixed inset-0 z-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-90" />
      )}
      
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} 
      />
      
      <div className="relative z-10">
        <header className="py-6 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="flex items-center justify-between"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <Brain className="text-purple-400" size={28} />
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  MoodSync AI
                </h1>
              </div>
              
              <div className="text-sm text-gray-400">
                AI-Powered Emotion Music Recommender
              </div>
            </motion.div>
          </div>
        </header>
        
        <main className="max-w-7xl mx-auto px-4 py-6 space-y-10">
          <section>
            <motion.div 
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Brain className="text-purple-400" size={20} />
              <h2 className="text-xl font-bold">Emotion Detection</h2>
            </motion.div>
            
            <EmotionDetector />
          </section>
          
          <section>
            <EmotionQuote />
          </section>
          
          <section>
            <motion.div 
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Music className="text-purple-400" size={20} />
              <h2 className="text-xl font-bold">Music Recommendations</h2>
            </motion.div>
            
            <MusicPlayer />
          </section>
          
          <section>
            <motion.div 
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <History className="text-purple-400" size={20} />
              <h2 className="text-xl font-bold">Mood History</h2>
            </motion.div>
            
            <MoodHistory />
          </section>
        </main>
      </div>
      
      <ThemeSelector />
    </div>
  );
}

export default App;