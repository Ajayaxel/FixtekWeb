import React, { useState, useRef } from "react";
import { registerAPI } from "../../utils/api";
import { useAuth } from "../../context/AuthContext";

function Register({ onClose, onVerified, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    phone: "",
    address: "",
  });
  const [phoneCountryCode, setPhoneCountryCode] = useState("IN");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const modalRef = useRef(null);
  const { login } = useAuth();

  const countryCodes = {
    IN: "+91",
    US: "+1",
    UK: "+44",
    AE: "+971",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!formData.name || !formData.name.trim()) {
      setError("Please enter your name");
      return;
    }

    if (!formData.email || !formData.email.trim()) {
      setError("Please enter your email");
      return;
    }

    if (!formData.password || formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (formData.password !== formData.password_confirmation) {
      setError("Passwords do not match");
      return;
    }

    if (!phoneNumber || phoneNumber.trim().length < 6) {
      setError("Please enter a valid phone number");
      return;
    }

    if (!formData.address || !formData.address.trim()) {
      setError("Please enter your address");
      return;
    }

    const fullPhone = `${countryCodes[phoneCountryCode]}${phoneNumber.trim()}`;

    setLoading(true);
    try {
      const response = await registerAPI({
        ...formData,
        phone: fullPhone,
      });

      if (response.success && response.data) {
        // Don't auto-login, just show login page
        onClose();
        if (onSwitchToLogin) {
          // Wait a moment then show login
          setTimeout(() => {
            onSwitchToLogin();
          }, 300);
        }
      }
    } catch (err) {
      // Show all error messages properly
      const errorMessage = err.message || err.response?.data?.message || "Registration failed. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-60 p-4">
      <div
        ref={modalRef}
        className="bg-white rounded-xl shadow-lg w-full max-w-[777px] h-auto max-h-[90vh] p-6 md:p-9 relative font-manrope overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-black hover:text-black text-[32px] z-10"
        >
          ×
        </button>

        <form onSubmit={handleRegister}>
          {/* Register Step */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="flex-1">
              <h2 className="text-[40px] md:text-[64px] font-bold text-black">
                Register
              </h2>
              <p className="text-black text-[20px] md:text-[25px] mt-1">
                Create your Fixtek account
              </p>
              <div className="border-b-2 border-gray-700 mt-6"></div>
            </div>

            <img
              src="isometric-data-protection-concept-with-parent-child-login-window-lock-3d 1.png"
              alt="register illustration"
              className="w-[142px] h-[198px] object-contain mx-auto md:mx-0"
            />
          </div>

          {error && (
            <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="mt-8 flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full h-[60px] md:h-[75px] px-3 py-2 border rounded-lg bg-[#E4E4E4] text-black focus:outline-none focus:ring-2 focus:ring-[#00343D]"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full h-[60px] md:h-[75px] px-3 py-2 border rounded-lg bg-[#E4E4E4] text-black focus:outline-none focus:ring-2 focus:ring-[#00343D]"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <div className="flex flex-col md:flex-row gap-4">
              <select
                className="w-full md:w-[97px] h-[60px] md:h-[75px] px-3 py-2 border rounded-lg bg-[#E4E4E4] text-black font-medium focus:outline-none focus:ring-2 focus:ring-[#00343D]"
                value={phoneCountryCode}
                onChange={(e) => setPhoneCountryCode(e.target.value)}
              >
                <option value="IN">IN +91</option>
                <option value="US">US +1</option>
                <option value="UK">UK +44</option>
                <option value="AE">AE +971</option>
              </select>

              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full md:w-[515px] h-[60px] md:h-[75px] px-3 py-2 border rounded-lg bg-[#E4E4E4] text-black focus:outline-none focus:ring-2 focus:ring-[#00343D]"
                value={phoneNumber}
                onChange={handlePhoneChange}
                required
              />
            </div>

            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              className="w-full h-[60px] md:h-[75px] px-3 py-2 border rounded-lg bg-[#E4E4E4] text-black focus:outline-none focus:ring-2 focus:ring-[#00343D]"
              value={formData.address}
              onChange={handleInputChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full h-[60px] md:h-[75px] px-3 py-2 border rounded-lg bg-[#E4E4E4] text-black focus:outline-none focus:ring-2 focus:ring-[#00343D]"
              value={formData.password}
              onChange={handleInputChange}
              required
              minLength={6}
            />

            <input
              type="password"
              name="password_confirmation"
              placeholder="Confirm your password"
              className="w-full h-[60px] md:h-[75px] px-3 py-2 border rounded-lg bg-[#E4E4E4] text-black focus:outline-none focus:ring-2 focus:ring-[#00343D]"
              value={formData.password_confirmation}
              onChange={handleInputChange}
              required
              minLength={6}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-[622px] h-[55px] md:h-[60px] bg-[#00343D] text-white rounded-lg mt-6 hover:bg-[#024650] transition text-[16px] md:text-[18px] font-bold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Registering..." : "Register"}
          </button>

          <p className="text-[14px] md:text-[18px] font-medium text-black mt-6 leading-relaxed">
            By clicking on Register, I agree to our{" "}
            <span className="font-bold text-black cursor-pointer hover:underline">
              Terms and Conditions
            </span>
            ,<br className="hidden md:block" /> our{" "}
            <span className="font-bold text-black cursor-pointer hover:underline">
              Privacy Policy
            </span>
          </p>

          <div className="mt-6 text-center">
            <p className="text-[14px] md:text-[18px] text-black">
              Already have an account?{" "}
              <span
                onClick={onSwitchToLogin}
                className="text-[#00343D] font-bold cursor-pointer hover:underline"
              >
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

