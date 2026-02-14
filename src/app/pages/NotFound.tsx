export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Page not found</p>
        <a
          href="/"
          className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
