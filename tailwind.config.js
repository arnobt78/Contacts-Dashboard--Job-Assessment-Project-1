module.exports = {
  // Specify the paths to all of the template files in your project
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Remove unused styles in production
  darkMode: false, // or 'media' or 'class' // Disable dark mode, can be set to 'media' or 'class' for dark mode support
  theme: {
    extend: {}, // Extend the default theme with custom values
  },
  variants: {
    extend: {}, // Extend the default variants with custom values
  },
  plugins: [], // Add any plugins that you want to use
};
