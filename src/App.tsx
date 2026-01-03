import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./index.css";

const App = () => (
  <div className="min-h-screen flex flex-col">
    <Header appName="Home App" />
    <main className="flex-grow">
      <div className="mt-10 text-3xl mx-auto max-w-6xl text-red-900">
        <div className="text-red-900">Name: home-app</div>
        <div className="text-red-900">Framework: react-19</div>
      </div>
    </main>
    <Footer appName="Home App" />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);