/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
  './app/**/*.{js,jsx,ts,tsx}',
  './components/**/*.{js,jsx,ts,tsx}',
  './src/app/components/**/*.{js,jsx,ts,tsx}',
  './src/app/**/*.{js,jsx,ts,tsx}',
  './src/app/(days)/day1/**/*.{js,jsx,ts,tsx}',
  './src/app/(days)/**/*.{js,jsx,ts,tsx}',
  './src/app/(tabs)/**/*.{js,jsx,ts,tsx}', // Include all files in the tabs directory
],
  theme: {
    extend: {
       colors: {
       light:{
         // Light theme colors
        lightBackground: '#ffffff',
        lightText: '#333333',
        lightPrimary: '#33CC66',
        // Dark theme colors
      
       },

       dark:{
        
          darkBackground: '#1a1a1a',
        darkText: '#ffffff',
        darkPrimary: '#ffffff',
   
       }
      },
    },
  },
  plugins: [],
}



