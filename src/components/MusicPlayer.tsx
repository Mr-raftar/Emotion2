import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Music } from 'lucide-react';
import { useAppStore } from '../store';
import { mockFetchSongs, getEmotionImage } from '../utils/helpers';

const MusicPlayer: React.FC = () => {
  const { 
    currentEmotion, 
    songs, 
    setSongs, 
    currentSong, 
    setCurrentSong,
    addToHistory
  } = useAppStore();

  useEffect(() => {
    const fetchSongs = async () => {
      const newSongs = await mockFetchSongs(currentEmotion);
      setSongs(newSongs);
      
      // Auto-select the first song if none is selected
      if (!currentSong && newSongs.length > 0) {
        setCurrentSong(newSongs[0]);
        
        // Add to history with the song
        addToHistory({
          emotion: currentEmotion,
          timestamp: Date.now(),
          song: newSongs[0]
        });
      }
    };
    
    fetchSongs();
  }, [currentEmotion, setSongs, currentSong, setCurrentSong, addToHistory]);

  const handleSongSelect = (song: any) => {
    setCurrentSong(song);
    
    // Add to history with the song
    addToHistory({
      emotion: currentEmotion,
      timestamp: Date.now(),
      song
    });
    
    // Open YouTube video in a new tab
    window.open(`https://www.youtube.com/watch?v=${song.id}`, '_blank');
  };

  // Get emotion image
  const emotionImage = getEmotionImage(currentEmotion);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Emotion Image */}
      <motion.div 
        className="w-full h-48 md:h-64 rounded-xl overflow-hidden mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img 
          src={emotionImage} 
          alt={`${currentEmotion} mood`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
        <div className="absolute bottom-4 left-4">
          <h3 className="text-white text-xl font-bold capitalize">{currentEmotion} Mood</h3>
          <p className="text-gray-300 text-sm">Hindi songs for your current mood</p>
        </div>
      </motion.div>
      
      {/* Current song display */}
      {currentSong && (
        <motion.div 
          className="bg-gray-900 bg-opacity-60 backdrop-blur-lg rounded-xl p-4 mb-6 border border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <motion.div 
              className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={currentSong.thumbnail} 
                alt={currentSong.title} 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-semibold text-white truncate">{currentSong.title}</h3>
              <p className="text-gray-400 text-sm">{currentSong.channelTitle}</p>
              
              <div className="mt-3">
                <motion.button
                  className="inline-flex items-center px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${currentSong.id}`, '_blank')}
                >
                  <ExternalLink size={16} className="mr-2" />
                  Open on YouTube
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Song recommendations */}
      <h2 className="text-xl font-bold mb-4 text-white">Hindi Songs for your {currentEmotion} mood</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {songs.map((song, index) => (
          <motion.div
            key={song.id}
            className={`bg-gray-900 bg-opacity-40 backdrop-blur-sm rounded-lg overflow-hidden cursor-pointer border border-gray-800 hover:border-gray-600 transition-colors ${
              currentSong?.id === song.id ? 'ring-2 ring-purple-500' : ''
            }`}
            onClick={() => handleSongSelect(song)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="relative">
              <img 
                src={song.thumbnail} 
                alt={song.title} 
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
              
              {currentSong?.id === song.id && (
                <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              )}
              
              <div className="absolute bottom-2 right-2">
                <motion.div
                  className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink size={14} className="text-white" />
                </motion.div>
              </div>
            </div>
            
            <div className="p-3">
              <h3 className="font-medium text-white truncate">{song.title}</h3>
              <p className="text-gray-400 text-sm truncate">{song.channelTitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MusicPlayer;