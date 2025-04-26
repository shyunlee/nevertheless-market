// tailwind.config.ts
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';

const config: Config = {
  // content: [
  //   './app/**/*.{ts,tsx}',         // ✅ App Router 기준
  //   './components/**/*.{ts,tsx}',
  //   './lib/**/*.{ts,tsx}',         // 선택: utils 함수 경로
  // ],
  // theme: {
  //   extend: {
  //     colors: {
  //       primary: '#2563eb',        // custom 예시 (blue-600)
  //       secondary: '#f43f5e',      // custom 예시 (rose-500)
  //     },
  //   },
  // },
  plugins: [forms],
}

export default config
