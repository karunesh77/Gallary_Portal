import { SignIn } from "@clerk/clerk-react";

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Admin Login</h1>
          <p className="text-sm text-gray-400 mt-2">
            Sign in with Google to access the admin panel
          </p>
        </div>
        <div className="flex justify-center">
          <SignIn
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "shadow-none border border-gray-200 rounded-2xl",
              },
            }}
            routing="hash"
            afterSignInUrl="/admin"
          />
        </div>
      </div>
    </div>
  );
}
