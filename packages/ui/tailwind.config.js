/** @type {import('tailwindcss').Config} */

export const content = ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'];
export const theme = {
  container: {
    center: true,
    padding: '2rem',
    screens: {
      '2xl': '1400px',
    },
  },
  extend: {
    colors: {
      // Theme colors
      accent: { DEFAULT: 'var(--accent)', foreground: 'var(--accent-foreground)' },
      background: 'var(--background)',
      border: 'var(--border)',
      card: { DEFAULT: 'var(--card)', foreground: 'var(--card-foreground)' },
      destructive: { DEFAULT: 'var(--destructive)', foreground: 'var(--destructive-foreground)' },
      foreground: 'var(--foreground)',
      input: 'var(--input)',
      muted: { DEFAULT: 'var(--muted)', foreground: 'var(--muted-foreground)' },
      popover: { DEFAULT: 'var(--popover)', foreground: 'var(--popover-foreground)' },
      primary: { DEFAULT: 'var(--primary)', foreground: 'var(--primary-foreground)' },
      ring: 'var(--ring)',
      secondary: { DEFAULT: 'var(--secondary)', foreground: 'var(--secondary-foreground)' },
      // Types colors
      bug: 'var(--bug)',
      dark: 'var(--dark)',
      dragon: 'var(--dragon)',
      electric: 'var(--electric)',
      empty: 'var(--empty)',
      fighting: 'var(--fighting)',
      fire: 'var(--fire)',
      flying: 'var(--flying)',
      ghost: 'var(--ghost)',
      grass: 'var(--grass)',
      ground: 'var(--ground)',
      ice: 'var(--ice)',
      normal: 'var(--normal)',
      poison: 'var(--poison)',
      psychic: 'var(--psychic)',
      rock: 'var(--rock)',
      steel: 'var(--steel)',
      water: 'var(--water)',
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
    keyframes: {
      'accordion-down': {
        from: { height: 0 },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: 0 },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
  },
};

// eslint-disable-next-line no-undef
export const plugins = [require('tailwindcss-animate')];
