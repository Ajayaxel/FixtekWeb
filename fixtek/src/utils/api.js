// API Base URL
export const API_BASE_URL = "https://valiant-nourishment-fixtech.up.railway.app/api/v1";

// Get token from localStorage
export const getToken = () => {
  return localStorage.getItem("token");
};

// Set token in localStorage
export const setToken = (token) => {
  localStorage.setItem("token", token);
};

// Remove token from localStorage
export const removeToken = () => {
  localStorage.removeItem("token");
};

// Get user data from localStorage
export const getUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) {
    try {
      return JSON.parse(userStr);
    } catch (e) {
      return null;
    }
  }
  return null;
};

// Set user data in localStorage
export const setUser = (userData) => {
  localStorage.setItem("user", JSON.stringify(userData));
};

// Remove user data from localStorage
export const removeUser = () => {
  localStorage.removeItem("user");
};

// API Request function
export const apiRequest = async (endpoint, options = {}) => {
  const token = getToken();
  
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    const data = await response.json();
    
    if (!response.ok) {
      // Extract error message from response
      const errorMessage = data.message || data.error || data.errors?.message || "Request failed";
      const error = new Error(errorMessage);
      error.response = { data };
      throw error;
    }
    
    return data;
  } catch (error) {
    // If it's already our error, rethrow it
    if (error.response) {
      throw error;
    }
    // Otherwise, wrap it
    throw new Error(error.message || "Network error. Please try again.");
  }
};

// Login API
export const loginAPI = async (email, password) => {
  return await apiRequest("/customer/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
};

// Register API
export const registerAPI = async (userData) => {
  return await apiRequest("/customer/register", {
    method: "POST",
    body: JSON.stringify(userData),
  });
};

