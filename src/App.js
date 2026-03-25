import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GalleryProvider } from "./context/GalleryContext";
import Navbar from "./components/layout/Navbar";
import GalleryPage from "./pages/GalleryPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <GalleryProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<GalleryPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </GalleryProvider>
  );
}

export default App;
