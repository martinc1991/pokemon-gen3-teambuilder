import type { Config } from 'tailwindcss';
import * as COLORS from './tokens/colors';
import * as BORDER_RADIUS from './tokens/border-radius';

export default {
  content: [`src/**/*.{js,ts,jsx,tsx}`],
  theme: {
    extend: {
      colors: {
        // Theme colors
        accent: {
          DEFAULT: COLORS.accent,
          foreground: COLORS.accentForeground,
        },
        background: COLORS.background,
        border: COLORS.border,
        card: {
          DEFAULT: COLORS.card,
          foreground: COLORS.cardForeground,
        },
        destructive: {
          DEFAULT: COLORS.destructive,
          foreground: COLORS.destructiveForeground,
        },
        foreground: COLORS.foreground,
        input: COLORS.input,
        muted: {
          DEFAULT: COLORS.muted,
          foreground: COLORS.mutedForeground,
        },
        popover: {
          DEFAULT: COLORS.popover,
          foreground: COLORS.popoverForeground,
        },
        primary: {
          DEFAULT: COLORS.primary,
          foreground: COLORS.primaryForeground,
        },
        ring: COLORS.ring,
        secondary: {
          DEFAULT: COLORS.secondary,
          foreground: COLORS.secondaryForeground,
        },

        // Types colors
        bug: COLORS.bug,
        dark: COLORS.dark,
        dragon: COLORS.dragon,
        electric: COLORS.electric,
        empty: COLORS.empty,
        fighting: COLORS.fighting,
        fire: COLORS.fire,
        flying: COLORS.flying,
        ghost: COLORS.ghost,
        grass: COLORS.grass,
        ground: COLORS.ground,
        ice: COLORS.ice,
        normal: COLORS.normal,
        poison: COLORS.poison,
        psychic: COLORS.psychic,
        rock: COLORS.rock,
        steel: COLORS.steel,
        water: COLORS.water,

        /* Genders colors */
        male: COLORS.male,
        female: COLORS.female,
      },
      borderRadius: {
        lg: BORDER_RADIUS.lg,
        md: BORDER_RADIUS.md,
        sm: BORDER_RADIUS.sm,
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0px' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
} satisfies Config;
