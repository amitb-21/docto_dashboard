import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <header className="w-full flex flex-col items-center py-12">
        <h1 className="fancy-title text-5xl md:text-6xl font-bold mb-4 text-blue-900 text-center drop-shadow-lg">
          Welcome to Doctor Portal
        </h1>
        <p className="fancy-subtitle text-xl md:text-2xl text-blue-700 mb-8 text-center max-w-2xl">
          Your one-stop solution for managing appointments, patients, and more.
          Experience seamless healthcare management with our modern dashboard.
        </p>
        <Image
          src="/globe.svg"
          alt="Doctor Portal Logo"
          width={120}
          height={120}
          className="mb-6 drop-shadow-xl"
        />
        <a
          href="/dashboard"
          className="mt-4 px-8 py-3 bg-blue-700 text-white rounded-full shadow-lg text-lg font-semibold hover:bg-blue-800 transition"
        >
          Go to Dashboard
        </a>
      </header>
      <footer className="mt-auto py-6 text-gray-600 text-sm text-center w-full">
        &copy; {new Date().getFullYear()} Doctor Portal. All rights reserved.
      </footer>
    </div>
  );
}
