import type { Theme } from '@mui/material'

export const button: Theme['components'] = {
  MuiButton: {
    styleOverrides: {
      root: {
        cursor: 'pointer',
        borderRadius: '1rem',
        borderWidth: '1px',
        fontSize: '1.6rem',
        fontWeight: 600,
        transition: 'all 0.25s ease, border 0.25s ease',
      },
    },
  },
  MuiButtonBase: {
    styleOverrides: {
      root: {
        fontSize: '1.6rem',
        fontWeight: 600,
        transition: 'all 0.25s ease, border 0.25s ease',
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        borderRadius: '1rem',
        fontSize: '1.6rem',
        color: 'inherit',
        transition: 'all 0.25s ease',
      },
    },
  },
}
