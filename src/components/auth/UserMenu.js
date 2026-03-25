import { useUser, useClerk } from "@clerk/clerk-react";
import { LogOut } from "lucide-react";

export default function UserMenu() {
  const { user } = useUser();
  const { signOut } = useClerk();

  if (!user) return null;

  return (
    <div className="flex items-center gap-3">
      <img
        src={user.imageUrl}
        alt={user.fullName}
        className="w-7 h-7 rounded-full ring-2 ring-white"
      />
      <span className="text-sm font-medium text-gray-700 hidden sm:block">
        {user.firstName}
      </span>
      <button
        onClick={() => signOut()}
        className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
        title="Sign out"
      >
        <LogOut size={16} />
      </button>
    </div>
  );
}
