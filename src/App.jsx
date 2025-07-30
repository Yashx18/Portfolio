import "./App.css";
import Page from "./layout/page";
import { Analytics } from "@vercel/analytics/react";
function App() {
  return (
    <main className="w-full h-full flex items-center justify-center bg-[#08090a]">
      <Page />
      <Analytics />
    </main>
  );
}

export default App;
