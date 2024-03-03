import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'holo-green': 'rgba(194, 255, 182)',
        'holo-pink': 'rgba(255, 163, 182)',
        'holo-purple': 'rgba(221, 169, 255)',
        'holo-blue': 'rgba(162, 209, 255)',
        normal: 'rgba(168, 167, 122, 1)',
        fire: 'rgba(238, 129, 48, 1)',
        water: 'rgba(99, 144, 240, 1)',
        electric: 'rgba(247, 208, 44, 1)',
        grass: 'rgba(122, 199, 76, 1)',
        ice: 'rgba(150, 217, 214, 1)',
        fighting: 'rgba(194, 46, 40, 1)',
        poison: 'rgba(163, 62, 161, 1)',
        ground: 'rgba(226, 191, 101, 1)',
        flying: 'rgba(169, 143, 243, 1)',
        psychic: 'rgba(249, 85, 135, 1)',
        bug: 'rgba(166, 185, 26, 1)',
        rock: 'rgba(182, 161, 54, 1)',
        ghost: 'rgba(115, 87, 151, 1)',
        dragon: 'rgba(111, 53, 252, 1)',
        dark: 'rgba(112, 87, 70, 1)',
        steel: 'rgba(183, 183, 206, 1)',
        fairy: 'rgba(214, 133, 173, 1)',
      },
      animation: {
        decour: 'decour 10s ease-in-out infinite',
        holo: 'holo 15s ease-in-out infinite',
      },
      keyframes: {
        decour: {
          '0%, 100%': {
            transform: 'scale(1) rotate(-3deg) translateX(0) translateY(0)',
            opacity: '1',
          },
          '50%': {
            transform:
              'scale(0.75) rotate(3deg) translateX(-10%) translateY(8%)',
            opacity: '0.5',
          },
        },
        holo: {
          '0%, 50%, 100%': {
            backgroundPositionY: '0',
          },
          '25%, 75%': {
            backgroundPositionY: '500px',
          },
        },
      },
    },
  },
  safelist: [
    'bg-normal',
    'bg-fire',
    'bg-water',
    'bg-electric',
    'bg-grass',
    'bg-ice',
    'bg-fighting',
    'bg-poison',
    'bg-ground',
    'bg-flying',
    'bg-psychic',
    'bg-bug',
    'bg-rock',
    'bg-ghost',
    'bg-dragon',
    'bg-dark',
    'bg-steel',
    'bg-fairy',
  ],
  plugins: [],
};
export default config;
