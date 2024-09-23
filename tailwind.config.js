/** @type {import('tailwindcss').Config} */
import { createThemes } from 'tw-colors'

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'sans-serif'],
        mono: ['DM Mono', 'Courier', 'monospace']
      }
    },
  },
  plugins: [
    createThemes({
      dracula: {
        // Colour system established as per https://radzion.com/blog/theme

        /*
          The primary colour is the main colour of your brand.
          It is typically used for interactive elements such as buttons, checkboxes, or hyperlinks.
        */
        primary: '#7359f8',

        /*
          The foreground colour should be used when an element's background needs separating from other content (e.g. a sidebar).
          Otherwise, use the background colour, as it provides the most contrast.
        */
        foreground: '#44475A',
        background: '#282A36',

        /*
          Text uses three colours.
          They have different contrast levels, and their names embody their purpose.
        */
        text_body: '#F8F8F2',
        text_support: '#ADB5CB',
        text_shy: '#6272A4',

        /*
          Critical is for error messages or destructive actions.
          Warning is self-explanatory, but can also be used for things that need attention.
          Success is for positive actions, like a check icon when the user completes a task or to highlight an increase in some metric.
        */
        critical: '#FF5555',
        warning: '#FFB86C',
        success: '#50FA7B',

        /*
          Mist colours are translucent colours that can be laid on top of other colours for contrast.
          `mist_extra` is a more opaque (but still translucent) version used for hovers.
          Overlay is a dark version of `mist_extra` used to darken the background when showing a modal.
        */
        mist: 'rgba(248, 248, 242, 0.33)',
        mist_extra: 'rgba(248, 248, 242, 0.67)',
        overlay: 'rgba(40, 42, 54, 0.67)',
      },
    }),
  ],
}

