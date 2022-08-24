import { Config } from 'tailwindcss'

export default <Config> {
  theme: {},
  plugins: [require("@formkit/themes/tailwindcss")],
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
    `./formkit.config.ts`
  ]
}

