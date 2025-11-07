import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

// Placeholder Auth Context and Auth Components
const useAuth = () => ({
  user: { name: "John Doe", email: "john.doe@example.com", phone: "123-456-7890" },
  isAuthenticated: true,
  logout: () => console.log("Logging out..."),
});

const Login = ({ onClose, onSwitchToRegister }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg">
      Login Mock{" "}
      <button onClick={onClose}>Close</button>{" "}
      <button onClick={onSwitchToRegister}>Register</button>
    </div>
  </div>
);

const Register = ({ onClose, onSwitchToLogin }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg">
      Register Mock{" "}
      <button onClick={onClose}>Close</button>{" "}
      <button onClick={onSwitchToLogin}>Login</button>
    </div>
  </div>
);

// Icons
const MenuIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const profileRef = useRef(null);
  const navbarRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
      if (isMobileMenuOpen && navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (showProfile || isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showProfile, isMobileMenuOpen]);

  // ✅ Navigate to /services instead of /
  const handleServicesClick = () => {
    setIsMobileMenuOpen(false);
    navigate("/services");
  };

  const handleNavLinkClick = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  const handleSwitchToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const handleSwitchToLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  const handleLogout = () => {
    logout();
    setShowProfile(false);
    setIsMobileMenuOpen(false);
    navigate("/");
  };

  // Styles
  const linkBaseClasses = "block py-1 hover:text-black transition duration-200";
  const activeLinkClasses = "font-extrabold text-black";
  const inactiveLinkClasses = "font-medium text-gray-800";
  const getNavLinkClass = ({ isActive }) =>
    `${linkBaseClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`;

  const DesktopLinks = () => (
    <>
      <button onClick={handleServicesClick} className={linkBaseClasses + " " + inactiveLinkClasses}>
        Services
      </button>
      <NavLink to="/who-we-are" className={getNavLinkClass}>
        Who We Are
      </NavLink>
      <NavLink to="/partner-with-us" className={getNavLinkClass}>
        Partner With Us
      </NavLink>
      <NavLink to="/faqs" className={getNavLinkClass}>
        FAQs
      </NavLink>
    </>
  );

  return (
    <div className="relative z-50 flex justify-center py-4 px-4 md:px-0" ref={navbarRef}>
      <nav className="w-full max-w-4xl bg-white rounded-full shadow-lg border border-gray-100/50">
        {/* Desktop Navbar */}
        <div className="hidden md:flex justify-between items-center py-3 px-8 font-manrope text-[17px] text-gray-800">
          {/* Left Links */}
          <div className="flex space-x-12">
            <button onClick={handleServicesClick} className={inactiveLinkClasses}>
              Services
            </button>
            <NavLink to="/who-we-are" className={getNavLinkClass}>
              Who We Are
            </NavLink>
          </div>

          {/* Logo */}
          <div className="text-center flex-shrink-0 mx-4">
            <NavLink to="/" className="block text-center" onClick={() => setIsMobileMenuOpen(false)}>
              <h1 className="text-[20px] font-extrabold tracking-wide text-black">FIXTEK</h1>
              <p className="text-[7px] font-semibold tracking-widest text-gray-700">MAINTENANCE</p>
            </NavLink>
          </div>

          {/* Right Links & Profile */}
          <div className="flex items-center space-x-12">
            <NavLink to="/partner-with-us" className={getNavLinkClass}>
              Partner With Us
            </NavLink>
            <NavLink to="/faqs" className={getNavLinkClass}>
              FAQs
            </NavLink>

            {isAuthenticated && user ? (
              <div className="relative pl-8" ref={profileRef}>
                <button onClick={() => setShowProfile(!showProfile)}
                  className="flex items-center space-x-2 hover:opacity-80 transition">
                  <div className="w-8 h-8 bg-[#00343D] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {user.name?.charAt(0)?.toUpperCase() || "U"}
                  </div>
                </button>

                {showProfile && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-200">
                      <p className="font-bold text-black text-sm">{user.name}</p>
                      <p className="text-gray-600 text-xs mt-1">{user.email}</p>
                      {user.phone && <p className="text-gray-600 text-xs mt-1">{user.phone}</p>}
                    </div>

                    <div className="px-4 py-2">
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <div className="bg-gray-50 p-2 rounded text-center">
                          <p className="text-xs text-gray-600">Bookings</p>
                          <p className="text-lg font-bold text-[#00343D]">0</p>
                        </div>
                        <div className="bg-gray-50 p-2 rounded text-center">
                          <p className="text-xs text-gray-600">Saved</p>
                          <p className="text-lg font-bold text-[#00343D]">0</p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setShowProfile(false);
                        navigate("/booking");
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                    >
                      My Bookings
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="ml-8 px-4 py-2 text-sm font-semibold bg-gray-100 rounded-lg hover:bg-gray-200 transition"
              >
                Login
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex md:hidden justify-between items-center px-4 py-3">
          <div className="flex-grow text-center">
            <NavLink to="/" className="inline-block text-center" onClick={() => setIsMobileMenuOpen(false)}>
              <h1 className="text-lg font-extrabold tracking-wide text-black">FIXTEK</h1>
              <p className="text-[6px] font-semibold tracking-widest text-gray-700">MAINTENANCE</p>
            </NavLink>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-2 pb-4 px-4 border-t border-gray-100">
            <div className="flex flex-col space-y-2 text-base">
              <DesktopLinks />

              <div className="pt-2 border-t border-gray-100 mt-2">
                {isAuthenticated ? (
                  <>
                    <button
                      onClick={() => handleNavLinkClick("/booking")}
                      className={`${linkBaseClasses} ${inactiveLinkClasses} w-full text-left`}
                    >
                      My Bookings
                    </button>
                    <button
                      onClick={handleLogout}
                      className={`${linkBaseClasses} text-red-600 hover:text-red-700 w-full text-left`}
                    >
                      Logout ({user.name})
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setShowLogin(true);
                    }}
                    className="w-full text-left py-2 px-3 text-sm font-semibold bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                  >
                    Login / Register
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Modals */}
      {showLogin && (
        <Login onClose={() => setShowLogin(false)} onSwitchToRegister={handleSwitchToRegister} />
      )}
      {showRegister && (
        <Register onClose={() => setShowRegister(false)} onSwitchToLogin={handleSwitchToLogin} />
      )}
    </div>
  );
}
