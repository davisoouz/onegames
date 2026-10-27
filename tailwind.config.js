/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        neon: ['NeonNeon', 'sans-serif'],
        cyberWay: ['CyberWay', 'sans-serif'],
        geist: ['Geist Variable', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        customBg: 'linear-gradient(165deg, rgba(0,0,0,1) 0%, rgba(8,20,28,1) 70%, rgba(12,40,48,1) 100%);',
        navShopBg: 'linear-gradient(165deg, rgba(12,40,48,1) 0%, rgba(90,140,150,1) 33%, rgba(255,255,255,1) 100%);',
        cartBg: 'linear-gradient(157deg, rgba(20,28,32,1) 0%, rgba(10,14,16,1) 82%, rgba(20,55,60,1) 100%);'
      },
      keyframes: {
        textPulsate: {
          "0%": {
            textShadow: "0 0 4px #ffffff4d, 0 0 20px #22D3EE, 0 0 40px #22D3EE",
          },
          "100%": {
            textShadow: "0 0 6px #ffffff4d, 0 0 25px #22D3EE, 0 0 38px #22D3EE, 0 0 48px #22D3EE",
          }
        },
        textFlick: {
          "0%, 2%, 21%": {
            opacity: 0.1,
          },
          "4%, 19%, 80%, 83%": {
            opacity: 0.5,
          },
          "23%, 87%" : {
            opacity: 1,
          }
        },
        borderPulse: {
          "0%, 4%": {
            opacity: 0.1,
          },
          "2%, 8%, 100%": {
            opacity: 1,
          },
          "70%": {
            opacity: 0.7,
          }

        }
      },
      animation: {
        textPulsate: 'textPulsate 3.5s infinite alternate',
        textFlick: 'textFlick 2s linear infinite',
        borderPulse: 'borderPulse 2s infinite linear',
      },
    },
  },
  plugins: [],
}
