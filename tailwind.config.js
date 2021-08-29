module.exports = {
  purge: [
    './public/index.html',
    './src/**/*.{vue,js,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'tiny': '.875rem',
      },
      colors: {
        firstcolor: "#da4f49",
        secondcolor:"#bd362f",
        thirdcolor: "#ddd",
        fourthcolor: "#ccc",
        fivecolor: "rgba(82, 168, 236, 0.8)"
      },
      borderRadius: {
        br5: '5px'
      },
      width: {
        'w600': '600px',
        'w560': '560px'
      },
      margin: {
       'xauto': '0 auto',
      },
      boxShadow: {
        box: 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
