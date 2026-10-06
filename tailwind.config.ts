import type { Config } from 'tailwindcss';
export default { content: ['./src/**/*.{ts,tsx}'], theme: { extend: { colors: { gold: '#f7bc28' }, fontFamily: { sans: ['var(--font-manrope)'], serif: ['var(--font-fraunces)'] } } }, plugins: [] } satisfies Config;
