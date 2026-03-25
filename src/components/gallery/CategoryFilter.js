import { CATEGORIES } from "../../constants/categories";

export default function CategoryFilter({ active, onChange }) {
  const all = ["All", ...CATEGORIES];

  return (
    <div className="flex gap-2 flex-wrap">
      {all.map((c) => {
        const isActive = c === active;
        return (
          <button
            key={c}
            onClick={() => onChange(c)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
              isActive
                ? "bg-gray-900 text-white"
                : "bg-white border border-gray-200 text-gray-600 hover:border-gray-400"
            }`}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
}
