import { createContext, useContext, useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

const GalleryContext = createContext();

export function GalleryProvider({ children }) {
  const [files, setFiles] = useState([]);

  const addFile = useCallback((file, category, title) => {
    const url = URL.createObjectURL(file);
    setFiles((prev) => [
      {
        id: uuidv4(),
        title,
        category,
        fileName: file.name,
        type: file.type,
        url,
        createdAt: new Date().toISOString(),
      },
      ...prev,
    ]);
  }, []);

  const removeFile = useCallback((id) => {
    setFiles((prev) => {
      const file = prev.find((f) => f.id === id);
      if (file) URL.revokeObjectURL(file.url);
      return prev.filter((f) => f.id !== id);
    });
  }, []);

  return (
    <GalleryContext.Provider value={{ files, addFile, removeFile }}>
      {children}
    </GalleryContext.Provider>
  );
}

export const useGallery = () => useContext(GalleryContext);
