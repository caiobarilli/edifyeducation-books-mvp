module.exports = {
  darkMode: 'class',
  content: [
    './resources/views/**/*.blade.php',
    './resources/js/**/*.js',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',

      gray: {
        100: '#e2e8f0',
        200: '#f7fafc',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#6E7880',
        600: '#495055',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c'
      },

      red: {
        100: '#fff5f5',
        200: '#fed7d7',
        300: '#feb2b2',
        400: '#fc8181',
        500: '#f56565',
        600: '#e53e3e',
        700: '#c53030',
        800: '#9b2c2c',
        900: '#742a2a'
      },

      orange: {
        100: '#fffaf0',
        200: '#feebc8',
        300: '#fbd38d',
        400: '#f6ad55',
        500: '#ed8936',
        600: '#dd6b20',
        700: '#c05621',
        800: '#9c4221',
        900: '#7b341e'
      },

      blue: {
        100: '#0098A6',
        600: '#00afbf'
      },

      orange: {
        100: '#F37920',
        600: '#ff7e21'
      }
    },
    extend: {
      fontFamily: {
        Lato: ['Lato', 'sans-serif'],
        OpenSans: ['Open Sans', 'sans-serif']
      },
      width: {
        '12': '12.33%'
      }
    }
  }
};
