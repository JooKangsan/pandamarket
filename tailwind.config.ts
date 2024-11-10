import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cool-gray50': '#f9fafb',
        'cool-gray100': '#f3f4f6',
        'cool-gray200': '#e5e7eb',
        'cool-gray400': '#9ca3af',
        'cool-gray500': '#6B7280',
        'cool-gray600': '#4b5563',
        'cool-gray700': '#374151',
        'cool-gray800': '#1f2937',
        'cool-gray900': '#111827',
        'brand-blue': '#3692ff',
        'sky-blue': '#cfe5ff',
      },
    },
    screens: {
      pc: '1280px',
      tablet: '768px',
    },
  },
  plugins: [],
} satisfies Config;
