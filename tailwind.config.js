/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'fm-dark-desaturated-blue': 'hsl(230, 29%, 16%)',
        'fm-soft-red': 'hsl(14, 88%, 65%)',
        'fm-soft-violet': 'hsl(273, 75%, 66%)',
        'fm-soft-blue': 'hsl(240, 73%, 65%)',
        'fm-very-dark-grayish-blue': 'hsl(237, 12%, 33%)',
        'fm-grayish-blue': 'hsl(240, 6%, 50%)',
        'fm-light-grayish-blue': 'hsl(240, 5%, 91%)'
      },
      fontFamily: {
        kumbh: ['Kumbh Sans', 'sans-serif']
      },
      backgroundImage: {
        'pattern-desktop': "url('./assets/images/bg-pattern-desktop.svg')"
      }
    }
  },
  plugins: []
}
