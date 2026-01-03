export const mfConfig = {
  name: "home_app",
  filename: "remoteEntry.js",
  exposes: {
    "./Header": "./src/components/Header.tsx",
    "./Footer": "./src/components/Footer.tsx",
    
  },
  shared: ["react", "react-dom"],
  manifest: true,
};
