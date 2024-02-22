/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import { normalize } from 'path'
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        storm: {
          primary: '#9aa5ce',
          secondary: '#565f89',
          accent: '#bb9af7',
          neutral: '#111827',
          'base-100': '#24283b',
          info: '#2ac3de',
          success: '#9ece6a',
          warning: '#e0af68',
          error: '#f7768e',
        },
        breeze: {
          primary: '#6807f0',
          secondary: '#6b21a8',
          accent: '#db2777',
          neutral: '#170824',
          'base-100': '#f2f2f2',
          info: '#2ac3de',
          success: '#9ece6a',
          warning: '#e0af68',
          error: '#f7768e',
        },
        botanical: {
          primary: '#475F45',
          secondary: '#343D33',
          accent: '#5c7f67',
          neutral: '#414840',
          'neutral-content': '#e9e7e7',
          'base-100': '#e9e7e7',
          'base-content': '#100f0f',
          '--rounded-box': '0px',
          '--rounded-btn': '0px',
        },
        'luxe-shop': {
          primary: '#444444',
          'primary-content': '#ffffff',
          secondary: '#f6f1eb',
          'secondary-content': '#696969',
          neutral: '#3a3a3a',
          accent: '#f37021',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#fffcf7',
          'base-300': '#f6f1eb',
          'base-content': '#444444',
          'error-content': '#9D2A1E',
          '--rounded-box': '0.2rem',
          '--rounded-btn': '0.2rem',
          '.input': {
            'border-radius': '0px',
          },
          'font-family':
            '"Helvetica Neue", "Inconsolata", "Orator W01", "Microsoft YaHei", 微软雅黑, "PingFang SC", 萍方, "Noto Sans", SimHei, 黑体, "Gill Sans", "Gill Sans MT", Calibri, serif',
          'h1, h2': {
            'font-family':
              '"Inconsolata", "Orator W01", "Microsoft YaHei", 微软雅黑, "PingFang SC", 萍方, "Noto Sans", SimHei, 黑体, "Gill Sans", "Gill Sans MT", Calibri, serif',
          },
          '.navbar': {
            'box-shadow': 'rgba(226, 216, 206, 0.2) 0px 8px 16px 0px',
            'z-index': 20,
            'background-color': 'hsl(var(--b3))',
            color: 'hsl(var(--sc) / var(--tw-text-opacity))',
          },
          '.account-menu, .account-view': {
            'background-color': 'hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity))',
          },
          '.home, .login, .signup, .account, .login-form-alt, .product-view, .checkout-view, .category-view, .orders-view, .signup-view, .not-found':
            {
              'background-color': 'hsl(var(--b3))',
            },
          '.login-form, .toast-product-added, .signup-form, .shop-card': {
            'background-color': 'hsl(var(--b2))',
          },
        },
      },
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
    ],
  },
}
