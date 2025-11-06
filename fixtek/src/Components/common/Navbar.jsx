import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Login from "../auth/Login";
import Register from "../auth/Register";

export default function Navbar({ scrollToServiceRef }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef(null);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    if (showProfile) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showProfile]);

  const handleServicesClick = () => {
    if (location.pathname === "/") {
      scrollToServiceRef?.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/services");
    }
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
    navigate("/");
  };

  return (
    <div className="flex justify-center">
      {/* Removed shadow-xl */}
      <nav className="w-[900px] bg-white rounded-2xl justify-center">
        <div className="w-[900px] h-[43px] flex justify-between items-center space-x-10 py-3 px-10 font-manrope text-[17px] text-gray-800">
          
          {/* Left Links */}
          <div className="flex space-x-20">
            <button
              onClick={handleServicesClick}
              className="hover:text-black font-manrope"
            >
              Services
            </button>
            <NavLink
              to="/who-we-are"
              className={({ isActive }) =>
                isActive ? "font-bold text-black" : "hover:text-black"
              }
            >
              Who We Are
            </NavLink>
          </div>

          {/* Logo */}
          <div className="text-center flex-shrink-0">
            <NavLink to="/" className="block text-center">
              <h1 className="text-[20px] font-extrabold tracking-wide">FIXTEK</h1>
              <p className="text-[7px] font-semibold tracking-widest">MAINTENANCE</p>
            </NavLink>
          </div>

          {/* Right Links */}
          <div className="flex items-center space-x-20">
            <NavLink
              to="/partner-with-us"
              className={({ isActive }) =>
                isActive ? "font-bold text-black" : "hover:text-black"
              }
            >
              Partner With Us
            </NavLink>
            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                isActive ? "font-bold text-black" : "hover:text-black"
              }
            >
              FAQs
            </NavLink>

            {/* User Profile Section - Only show when logged in */}
            {isAuthenticated && user && (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setShowProfile(!showProfile)}
                  className="flex items-center space-x-2 hover:opacity-80 transition"
                >
                  <div className="w-8 h-8 bg-[#00343D] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {user.name?.charAt(0)?.toUpperCase() || "U"}
                  </div>
                  <span className="text-black font-medium text-sm md:text-base">
                    {user.name}
                  </span>
                </button>

                {/* Profile Dropdown */}
                {showProfile && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-200">
                      <p className="font-bold text-black text-sm">{user.name}</p>
                      <p className="text-gray-600 text-xs mt-1">{user.email}</p>
                      {user.phone && (
                        <p className="text-gray-600 text-xs mt-1">{user.phone}</p>
                      )}
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
            )}
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onSwitchToRegister={handleSwitchToRegister}
        />
      )}

      {/* Register Modal */}
      {showRegister && (
        <Register
          onClose={() => setShowRegister(false)}
          onSwitchToLogin={handleSwitchToLogin}
        />
      )}
    </div>
  );
}
