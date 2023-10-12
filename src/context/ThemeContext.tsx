'use client';

import {
  type ReactNode,
  createContext,
  useState,
  useEffect,
  useContext,
} from 'react';

interface ThemeContext {
  mode: string;
  setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContext | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState('');

  useEffect(() => {
    if (mode === 'light') {
      setMode('dark');
      document.documentElement.classList.add('dark');
    } else {
      setMode('light');
      document.documentElement.classList.add('light');
    }
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
}
