import GalleryGrid from "../components/gallery/GalleryGrid";

export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Medical Gallery</h1>
        <p className="text-sm text-gray-400 mt-1">
          Browse uploaded medical files by category
        </p>
      </div>
      <GalleryGrid />
    </div>
  );
}
