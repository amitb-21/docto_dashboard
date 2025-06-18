"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  const handleGoogleLogin = () => {
    // 🔐 TODO: Replace with real Google login using Firebase or NextAuth
    console.log("Google login clicked");
    router.push("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[90%] max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Doctor Dashboard Login
        </h1>

        <form className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              router.push("/dashboard");
            }}
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="px-4 text-gray-500 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded hover:bg-gray-50 transition"
        >
          <Image
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            width={20}
            height={20}
          />
          <span className="text-sm font-medium text-gray-700">
            Sign in with Google
          </span>
        </button>
      </div>
    </div>
  );
}
