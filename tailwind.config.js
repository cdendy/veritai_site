/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#3761CC',
        'primary-red': '#DC4411',
        'primary-yellow': '#F3D334',
        'text': '#17264D',
        'dark-grey': '#B9B9B9',
        'mid-grey': '#D9D9D9',
      },
      fontSize: {
        '8': ['8px', { lineHeight: '12px' }],
        '12': ['12px', { lineHeight: '16px' }],
        '16': ['16px', { lineHeight: '20px' }],
        '20': ['20px', { lineHeight: '24px' }],
        '24': ['24px', { lineHeight: '28px' }],
        '28': ['28px', { lineHeight: '32px' }],
        '32': ['32px', { lineHeight: '36px' }],
        '36': ['36px', { lineHeight: '40px' }],
        '40': ['40px', { lineHeight: '44px' }],
        '44': ['44px', { lineHeight: '48px' }],
        '48': ['48px', { lineHeight: '52px' }],
        '52': ['52px', { lineHeight: '56px' }],
        '56': ['56px', { lineHeight: '60px' }],
        '60': ['60px', { lineHeight: '64px' }],
        '64': ['64px', { lineHeight: '68px' }],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          xl: '1400px',
        },
      },
    }
  },
  plugins: [],
}
