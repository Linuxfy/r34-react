const theme = {
  dimensions: {
    borderRadius: "3px",
    borderWidth: "2px",

    spacing: "4px",
    bigSpacing: "8px",
    appMargin: "16px",
    gutter: "8px",
  },
  colors: {
    accentColor: "crimson",
    hoverAccent: "crimson",
    backgroundColor: "#121212",
    backgroundColor2: "#fff",
  },
  shadow: {
    box: "box-shadow: 0 0 8px #000",
    drop: "drop-shadow(0 0 4px #000)",
  },
  timings: {
    transistionTime: "0.2s",
  },
  misc: {
    layer:
      "#ffffff11; :hover { background: #ffffff16;} transition: background-color 0.2s ease-in-out",
  },
};

export default theme;

export type ThemeType = typeof theme;