module.exports = {
  content: [
    './src/**/*.{html,njk,md,js}'
  ],

  theme: {
    extend: {
      spacing: {
        'fluid-sm': 'clamp(0.5rem, 2vw, 1rem)',
        'fluid-md': 'clamp(1rem, 3vw, 2rem)',
        'fluid-lg': 'clamp(2rem, 5vw, 4rem)'
      },

      maxWidth: {
        'measure': '65ch'
      },

      colors: {
        primary: '#1d4ed8',
        surface: '#ffffff',
        text: '#111827'
      }
    }
  },

  plugins: []
};
