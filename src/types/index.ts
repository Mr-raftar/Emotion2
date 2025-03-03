export type Emotion = 'happy' | 'sad' | 'angry' | 'neutral' | 'excited' | 'relaxed';

export interface Song {
  id: string;
  title: string;
  thumbnail: string;
  channelTitle: string;
}

export interface MoodHistory {
  id: string;
  emotion: Emotion;
  timestamp: number;
  song?: Song;
}

export type Theme = 'cyberpunk' | 'vaporwave' | 'glassmorphism';

export interface AppState {
  currentEmotion: Emotion;
  isDetecting: boolean;
  songs: Song[];
  currentSong: Song | null;
  isPlaying: boolean;
  moodHistory: MoodHistory[];
  theme: Theme;
  setEmotion: (emotion: Emotion) => void;
  toggleDetection: () => void;
  setSongs: (songs: Song[]) => void;
  setCurrentSong: (song: Song | null) => void;
  togglePlaying: () => void;
  addToHistory: (entry: Omit<MoodHistory, 'id'>) => void;
  setTheme: (theme: Theme) => void;
}