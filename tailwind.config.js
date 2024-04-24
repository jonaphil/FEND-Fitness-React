module.exports = {
  content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  safelist: [
    // This is needed for classes which are dynamically named and applied so tailwind doesn't know beforehand they are used.
    // This is for the Card Component This is a test.
    "bg-gradient-red",
    "bg-gradient-green",
    "bg-gradient-blue",
    "bg-dmedium",
    "h-fit",
    "h-full",
    "h-53.75",
    "p-12.5",
    "pb-8",
    "pl-5",
    "pr-5",
    "pt-7",
    "shadow-m",
    "shadow-m-strong",
    "shadow-l",
    "border-dlight",
  ],
  theme: {
    extend: {
      colors: {
        ddark: "#202430",
        dmedium: "#3A4151",
        dlight: "#FBFBFB",
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
        4.5: "1.125rem",
        12.5: "3.125rem",
        13: "3.25rem",
        17.5: "4.375rem",
        18: "4.5rem",
        25: "6.25rem",
        30: "7.5rem",
        53.75: "13.4375rem",
        93.75: "23.4375rem",
      },
      borderRadius: {
        "2.5xl": "1.25rem",
      },
      backgroundImage: {
        "gradient-red": "linear-gradient(315deg, #FF99C4 0%, #FFD162 100%)",
        "gradient-green": "linear-gradient(315deg, #F5FFA0 0%, #3EF3E8 100%)",
        "gradient-blue":
          "linear-gradient(315deg, #3A4AE4 0%, #3B85E6 21.35%, #3EE4E8 73.44%, #3EF3E8 92.71%)",
      },
      boxShadow: {
        m: "0px 3px 10px rgba(0, 0, 0, 0.25)",
        "m-strong": "0px 3px 10px rgba(0, 0, 0, 0.35)",
        l: "2px 5px 10px rgba(0, 0, 0, 0.25)",
        inside: "0px 0px 2px 5px #000000 inset",
      },
    },
  },
  plugins: [],
};
