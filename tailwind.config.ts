import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        orbitron: ['var(--font-orbitron)', 'monospace'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: '#f0f9ff',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        },
        secondary: {
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
        },
        accent: {
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
        }
      },
      animation: {
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'floating': 'floating 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'spin-glow': 'spin-glow 2s linear infinite',
        'typewriter': 'typewriter 3s steps(40, end), blink-caret 0.75s step-end infinite',
        'glow': 'glow 2s infinite ease-in-out',
        'blob': 'blob 7s infinite',
        'float': 'float 20s infinite linear',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'floating': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { transform: 'scale(1)', filter: 'brightness(1)' },
          '50%': { transform: 'scale(1.05)', filter: 'brightness(1.2)' },
        },
        'spin-glow': {
          '0%': { transform: 'rotate(0deg)', filter: 'hue-rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)', filter: 'hue-rotate(360deg)' },
        },
        'typewriter': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#8b5cf6' },
        },
        'glow': {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(139, 92, 246, 0.3)' },
          '50%': { 'box-shadow': '0 0 30px rgba(139, 92, 246, 0.6), 0 0 40px rgba(236, 72, 153, 0.3)' },
        },
        'blob': {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'float': {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100px) rotate(360deg)', opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
      backdropBlur: {
        'enhanced': '20px',
      },
      perspective: {
        '500': '500px',
        '1000': '1000px',
      }
    },
  },
  plugins: [
    function({ addUtilities }: any) {
      const newUtilities = {
        '.transform-3d': {
          'transform-style': 'preserve-3d',
          'perspective': '1000px',
        },
        '.hover-lift:hover': {
          'transform': 'translateY(-10px) rotateX(5deg) rotateY(5deg)',
          'transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '.backdrop-blur-enhanced': {
          'backdrop-filter': 'blur(20px) saturate(180%)',
          '-webkit-backdrop-filter': 'blur(20px) saturate(180%)',
        },
        '.border-gradient': {
          'position': 'relative',
          'background': 'linear-gradient(45deg, transparent, transparent)',
          'border': '2px solid transparent',
        },
        '.border-gradient::before': {
          'content': '""',
          'position': 'absolute',
          'top': '-2px',
          'left': '-2px',
          'right': '-2px',
          'bottom': '-2px',
          'background': 'linear-gradient(45deg, #8b5cf6, #ec4899, #06b6d4)',
          'border-radius': 'inherit',
          'z-index': '-1',
          'background-size': '200% 200%',
          'animation': 'gradient-shift 3s ease infinite',
        },
        '.will-change-transform': {
          'will-change': 'transform',
        },
        '.will-change-opacity': {
          'will-change': 'opacity',
        },
        '.text-shadow-glow': {
          'text-shadow': '0 0 10px rgba(139, 92, 246, 0.5), 0 0 20px rgba(139, 92, 246, 0.3)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};

export default config;
