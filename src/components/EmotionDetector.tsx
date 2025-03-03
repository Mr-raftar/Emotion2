import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { motion } from 'framer-motion';
import { Camera, CameraOff } from 'lucide-react';
import { useAppStore } from '../store';
import { mockDetectEmotion } from '../utils/helpers';
import { getEmotionColor } from '../utils/helpers';

const EmotionDetector: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const { 
    isDetecting, 
    toggleDetection, 
    setEmotion, 
    currentEmotion,
    addToHistory
  } = useAppStore();
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    if (isDetecting) {
      // Set a timeout to detect emotion once and then turn off the camera
      const timeout = setTimeout(() => {
        // In a real app, this would use TensorFlow.js to detect emotions
        // For now, we'll use a mock function that returns random emotions
        const detectedEmotion = mockDetectEmotion();
        setEmotion(detectedEmotion);
        
        // Add to history
        addToHistory({
          emotion: detectedEmotion,
          timestamp: Date.now()
        });
        
        // Turn off the camera after detection
        toggleDetection();
      }, 2000); // Wait 2 seconds before detecting to give camera time to initialize
      
      return () => clearTimeout(timeout);
    }
  }, [isDetecting, setEmotion, addToHistory, toggleDetection]);

  useEffect(() => {
    // Check for camera permissions
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(() => setHasPermission(true))
      .catch(() => setHasPermission(false));
  }, []);

  const emotionColor = getEmotionColor(currentEmotion);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <motion.div 
        className="relative rounded-xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {hasPermission === false && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 z-10">
            <div className="text-white text-center p-4">
              <p className="text-xl mb-2">Camera access denied</p>
              <p>Please enable camera access to use emotion detection</p>
            </div>
          </div>
        )}
        
        {isDetecting ? (
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            className="w-full h-full object-cover"
            videoConstraints={{
              facingMode: "user"
            }}
          />
        ) : (
          <div className="bg-gray-900 w-full h-64 flex items-center justify-center">
            <p className="text-gray-400">Camera is off</p>
          </div>
        )}
        
        {/* Emotion aura overlay */}
        {isDetecting && (
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            style={{ 
              boxShadow: `inset 0 0 50px ${emotionColor}, 0 0 30px ${emotionColor}`,
              transition: 'box-shadow 1s ease-in-out'
            }}
          />
        )}
      </motion.div>
      
      <motion.div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          onClick={toggleDetection}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 border-2 border-gray-700 hover:border-gray-500 transition-colors"
        >
          {isDetecting ? (
            <CameraOff className="text-red-400" size={20} />
          ) : (
            <Camera className="text-green-400" size={20} />
          )}
        </button>
      </motion.div>
      
      {currentEmotion && (
        <motion.div 
          className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 px-4 py-2 rounded-full z-10"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <p className="text-sm font-medium" style={{ color: emotionColor }}>
            Detected: <span className="capitalize">{currentEmotion}</span>
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default EmotionDetector;