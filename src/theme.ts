import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

export const theme = createTheme({
    colors : {
        white : '#fff',
        textBlack : '#000000',
        textMenuItems: '#1A3440',
        inputGray: '#909090',
        mint: '#40E0D0',
        mint50: '#F2FDFC',
        bgFooter: '#1A3440',
        cardGray: '#ADADAD',
        gray500: '#7C7C7C',
        errorRed: '#EF6B6B'
    },
    shadow: {
      main: '0px 4px 4px rgba(205, 205, 205, 0.25)'
    }
  });


  declare module '@mui/material/styles' {
    interface Theme {
        colors: {
            white: string;
            textBlack : string;
            textMenuItems: string;
            inputGray: string;
            mint: string;
            mint50: string;
            bgFooter: string;
            cardGray: string;
            errorRed: string;
            gray500: string;
      },
      shadow: {
        main: React.CSSProperties['boxShadow'];
      }
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        colors?: {
            white: string;
            textBlack : string;
            textMenuItems: string;
            inputGray: string;
            mint: string;
            mint50: string;
            bgFooter: string;
            cardGray: string;
            errorRed: string;
            gray500: string;
      };
      shadow: {
        main: React.CSSProperties['boxShadow'];
      }
    }
  }