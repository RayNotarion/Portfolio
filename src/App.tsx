import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import StacksPage from "./pages/StacksPage";
import Chatbot from "./components/Chatbot";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col min-h-screen w-full items-center bg-background text-foreground">
              <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 xl:px-4">
                <HomePage />
              </div>
            </div>
          }
        />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/stacks" element={<StacksPage />} />
      </Routes>
      <Chatbot />
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default App;
