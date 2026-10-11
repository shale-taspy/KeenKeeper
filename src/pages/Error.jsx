import { Link } from "react-router";


// Error Page
const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <h1 className="text-6xl font-bold" style={{ color: '#244D3F' }}>
        404
      </h1>
      <p className="mt-2 text-lg text-gray-600">Check your connection</p>
      
      {/* Go Home Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 text-white font-medium rounded-lg shadow-md transition-opacity hover:opacity-90"
        style={{ backgroundColor: '#244D3F' }}
      >
        Go Home
      </Link>
    </div>
  );
};

export default Error;