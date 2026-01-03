export const mfConfig = {
  name: "home_app",
  exposes: {
    "./Header": "./src/components/Header.tsx",
    "./Footer": "./src/components/Footer.tsx",
    
  },
  shared: ["react", "react-dom"],
};
