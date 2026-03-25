import { useState } from "react";
import { useGallery } from "../../context/GalleryContext";
import CategoryFilter from "./CategoryFilter";
import FileCard from "./FileCard";

export default function GalleryGrid() {
  const { files } = useGallery();
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? files : files.filter((f) => f.category === active);

  return (
    <div className="space-y-6">
      <CategoryFilter active={active} onChange={setActive} />

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-sm text-gray-400">
            {files.length === 0
              ? "No files yet. Upload from the Admin panel."
              : "No files in this category."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((f) => (
            <FileCard key={f.id} file={f} />
          ))}
        </div>
      )}
    </div>
  );
}
