
import { useState } from 'react';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Hud from './components/Hud';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Team from './components/Team';
import BookingModal from './components/BookingModal';
import LoginModal from './components/LoginModal';
import AboutUs from './components/AboutUs';
import TacticalMap from './components/TacticalMap';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import MobileFloatingButton from './components/MobileFloatingButton';

import { ToastProvider } from './components/ToastSystem';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <ToastProvider>
      <Hud />
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} onOpenLogin={() => setIsLoginOpen(true)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      <Hero onOpenBooking={() => setIsBookingOpen(true)} />
      <AboutUs />
      <Services />
      <Feature />
      <Gallery />
      <Team onOpenBooking={() => setIsBookingOpen(true)} />
      <Testimonials />
      <TacticalMap />
      <Footer />
      <MobileFloatingButton onOpenBooking={() => setIsBookingOpen(true)} />
    </ToastProvider>
  );
}

export default App;
