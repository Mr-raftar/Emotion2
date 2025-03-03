import { Emotion } from '../types';

export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15);
};

export const getEmotionColor = (emotion: Emotion): string => {
  switch (emotion) {
    case 'happy':
      return '#FFD700'; // Gold
    case 'sad':
      return '#4169E1'; // Royal Blue
    case 'angry':
      return '#FF4500'; // Red Orange
    case 'neutral':
      return '#9370DB'; // Medium Purple
    case 'excited':
      return '#FF1493'; // Deep Pink
    case 'relaxed':
      return '#00CED1'; // Dark Turquoise
    default:
      return '#FFFFFF'; // White
  }
};

export const getEmotionImage = (emotion: Emotion): string => {
  switch (emotion) {
    case 'happy':
      return 'https://source.unsplash.com/random/800x600/?happy,smile';
    case 'sad':
      return 'https://source.unsplash.com/random/800x600/?sad,rain';
    case 'angry':
      return 'https://source.unsplash.com/random/800x600/?angry,storm';
    case 'neutral':
      return 'https://source.unsplash.com/random/800x600/?calm,neutral';
    case 'excited':
      return 'https://source.unsplash.com/random/800x600/?excited,celebration';
    case 'relaxed':
      return 'https://source.unsplash.com/random/800x600/?relaxed,peaceful';
    default:
      return 'https://source.unsplash.com/random/800x600/?mood';
  }
};

export const getEmotionQuote = (emotion: Emotion): string => {
  const quotes = {
    happy: [
      "Happiness is not something ready-made. It comes from your own actions.",
      "The most wasted of all days is one without laughter.",
      "Happiness is a warm puppy."
    ],
    sad: [
      "Sadness flies away on the wings of time.",
      "The word 'happy' would lose its meaning if it were not balanced by sadness.",
      "Tears are words the heart can't express."
    ],
    angry: [
      "For every minute you remain angry, you give up sixty seconds of peace of mind.",
      "Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.",
      "Speak when you are angry and you will make the best speech you will ever regret."
    ],
    neutral: [
      "The middle path is the way to wisdom.",
      "Neutrality helps the oppressor, never the victim.",
      "In the middle of difficulty lies opportunity."
    ],
    excited: [
      "Excitement is the more practical synonym for happiness.",
      "The future belongs to those who believe in the beauty of their dreams.",
      "Life is either a daring adventure or nothing at all."
    ],
    relaxed: [
      "Almost everything will work again if you unplug it for a few minutes, including you.",
      "Your calm mind is the ultimate weapon against your challenges.",
      "The time to relax is when you don't have time for it."
    ]
  };

  const randomIndex = Math.floor(Math.random() * quotes[emotion].length);
  return quotes[emotion][randomIndex];
};

export const getMusicGenreByEmotion = (emotion: Emotion): string => {
  switch (emotion) {
    case 'happy':
      return 'happy hindi songs';
    case 'sad':
      return 'sad hindi songs';
    case 'angry':
      return 'powerful hindi songs';
    case 'neutral':
      return 'calm hindi songs';
    case 'excited':
      return 'energetic hindi songs';
    case 'relaxed':
      return 'soothing hindi songs';
    default:
      return 'popular hindi songs';
  }
};

export const mockFetchSongs = async (emotion: Emotion): Promise<any[]> => {
  // This is a mock function that would be replaced with actual YouTube API calls
  const genre = getMusicGenreByEmotion(emotion);
  
  // Simulating API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Hindi songs based on emotion
  const hindiSongs = {
    happy: [
      {
        id: 'hoNb6HuNmU0',
        title: 'Badtameez Dil - Yeh Jawaani Hai Deewani',
        thumbnail: 'https://img.youtube.com/vi/hoNb6HuNmU0/hqdefault.jpg',
        channelTitle: 'T-Series'
      },
      {
        id: 'YxWlaYCA8MU',
        title: 'Balam Pichkari - Yeh Jawaani Hai Deewani',
        thumbnail: 'https://img.youtube.com/vi/YxWlaYCA8MU/hqdefault.jpg',
        channelTitle: 'T-Series'
      },
      {
        id: 'yIIGQB6EMAM',
        title: 'Kar Gayi Chull - Kapoor & Sons',
        thumbnail: 'https://img.youtube.com/vi/yIIGQB6EMAM/hqdefault.jpg',
        channelTitle: 'Sony Music India'
      }
    ],
    sad: [
      {
        id: 'KwiDJclWxA8',
        title: 'Channa Mereya - Ae Dil Hai Mushkil',
        thumbnail: 'https://img.youtube.com/vi/KwiDJclWxA8/hqdefault.jpg',
        channelTitle: 'Sony Music India'
      },
      {
        id: 'hoyhGXEU3Mo',
        title: 'Tum Hi Ho - Aashiqui 2',
        thumbnail: 'https://img.youtube.com/vi/hoyhGXEU3Mo/hqdefault.jpg',
        channelTitle: 'T-Series'
      },
      {
        id: 'C8jScp-ckIs',
        title: 'Agar Tum Saath Ho - Tamasha',
        thumbnail: 'https://img.youtube.com/vi/C8jScp-ckIs/hqdefault.jpg',
        channelTitle: 'T-Series'
      }
    ],
    angry: [
      {
        id: 'hMBKmQEPNzI',
        title: 'Brothers Anthem - Brothers',
        thumbnail: 'https://img.youtube.com/vi/hMBKmQEPNzI/hqdefault.jpg',
        channelTitle: 'T-Series'
      },
      {
        id: 'B9YKnNtFqTs',
        title: 'Sultan Title Track - Sultan',
        thumbnail: 'https://img.youtube.com/vi/B9YKnNtFqTs/hqdefault.jpg',
        channelTitle: 'YRF'
      },
      {
        id: 'cYOB941gyXI',
        title: 'Chak Lein De - Chandni Chowk To China',
        thumbnail: 'https://img.youtube.com/vi/cYOB941gyXI/hqdefault.jpg',
        channelTitle: 'Warner Music India'
      }
    ],
    neutral: [
      {
        id: 'gkCpIYCyGck',
        title: 'Tere Sang Yaara - Rustom',
        thumbnail: 'https://img.youtube.com/vi/gkCpIYCyGck/hqdefault.jpg',
        channelTitle: 'T-Series'
      },
      {
        id: 'Jn5hsfbhWx4',
        title: 'Kabira - Yeh Jawaani Hai Deewani',
        thumbnail: 'https://img.youtube.com/vi/Jn5hsfbhWx4/hqdefault.jpg',
        channelTitle: 'T-Series'
      },
      {
        id: 'Umqb9KENgmk',
        title: 'Humsafar - Badrinath Ki Dulhania',
        thumbnail: 'https://img.youtube.com/vi/Umqb9KENgmk/hqdefault.jpg',
        channelTitle: 'Sony Music India'
      }
    ],
    excited: [
      {
        id: 'l_MyUGq7pgs',
        title: 'Malhari - Bajirao Mastani',
        thumbnail: 'https://img.youtube.com/vi/l_MyUGq7pgs/hqdefault.jpg',
        channelTitle: 'Eros Now Music'
      },
      {
        id: 'YhZt4i92aSA',
        title: 'Nagada Sang Dhol - Goliyon Ki Raasleela Ram-Leela',
        thumbnail: 'https://img.youtube.com/vi/YhZt4i92aSA/hqdefault.jpg',
        channelTitle: 'Eros Now Music'
      },
      {
        id: 'YPufBFVZ4CY',
        title: 'Ghungroo - War',
        thumbnail: 'https://img.youtube.com/vi/YPufBFVZ4CY/hqdefault.jpg',
        channelTitle: 'YRF'
      }
    ],
    relaxed: [
      {
        id: 'V1OXK49Fj78',
        title: 'Khaabon Ke Parinday - Zindagi Na Milegi Dobara',
        thumbnail: 'https://img.youtube.com/vi/V1OXK49Fj78/hqdefault.jpg',
        channelTitle: 'Sony Music India'
      },
      {
        id: 'BddP6PYo2gs',
        title: 'Kun Faya Kun - Rockstar',
        thumbnail: 'https://img.youtube.com/vi/BddP6PYo2gs/hqdefault.jpg',
        channelTitle: 'T-Series'
      },
      {
        id: 'Qe_5cnDmQMc',
        title: 'Tum Se Hi - Jab We Met',
        thumbnail: 'https://img.youtube.com/vi/Qe_5cnDmQMc/hqdefault.jpg',
        channelTitle: 'Sony Music India'
      }
    ]
  };
  
  // Return songs based on emotion
  return hindiSongs[emotion] || hindiSongs.neutral;
};

// This would be replaced with actual emotion detection using TensorFlow.js
export const mockDetectEmotion = (): Emotion => {
  const emotions: Emotion[] = ['happy', 'sad', 'angry', 'neutral', 'excited', 'relaxed'];
  const randomIndex = Math.floor(Math.random() * emotions.length);
  return emotions[randomIndex];
};