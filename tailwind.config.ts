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
        'normal-opaque': 'rgba(168, 167, 122, 0.65)',
        fire: 'rgba(238, 129, 48, 1)',
        'fire-opaque': 'rgba(238, 129, 48, 0.65)',
        water: 'rgba(99, 144, 240, 1)',
        'water-opaque': 'rgba(99, 144, 240, 0.65)',
        electric: 'rgba(247, 208, 44, 1)',
        'electric-opaque': 'rgba(247, 208, 44, 0.65)',
        grass: 'rgba(122, 199, 76, 1)',
        'grass-opaque': 'rgba(122, 199, 76, 0.65)',
        ice: 'rgba(150, 217, 214, 1)',
        'ice-opaque': 'rgba(150, 217, 214, 0.65)',
        fighting: 'rgba(194, 46, 40, 1)',
        'fighting-opaque': 'rgba(194, 46, 40, 0.65)',
        poison: 'rgba(163, 62, 161, 1)',
        'poison-opaque': 'rgba(163, 62, 161, 0.65)',
        ground: 'rgba(226, 191, 101, 1)',
        'ground-opaque': 'rgba(226, 191, 101, 0.65)',
        flying: 'rgba(169, 143, 243, 1)',
        'flying-opaque': 'rgba(169, 143, 243, 0.65)',
        psychic: 'rgba(249, 85, 135, 1)',
        'psychic-opaque': 'rgba(249, 85, 135, 0.65)',
        bug: 'rgba(166, 185, 26, 1)',
        'bug-opaque': 'rgba(166, 185, 26, 0.65)',
        rock: 'rgba(182, 161, 54, 1)',
        'rock-opaque': 'rgba(182, 161, 54, 0.65)',
        ghost: 'rgba(115, 87, 151, 1)',
        'ghost-opaque': 'rgba(115, 87, 151, 0.65)',
        dragon: 'rgba(111, 53, 252, 1)',
        'dragon-opaque': 'rgba(111, 53, 252, 0.65)',
        dark: 'rgba(112, 87, 70, 1)',
        'dark-opaque': 'rgba(112, 87, 70, 0.65)',
        steel: 'rgba(183, 183, 206, 1)',
        'steel-opaque': 'rgba(183, 183, 206, 0.65)',
        fairy: 'rgba(214, 133, 173, 1)',
        'fairy-opaque': 'rgba(214, 133, 173, 0.65)',
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
    {
      pattern:
        /bg-(normal|fire|water|electric|grass|ice|fighting|poison|ground|flying|psychic|bug|rock|ghost|dragon|dark|steel|fairy)/,
    },
    {
      pattern:
        /bg-(normal|fire|water|electric|grass|ice|fighting|poison|ground|flying|psychic|bug|rock|ghost|dragon|dark|steel|fairy)-opaque/,
    },
    {
      pattern:
        /from-(normal|fire|water|electric|grass|ice|fighting|poison|ground|flying|psychic|bug|rock|ghost|dragon|dark|steel|fairy)-opaque/,
    },
    {
      pattern:
        /to-(normal|fire|water|electric|grass|ice|fighting|poison|ground|flying|psychic|bug|rock|ghost|dragon|dark|steel|fairy)-opaque/,
    },
  ],
  plugins: [],
};
export default config;
