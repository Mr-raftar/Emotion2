import { create } from 'zustand';
import { AppState, Emotion, MoodHistory, Song, Theme } from '../types';
import { generateId } from '../utils/helpers';

export const useAppStore = create<AppState>((set) => ({
  currentEmotion: 'neutral',
  isDetecting: false,
  songs: [],
  currentSong: null,
  isPlaying: false,
  moodHistory: [],
  theme: 'cyberpunk',
  
  setEmotion: (emotion: Emotion) => set({ currentEmotion: emotion }),
  
  toggleDetection: () => set((state) => ({ isDetecting: !state.isDetecting })),
  
  setSongs: (songs: Song[]) => set({ songs }),
  
  setCurrentSong: (song: Song | null) => set({ currentSong: song }),
  
  togglePlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),
  
  addToHistory: (entry: Omit<MoodHistory, 'id'>) => 
    set((state) => ({ 
      moodHistory: [
        { id: generateId(), ...entry }, 
        ...state.moodHistory
      ].slice(0, 10) 
    })),
  
  setTheme: (theme: Theme) => set({ theme }),
}));