module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '126': '30rem',
        '124': '28rem',
        '122': '26rem',
      }
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}
