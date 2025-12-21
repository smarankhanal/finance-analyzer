import "./App.css";
import { DarkModeInitalizer, Footer, Navbar } from "./components";
import { FirstPage } from "./pages";

export default function App() {
  return (
    <div className="bg-bg min-h-screen flex flex-col">
      <DarkModeInitalizer />
      <Navbar />

      <main className="grow p-4">
        <FirstPage />
      </main>

      <Footer />
    </div>
  );
}
