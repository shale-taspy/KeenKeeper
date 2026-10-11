import { Home, Clock, Activity } from 'lucide-react';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className="navbar bg-white border-b border-gray-100 px-8 py-3 flex justify-between items-center">
      {/*Logo*/}
      <div className="flex items-center gap-2">
        <img 
          src="/logo.png" 
          alt="KeenKeeper Logo" 
          className="h-8 w-auto object-contain" 
          onClick={() => window.location.href = '/'}
        />
      </div>

      {/* NavLinks*/}
      <div className="flex items-center gap-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              isActive
                ? 'bg-[#244D3F] text-white'
                : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/timeline"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              isActive
                ? 'bg-[#244D3F] text-white'
                : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <Clock className="w-4 h-4" />
          <span>Timeline</span>
        </NavLink>

        <NavLink
          to="/stats"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              isActive
                ? 'bg-[#244D3F] text-white'
                : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <Activity className="w-4 h-4" />
          <span>Stats</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;