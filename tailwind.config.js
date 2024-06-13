module.exports = {
  content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  safelist: [
    // This is needed for classes which are dynamically named and applied so tailwind doesn't know beforehand they are used.
    // Card Component
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
   
    //Progress Circles
    "w-15.5",
    "w-58.5",
    "h-15.5",
    "h-58.5",
    "bg-cardio",
    "bg-coordination",
    "bg-mobility",
    "bg-weightTraining",

    // Info Dots
    "bg-ddark",
    "bg-dlight",
    "h-1",
    "h-2",
    "h-3",
    "h-4",
    "h-5",
    "h-6",
    "h-7",
    "h-8",
    "h-9",
    "h-10",
    "w-1",
    "w-2",
    "w-3",
    "w-4",
    "w-5",
    "w-6",
    "w-7",
    "w-8",
    "w-9",
    "w-10",

    // ExerciseList
    "border-4",
    "border-dmedium",
    "border-ddark",

    // Header
    "absolute",

    // CounterScreen,
    "min-w-58.5",

    // Button,
    "text-ddark",
    "text-dmedium",
    "text-dlight",

    // DescriptionCard
    "-translate-3/4screen",
    "-translate-y-14",
    "flex-col",
    "items-center",
    "p-9",
    "pb-28",
    "pt-16",
    "px-6",
    "py-4",
    "flex-row",
  ],
  theme: {
    extend: {
      colors: {
        ddark: "#202430",
        dmedium: "#3A4151",
        dlight: "#FBFBFB",
        cardio: "#00aa00",
        coordination: "#4400dd",
        mobility: "#ffbb00",
        weightTraining: "#bb2211",
      },
      fontFamily: {
        app: "Poppins, sans-serif",
        special: "Montserrat, sans-serif",
      },
      fontSize: {
        "6.5xl": "4rem",
        "2xs": "0.75rem",
        "3xs": "0.625rem",
      },
      fontWeight: {
        bold: 700,
        regular: 400,
      },
      spacing: {
        4.5: "1.125rem",
        12.5: "3.125rem",
        13: "3.25rem",
        15.5: "3.875rem",
        17.5: "4.375rem",
        18: "4.5rem",
        25: "6.25rem",
        30: "7.5rem",
        53.75: "13.4375rem",
        58.5: "14.625rem",
        93.75: "23.4375rem",
        "3/4screen": "75vh",
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
      tracking: {
        widest: ".2em",
      },
      translate: {},
    },
  },
  plugins: [],
};
