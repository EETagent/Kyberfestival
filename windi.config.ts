import plugin from "windicss/plugin";

export default {
  theme: {
    extend: {
      colors: {
        "kyberfestival-bg": "#f6f5f5",
        "kyberfestival-green": "#276678",
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("not-focus", ({ modifySelectors }) => {
        return modifySelectors(({ className }) => {
          return `.${className}:not(:focus)`;
        });
      });
    }),
    plugin(({ addUtilities }) => {
      addUtilities({
        ".content-blank": {
          // eslint-disable-next-line quotes
          content: '""',
        },
      });
    }),
  ],
};
