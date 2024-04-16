import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

export const themeSettings = (mode: PaletteMode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            // palette values for dark mode
            background: {
              default: '#2a2e34',
            },
          }
        : {
            background: {
              default: '#FFF',
            },
          }),
    },
  };
};

export const useMode = () => {
  const theme = () => createTheme(themeSettings('dark'));
  return theme;
};
