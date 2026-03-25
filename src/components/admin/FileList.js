import { Trash2, FileText, ImageIcon } from "lucide-react";
import { useGallery } from "../../context/GalleryContext";

export default function FileList() {
  const { files, removeFile } = useGallery();

  if (files.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center">
        <p className="text-sm text-gray-400">No files uploaded yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 divide-y divide-gray-100">
      <div className="px-6 py-4">
        <h2 className="text-base font-semibold">
          All Files{" "}
          <span className="text-gray-400 font-normal">({files.length})</span>
        </h2>
      </div>
      {files.map((f) => (
        <div
          key={f.id}
          className="px-6 py-3.5 flex items-center gap-4 hover:bg-gray-50 transition-colors"
        >
          {f.type.startsWith("image/") ? (
            <img
              src={f.url}
              alt=""
              className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
            />
          ) : (
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
              {f.type === "application/pdf" ? (
                <FileText size={18} className="text-gray-400" />
              ) : (
                <ImageIcon size={18} className="text-gray-400" />
              )}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{f.title}</p>
            <p className="text-xs text-gray-400">{f.fileName}</p>
          </div>
          <span className="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full flex-shrink-0">
            {f.category}
          </span>
          <button
            onClick={() => removeFile(f.id)}
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ))}
    </div>
  );
}
