import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/globals.css',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        primary: '#264c51',
        secondary: '#b85b24',
        tertiary: '#6b818c',
        dark: '#08262a',
        light: '#eeece7',
        border: '#d7d8d2',
        gray: '#c2c4c1'
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem'
      },
      fontFamily: {
        base: ['var(--font-base)'],
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
        mono: ['var(--font-mono)'],
        handwritten: ['var(--font-handwritten)']
      },
      boxShadow: {
        button: '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)'
      }
    }
  }
}

export default config
