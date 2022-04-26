module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        'login-h':'370px',
        'register-h':'450px'
      },
      width:{
        'login-w':'450px',
        'register-w':'450px'
      },
      backgroundImage: {
        'background': "url('/res/background.jpg')"
      }
    },
  },
  plugins: [],
}