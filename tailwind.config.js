const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: 
  {
    fontFamily: 
    {
      montserrat: ['Montserrat'],
      roboto: ['Roboto'],
    },
    extend: 
    {
      colors: 
      {
        colormain: '#e2c417',
        coloralt: '#e2a217'
      },
      backgroundImage:
      {
        headerbg: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1500' height='650' preserveAspectRatio='none' viewBox='0 0 1500 650'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1976%26quot%3b)' fill='none'%3e%3crect width='1500' height='650' x='0' y='0' fill='url(%23SvgjsLinearGradient1977)'%3e%3c/rect%3e%3cpath d='M 0%2c29 C 60%2c85.2 180%2c299.8 300%2c310 C 420%2c320.2 480%2c81.4 600%2c80 C 720%2c78.6 780%2c317 900%2c303 C 1020%2c289 1080%2c12.4 1200%2c10 C 1320%2c7.6 1440%2c234.8 1500%2c291L1500 650L0 650z' fill='rgba(255%2c 255%2c 255%2c 0.16)'%3e%3c/path%3e%3cpath d='M 0%2c578 C 100%2c551.6 300%2c457.8 500%2c446 C 700%2c434.2 800%2c531.2 1000%2c519 C 1200%2c506.8 1400%2c411.8 1500%2c385L1500 650L0 650z' fill='rgba(255%2c 255%2c 255%2c 0.2)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1976'%3e%3crect width='1500' height='650' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='50%25' y1='100%25' x2='50%25' y2='0%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1977'%3e%3cstop stop-color='rgba(239%2c 40%2c 40%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(255%2c 138%2c 43%2c 1)' offset='0.58'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e\")"
      },
    }
  },
  variants: 
  {
    extend: {},
  },
  plugins: 
  [
    plugin(function({ addComponents }) 
    {
      addComponents({
        '.navBrandDesk': {
          'transition': 'height 0.3s ease-in-out',
          'height': '5rem'
        },
        '.brand-shrink': {
          'height': '4rem'
        },
      })
    })
  ],
}
