import { useState, useRef } from "react";
import { Upload, X } from "lucide-react";
import { CATEGORIES } from "../../constants/categories";
import { useGallery } from "../../context/GalleryContext";

export default function FileUpload() {
  const { addFile } = useGallery();
  const inputRef = useRef();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFile = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    if (f.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(f));
    } else {
      setPreview(null);
    }
  };

  const clearFile = () => {
    setFile(null);
    if (preview) URL.revokeObjectURL(preview);
    setPreview(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file || !category || !title.trim()) return;
    addFile(file, category, title.trim());
    setTitle("");
    setCategory("");
    clearFile();
  };

  const isValid = file && category && title.trim();

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-gray-200 p-6 space-y-5"
    >
      <h2 className="text-base font-semibold">Upload File</h2>

      <div>
        <label className="block text-sm text-gray-500 mb-1.5">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Chest X-Ray — Jan 2026"
          className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-500 mb-1.5">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white"
        >
          <option value="">Select category...</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm text-gray-500 mb-1.5">File</label>
        {!file ? (
          <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-gray-400 transition-colors">
            <Upload size={20} className="text-gray-400 mb-2" />
            <span className="text-sm text-gray-400">
              Click to browse files
            </span>
            <input
              ref={inputRef}
              type="file"
              onChange={handleFile}
              accept="image/*,.pdf,.doc,.docx"
              className="hidden"
            />
          </label>
        ) : (
          <div className="relative border border-gray-200 rounded-xl p-3 flex items-center gap-3">
            {preview && (
              <img
                src={preview}
                alt=""
                className="w-16 h-16 rounded-lg object-cover"
              />
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{file.name}</p>
              <p className="text-xs text-gray-400">
                {(file.size / 1024).toFixed(1)} KB
              </p>
            </div>
            <button
              type="button"
              onClick={clearFile}
              className="p-1 hover:bg-gray-100 rounded-lg"
            >
              <X size={16} className="text-gray-400" />
            </button>
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={!isValid}
        className="w-full py-2.5 rounded-xl text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        Upload
      </button>
    </form>
  );
}
