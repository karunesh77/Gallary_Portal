import { FileText, Download } from "lucide-react";

export default function FileCard({ file }) {
  const isImage = file.type.startsWith("image/");

  return (
    <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-200">
      <div className="aspect-[4/3] bg-gray-50 relative overflow-hidden">
        {isImage ? (
          <img
            src={file.url}
            alt={file.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <FileText size={36} className="text-gray-300 mb-2" />
            <span className="text-xs text-gray-400 uppercase tracking-wide">
              {file.fileName.split(".").pop()}
            </span>
          </div>
        )}
        <span className="absolute top-3 left-3 text-[11px] px-2.5 py-1 bg-white/90 backdrop-blur rounded-full font-medium text-gray-700">
          {file.category}
        </span>
      </div>
      <div className="p-4 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="text-sm font-medium truncate">{file.title}</h3>
          <p className="text-xs text-gray-400 mt-0.5">{file.fileName}</p>
        </div>
        <a
          href={file.url}
          download={file.fileName}
          className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
        >
          <Download size={16} />
        </a>
      </div>
    </div>
  );
}
