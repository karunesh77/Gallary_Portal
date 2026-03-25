import { NavLink, useNavigate } from "react-router-dom";
import { Image, Shield, LogIn } from "lucide-react";
import { useAuth } from "@clerk/clerk-react";
import UserMenu from "../auth/UserMenu";

export default function Navbar() {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  const link =
    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors";
  const active = "bg-white text-gray-900 shadow-sm";
  const idle = "text-gray-500 hover:text-gray-900";

  return (
    <nav className="sticky top-0 z-50 bg-gray-50/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-lg font-semibold tracking-tight">
          Gallery Portal
        </span>

        <div className="flex items-center gap-4">
          <div className="flex gap-1 bg-gray-100 p-1 rounded-xl">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${link} ${isActive ? active : idle}`
              }
            >
              <Image size={16} />
              Gallery
            </NavLink>

            {isSignedIn && (
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  `${link} ${isActive ? active : idle}`
                }
              >
                <Shield size={16} />
                Admin
              </NavLink>
            )}
          </div>

          {isSignedIn ? (
            <UserMenu />
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              <LogIn size={16} />
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
