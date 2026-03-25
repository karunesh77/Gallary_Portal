import FileUpload from "../components/admin/FileUpload";
import FileList from "../components/admin/FileList";

export default function AdminPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Admin Panel</h1>
        <p className="text-sm text-gray-400 mt-1">
          Upload and manage medical files
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <FileUpload />
        </div>
        <div className="lg:col-span-2">
          <FileList />
        </div>
      </div>
    </div>
  );
}
