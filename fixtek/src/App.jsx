import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useRef } from 'react';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/common/Navbar';
import Homepage from './pages/Homepage';
import Services from './pages/Services';
import Footersection from './components/common/Footersection';
import Booking from './pages/Booking';
import Whoweare from './pages/Whoweare';
import Partnerwithus from './pages/Partnerwithus';
import Faqs from './pages/Faqs';
import ServiceBooking from './pages/ServiceBooking';

function App() {
  const serviceRef = useRef(null);

  return (
    <AuthProvider>
      <Router>
        {/* Pass the ref to Navbar */}
        <Navbar scrollToServiceRef={serviceRef} />

        <Routes>
          <Route path="/" element={<Homepage serviceRef={serviceRef} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/footersection" element={<Footersection />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/who-we-are" element={<Whoweare />} />
          <Route path="/partner-with-us" element={<Partnerwithus />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/service-booking" element={<ServiceBooking />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;


