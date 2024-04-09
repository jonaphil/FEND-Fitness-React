module.exports = {
  content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ddark: "#202430",
        dmedium: "#3A4151",
        dlight: "#FBFBFB",
        gradient1: "linear-gradient(315deg, #FF99C4 0%, #FFD162 100%)",
        gradient2: "linear-gradient(315deg, #F5FFA0 0%, #3EF3E8 100%)",
        gradient3:
          "linear-gradient(315deg, #3A4AE4 0%, #3B85E6 21.35%, #3EE4E8 73.44%, #3EF3E8 92.71%)",
      },
      fontFamily: {
        app: "Poppins, sans-serif",
      },
      fontSize: {},
      fontWeight: {
        bold: 700,
        regular: 400,
      },
      spacing: {
        13: "3.25rem",
        53.75: "13.4375rem",
        93.75: "23.4375rem",
      },
    },
  },
  plugins: [],
};
